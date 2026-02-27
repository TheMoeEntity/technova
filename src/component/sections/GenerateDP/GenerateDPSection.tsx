"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { Download, Share2, ChevronLeft } from "lucide-react";
import dropImage from "@/assets/images/drop-image.svg";
import NextImage from "next/image";
import { Step, StyleConfig } from "@/types";
import { CANVAS_SIZE, STYLES } from "@/lib/constants";
import { renderCanvas, StepIndicator } from "@/component/ui/GenerateDP";

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
    <div className="flex flex-col mt-20 items-center gap-6 w-full max-w-5xl mx-auto">
      <div
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className=" border-gray-300 hover:border-black transition-colors cursor-pointer rounded-2xl w-full p-12 flex flex-col items-center gap-4 bg-white group"
      >
        <div className="w-50 h-50 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
          <NextImage
            src={dropImage}
            alt="Drop Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="font-semibold text-gray-800">
            Click to upload your photo
          </p>
          <p className=" text-gray-400 mt-1">or drag and drop here</p>
          <p className=" text-gray-400 mt-2">Supported file types: PNG, JPG</p>
        </div>
      </div>

      {userPhoto && (
        <div className="w-fit flex justify-center items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
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
      <div className="order-2 md:order-1 flex-1 w-full flex flex-col gap-4">
        <div className="w-full bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center">
          <canvas
            ref={previewCanvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="w-full max-w-lg rounded-xl"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>
        {/* Style Thumbnails */}
        <div className="flex justify-center md:justify-start gap-3">
          {STYLES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedStyle(s)}
              className={` rounded-xl overflow-hidden border-2 transition-all duration-200 ${
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
              {/* <p className="text-xs font-medium text-center py-1 bg-white">
                {s.label}
              </p> */}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="order-1 md:order-2 flex-1 h-fit bg-white rounded-2xl shadow-sm py-6 flex flex-col gap-5">
        <h3 className="text-3xl md:text-4xl md:mt-10 text-center font-bold">
          Create your DP
        </h3>
        <hr className="w-full border-gray-200 md:mt-10" />
        <div className="px-3 md:px-8 flex flex-col gap-2">
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

        <div className="px-3 md:px-8 flex flex-col gap-2">
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

        <div className="w-full md:mt-5 px-3 flex flex-col gap-5 md:items-end md:justify-end md:pr-8">
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="bg-black w-full md:w-fit text-white rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {generating ? "Generating…" : "Generate DP"}
          </button>
          <div className="w-ful flex md:justify-start justify-center">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-fit flex items-center gap-1 text-sm text-gray-500 hover:text-black transition-colors mx-auto"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </div>
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
    <section className="min-h-screen w-full bg-[#f4f4f4] font-bricolage-grotesque px-4 py-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Generate Pictures and Show them off!
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-lg">
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
