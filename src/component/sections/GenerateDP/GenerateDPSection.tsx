"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { Check, Upload, Download, Share2, ChevronLeft } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Step = 1 | 2 | 3;

interface StyleConfig {
  id: number;
  label: string;
  thumb: string;
  frame: string;
  photoRect: { x: number; y: number; w: number; h: number };
  nameFill: string;
  profFill: string;
  circular: boolean;
}

const CANVAS_SIZE = 600;

const STYLES: StyleConfig[] = [
  {
    id: 1,
    label: "Classic",
    thumb: "/technova-dp-1.svg",
    frame: "/technova-dp-1.svg",
    photoRect: { x: 148, y: 160, w: 304, h: 260 },
    nameFill: "#ffffff",
    profFill: "#d1d5db",
    circular: false,
  },
  {
    id: 2,
    label: "Dark Tech",
    thumb: "/dp-frame-2.png",
    frame: "/dp-frame-2.png",
    photoRect: { x: 172, y: 138, w: 256, h: 230 },
    nameFill: "#fbbf24",
    profFill: "#ffffff",
    circular: false,
  },
  {
    id: 3,
    label: "Futuristic",
    thumb: "/dp-frame-3.png",
    frame: "/dp-frame-3.png",
    photoRect: { x: 155, y: 135, w: 290, h: 260 },
    nameFill: "#ffffff",
    profFill: "#e0e7ff",
    circular: true,
  },
];

// ── Helper: load an image to HTMLImageElement, returns a Promise ──────────────
function loadImage(src: string): Promise<HTMLImageElement> {
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
async function renderCanvas(
  canvas: HTMLCanvasElement,
  style: StyleConfig,
  photo: string | null,
  name: string,
  profession: string,
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

    ctx.fillStyle = "rgba(0,0,0,0.65)";
    ctx.fillRect(x, barY, w, barH);

    ctx.textAlign = "center";
    if (name) {
      ctx.fillStyle = style.nameFill;
      ctx.font = `bold 15px 'Bricolage Grotesque', sans-serif`;
      ctx.fillText(name, x + w / 2, barY + 20, w - 10);
    }
    if (profession) {
      ctx.fillStyle = style.profFill;
      ctx.font = `12px 'Bricolage Grotesque', sans-serif`;
      ctx.fillText(profession, x + w / 2, barY + 40, w - 10);
    }
  }
}

