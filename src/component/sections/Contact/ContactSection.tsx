"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PiTiktokLogoBold } from "react-icons/pi";
import {
  TwitterIcon,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
} from "lucide-react";
import { sendContactEmail } from "@/app/actions/send-email";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Data, SOCIALS } from "@/lib/constants";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: TwitterIcon, href: SOCIALS.X, label: "X" },
    { icon: Instagram, href: SOCIALS.INSTAGRAM, label: "Instagram" },
    { icon: PiTiktokLogoBold, href: SOCIALS.TIKTOK, label: "Tiktok" },
    { icon: Linkedin, href: SOCIALS.LINKEDIN, label: "LinkedIn" },
  ];

  function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
  }

  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:px-8 w-full rounded-2xl">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-5xl font-bold text-black">Get in touch.</h2>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                  <span>@</span> Email Address
                </p>
                <a
                  href={`mailto:${Data.Mail}`}
                  className="text-lg font-semibold text-black"
                >
                  {Data.Mail}
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                  <span>
                    <MapPin size={12} />
                  </span>{" "}
                  Location
                </p>
                <p className="text-lg font-semibold text-black">
                  {Data.Location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-3">
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    placeholder="Enter full name"
                    className={cn(
                      "w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all",
                      errors.fullName ? "border-red-500" : "border-gray-200"
                    )}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-black mb-3">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    placeholder="Enter email address"
                    className={cn(
                      "w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all",
                      errors.email ? "border-red-500" : "border-gray-200"
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-semibold text-black mb-3">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Write your message..."
                  rows={6}
                  className={cn(
                    "w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none",
                    errors.message ? "border-red-500" : "border-gray-200"
                  )}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
