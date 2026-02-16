"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { speakers } from "@/lib/constants";
import { TeamMember } from "@/types";
import { getSocialIcon } from "../Team/TeamSection";

export default function SpeakersSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const sanitizedHTML = (content: string) => DOMPurify.sanitize(content);

  const displayedMembers = speakers.slice(0, visibleCount);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoading &&
          visibleCount < speakers.length
        ) {
          setIsLoading(true);
          setTimeout(() => {
            // Use functional update to ensure we have latest
            setVisibleCount((prev) => Math.min(prev + 10, speakers.length));
            setIsLoading(false);
          }, 750);
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoading, visibleCount]);

  return (
    <div className="w-full bg-white pb-16 pt-5">
      <div className="max-w-6xl mx-auto">
        {/* Speakers Grid */}
        <div className="space-y-8 md:px-24">
          <AnimatePresence mode="wait">
            {displayedMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center gap-8 pb-8 border-b border-gray-200 last:border-b-0"
              >
                {/* Profile Image */}
                <motion.div
                  className="shrink-0 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  layoutId={`image-${member.id}`}
                  onClick={() => setSelectedMember(member)}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={100}
                    loading="lazy"
                    height={100}
                    className="md:w-24 md:h-24 h-18 w-18 rounded-lg object-cover object-top shadow-md"
                  />
                </motion.div>

                {/* Member Info */}
                <div className="grow">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <h4 className="text-black mb-1">{member.email}</h4>
                  <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: sanitizedHTML(member.role),
                    }}
                  />
                </div>
                {/* Social Links */}
                <div className="flex gap-4 flex-col md:flex-row shrink-0">
                  {Object.entries(member.socials).map(([platform, url]) => {
                    if (!url) return null;
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#F5F5F5] text-black"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {getSocialIcon(platform)}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {visibleCount < speakers.length && (
            <div
              ref={loadMoreRef}
              className="h-20 w-full flex justify-center items-center py-4"
            >
              {isLoading && <Loader2 className="animate-spin text-black" />}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl overflow-hidden max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-10"
              >
                <X size={20} />
              </button>
              <motion.div
                layoutId={`image-${selectedMember.id}`}
                className="relative h-[50vh] w-full"
              >
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={selectedMember.name}
                  fill
                  quality={100}
                  className="object-cover object-top"
                />
              </motion.div>
              <div className="px-6 py-3">
                <h3 className="text-2xl font-bold text-black mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-600 mb-4">{selectedMember.role}</p>
                {selectedMember.bio && (
                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {selectedMember.bio}
                  </p>
                )}
                <div className="flex gap-4">
                  {Object.entries(selectedMember.socials).map(
                    ([platform, url]) => {
                      if (!url) return null;
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-[#F5F5F5] text-black hover:bg-gray-200 transition-colors"
                        >
                          {getSocialIcon(platform)}
                        </a>
                      );
                    },
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