// ─── Step Indicator ───────────────────────────────────────────────────────────
const StepIndicator = ({ step }: { step: Step }) => {
  const steps = [
    { n: 1, label: "Upload your picture" },
    { n: 2, label: "Pick a Style" },
    { n: 3, label: "Download and Share" },
  ];

  return (
    <div className="flex items-start justify-center gap-0 mb-10">
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

// ─── Main Component ───────────────────────────────────────────────────────────
export default function GenerateDPSection() {
  const [step, setStep] = useState<Step>(1);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<StyleConfig>(STYLES[0]);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [generating, setGenerating] = useState(false);
  const [finalDataUrl, setFinalDataUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  // Re-render live preview whenever inputs or style changes (step 2)
  useEffect(() => {
    if (step !== 2 || !previewCanvasRef.current) return;
    renderCanvas(
      previewCanvasRef.current,
      selectedStyle,
      userPhoto,
      name,
      profession,
    ).catch(console.error);
  }, [step, selectedStyle, userPhoto, name, profession]);

  // ── Handlers ─────────────────────────────────────────────────────────────────
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUserPhoto(ev.target?.result as string);
      setStep(2);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUserPhoto(ev.target?.result as string);
      setStep(2);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const tmpCanvas = document.createElement("canvas");
      await renderCanvas(tmpCanvas, selectedStyle, userPhoto, name, profession);
      setFinalDataUrl(tmpCanvas.toDataURL("image/png"));
      setStep(3);
    } catch (err) {
      console.error("Failed to generate DP", err);
    } finally {
      setGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!finalDataUrl) return;
    const a = document.createElement("a");
    a.href = finalDataUrl;
    a.download = `technova-dp-${Date.now()}.png`;
    a.click();
  };

  const handleShare = async () => {
    if (!finalDataUrl) return;
    try {
      const blob = await (await fetch(finalDataUrl)).blob();
      const file = new File([blob], "technova-dp.png", { type: "image/png" });
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "I'm attending TechNova 2026!",
          text: "Join me at TechNova Africa's Web3 Carnival, Mar 12-14 2026! Register free at technovasummit.com",
          files: [file],
        });
      } else {
        handleDownload();
      }
    } catch {
      handleDownload();
    }
  };

  const handleReset = () => {
    setStep(1);
    setUserPhoto(null);
    setName("");
    setProfession("");
    setFinalDataUrl(null);
    setSelectedStyle(STYLES[0]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // ── Step 1: Upload ─────────────────────────────────────────────────────────
  const renderUpload = () => (
    <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
      <div
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 hover:border-black transition-colors cursor-pointer rounded-2xl w-full p-12 flex flex-col items-center gap-4 bg-white group"
      >
        <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
          <Upload className="w-7 h-7 text-gray-500" />
        </div>
        <div className="text-center">
          <p className="font-semibold text-gray-800">
            Click to upload your photo
          </p>
          <p className="text-sm text-gray-400 mt-1">or drag and drop here</p>
          <p className="text-xs text-gray-400 mt-2">PNG, JPG up to 10MB</p>
        </div>
      </div>

      {userPhoto && (
        <div className="flex items-center gap-3 w-full bg-white rounded-xl px-4 py-3 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={userPhoto}
            alt="Preview"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">Photo uploaded ✓</p>
            <button
              className="text-xs text-blue-600 underline mt-0.5"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
            >
              Change photo
            </button>
          </div>
          <button
            onClick={() => setStep(2)}
            className="bg-black text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors flex-shrink-0"
          >
            Continue →
          </button>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );

  // ── Step 2: Pick Style + Form ─────────────────────────────────────────────
  const renderStyle = () => (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl mx-auto">
      {/* Canvas Preview */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center">
          <canvas
            ref={previewCanvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="w-full max-w-sm rounded-xl"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>
        {/* Style Thumbnails */}
        <div className="flex gap-3">
          {STYLES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedStyle(s)}
              className={`flex-1 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                selectedStyle.id === s.id
                  ? "border-black scale-105 shadow-md"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.thumb}
                alt={s.label}
                className="w-full h-20 object-cover"
              />
              <p className="text-xs font-medium text-center py-1 bg-white">
                {s.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="lg:w-80 bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-5">
        <h3 className="text-xl font-bold">Create your DP</h3>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Name/Nickname
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name/Nickname"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Profession
          </label>
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            placeholder="What do you do?"
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={generating}
          className="mt-auto bg-black text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {generating ? "Generating…" : "Generate DP"}
        </button>

        <button
          onClick={() => setStep(1)}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-black transition-colors mx-auto"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      </div>
    </div>
  );

  // ── Step 3: Download ──────────────────────────────────────────────────────
  const renderDownload = () => (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-sm p-4 w-full">
        {finalDataUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={finalDataUrl} alt="Your DP" className="w-full rounded-xl" />
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 bg-black text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-black rounded-xl px-5 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>

      <button
        onClick={handleReset}
        className="text-sm text-gray-500 hover:text-black transition-colors underline"
      >
        Generate another
      </button>
    </div>
  );

  return (
    <section className="min-h-screen bg-[#f4f4f4] font-bricolage-grotesque px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Generate Pictures and Show them off!
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Create a Technova branded image to announce your attendance!
          </p>
        </div>

        <StepIndicator step={step} />

        {step === 1 && renderUpload()}
        {step === 2 && renderStyle()}
        {step === 3 && renderDownload()}
      </div>
    </section>
  );
}
