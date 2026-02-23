"use client";

import { Speaker } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import defaultPhoto from "@/assets/images/moses-nwigberi-profile.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  TwitterIcon,
  X,
} from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { PiTiktokLogoBold } from "react-icons/pi";

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "twitter":
      return <TwitterIcon size={18} />;
    case "linkedin":
      return <Linkedin size={18} />;
    case "instagram":
      return <Instagram size={18} />;
    case "facebook":
      return <Facebook size={18} />;
    case "youtube":
      return <Youtube size={18} />;
    case "tiktok":
      return <PiTiktokLogoBold size={18} />;
    case "behance":
      return <FaBehance size={18} />;
    default:
      return <Globe size={18} />;
  }
};

const SpeakerCard: React.FC<Speaker> = ({
  id,
  name,
  role,
  image,
  bio,
  position,
  socials,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        layoutId={`speaker-${id}`}
        onClick={() => setOpen(true)}
        whileHover={{ y: -4 }}
        className="flex flex-col cursor-pointer h-auto bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        {/* Image */}
        <div className="relative w-full h-72 md:h-80 bg-gray-100">
          <Image
            src={image || defaultPhoto}
            alt={name}
            fill
            className={"object-cover " + position}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Info */}
        <div className="px-4 py-8">
          <h3 className="font-bold text-lg leading-tight">{name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{role}</p>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={`speaker-${id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-md w-full relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 p-1.5 bg-black/10 hover:bg-black/20 rounded-full z-10 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Image */}
              <div className="relative w-full h-[55vh] bg-gray-100">
                <Image
                  src={image || defaultPhoto}
                  alt={name}
                  fill
                  className={"object-cover " + position}
                  sizes="448px"
                />
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-sm text-gray-500 mb-3">{role}</p>

                {bio && (
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-6">
                    {bio}
                  </p>
                )}

                {/* Socials */}
                {Object.entries(socials || {}).length > 0 && (
                  <div className="flex gap-3 flex-wrap">
                    {Object.entries(socials || {}).map(([platform, url]) =>
                      url ? (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black transition-colors"
                        >
                          {getSocialIcon(platform)}
                        </a>
                      ) : null,
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpeakerCard;
