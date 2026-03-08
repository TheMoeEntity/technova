import { CANVAS_SIZE } from "@/lib/constants";
import { Step, StyleConfig } from "@/types";
import { Check } from "lucide-react";

import React from "react";

// ── Helper: load an image to HTMLImageElement, returns a Promise ──────────────
export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (!src.startsWith("data:")) {
      img.crossOrigin = "anonymous";
    }

    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// ── Composites photo + frame onto `canvas`, returns a Promise ────────────────
export async function renderCanvas(
  canvas: HTMLCanvasElement,
  style: StyleConfig,
  photo: string | null,
  name: string,
  profession: string,
  imagePosition: "top" | "center" | "bottom" = "center",
): Promise<void> {
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // 1. Load frame (and photo in parallel if available)
  const [frameImg, userImg] = await Promise.all([
    loadImage(style.frame),
    photo ? loadImage(photo) : Promise.resolve(null),
  ]);

  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  // 2. Draw frame as background first
  ctx.drawImage(frameImg, 0, 0, CANVAS_SIZE, CANVAS_SIZE);

  // 3. Draw user photo clipped to the photo rect
  if (userImg) {
    const { x, y, w, h } = style.photoRect;
    ctx.save();

    if (style.circular) {
      const cx = x + w / 2;
      const cy = y + h / 2;
      const r = Math.min(w, h) / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.closePath();
    } else {
      ctx.beginPath();
      ctx.rect(x, y, w, h);
    }
    ctx.clip();

    // cover-fit: crop the user image to fill the rect
    const imgAR = userImg.naturalWidth / userImg.naturalHeight;
    const boxAR = w / h;
    let sx = 0,
      sy = 0,
      sw = userImg.naturalWidth,
      sh = userImg.naturalHeight;
    if (imgAR > boxAR) {
      sw = userImg.naturalHeight * boxAR;
      sx = (userImg.naturalWidth - sw) / 2;
    } else {
      sh = userImg.naturalWidth / boxAR;
      sy = (userImg.naturalHeight - sh) / 2;

      if (imagePosition === "top") {
        sy = 0;
      } else if (imagePosition === "bottom") {
        sy = userImg.naturalHeight - sh;
      }
    }
    ctx.drawImage(userImg, sx, sy, sw, sh, x, y, w, h);
    ctx.restore();
  }

  // 4. Re-draw frame on top so borders/decorations sit above the photo
  // ctx.drawImage(frameImg, 0, 0, CANVAS_SIZE, CANVAS_SIZE);

  // 5. Name / profession overlay bar
  if (name || profession) {
    const { x, y, w, h } = style.photoRect;
    const barH = 55;
    const barY = y + h - barH + 2;

    ctx.fillStyle = "rgba(0,0,0,0.85)";
    ctx.fillRect(x, barY, w, barH);

    ctx.textAlign = "center";
    if (name) {
      ctx.fillStyle = style.nameFill;
      ctx.font = `bold 20px 'Bricolage Grotesque', sans-serif`;
      ctx.fillText(name, x + w / 2, barY + 30, w - 10);
    }
    if (profession) {
      ctx.fillStyle = style.profFill;
      ctx.font = `15px 'Bricolage Grotesque', sans-serif`;
      ctx.fillText(profession, x + w / 2, barY + 49, w - 10);
    }
  }
}

// ─── Step Indicator ───────────────────────────────────────────────────────────
export const StepIndicator = ({ step }: { step: Step }) => {
  const steps = [
    { n: 1, label: "Upload your picture" },
    { n: 2, label: "Pick a Style" },
    { n: 3, label: "Download and Share" },
  ];

  return (
    <div className="flex items-start justify-center gap-0 mb-10 md:mt-20 max-w-4xl mx-auto">
      {steps.map((s, idx) => {
        const done = step > s.n;
        const active = step === s.n;
        return (
          <React.Fragment key={s.n}>
            <div
              className="flex flex-col items-center"
              style={{ minWidth: 100 }}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  done || active
                    ? "bg-black border-black"
                    : "bg-white border-gray-300"
                }`}
              >
                {done || active ? (
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                ) : (
                  <span className="text-gray-400 text-sm font-semibold">
                    {s.n}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center leading-tight">
                Step {s.n}
              </p>
              <p className="text-sm font-semibold text-center leading-tight mt-0.5">
                {s.label}
              </p>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 mt-4 mx-1 transition-colors duration-300 ${
                  step > s.n ? "bg-black" : "bg-gray-200"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
