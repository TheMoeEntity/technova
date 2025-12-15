"use client";

import { useRef, useState } from "react";
import AgendaTabs from "@/component/ui/AgendaTabs";
import EventList from "@/component/ui/EventList";
import { useScrollTo } from "@/hooks/useScrollTo";

export default function Agenda() {
  const [activeDay, setActiveDay] = useState("thursday");

  const days = [
    { id: "thursday", label: "Thursday, 12th", color: "#F85B1A" },
    { id: "friday", label: "Friday, 13th", color: "#FEC421" },
    { id: "saturday", label: "Saturday, 14th", color: "#1BC2FF" },
  ];

  const eventsByDay = {
    thursday: [
      { title: "Arrivals | Guest Checkin", time: "9:00 -10:00 AM" },
      {
        title: "Opening Prayer | Ribbon cutting for exhibition area",
        time: "10:00 - 11:00 AM",
      },
      { title: "Vendors officially open", time: "11:00 - 11:30 AM" },
      {
        title: "The Future of trade and commerce | intermittent talk",
        time: "11:30 - 12:00 PM",
      },
      {
        title: "Live Demo 1 [AgroTech/Green innovation]",
        time: "12:00 - 12:30 PM",
      },
      {
        title: "Tech Trivials | Spin the wheel (interactive games)",
        time: "12:30 - 1:00 PM",
      },
      {
        title: "Cultural Performance 1",
        time: "1:00 - 1:30 PM",
      },
      {
        title: "Digital skills for SMEs | intermittent talk",
        time: "1:30 - 2:00 PM",
      },
      {
        title: "Live Demo 2 [Commerce/Fintech]",
        time: "2:00 -2:30 PM",
      },
      {
        title: "Cultural Performance",
        time: "2:30 -3:00 PM",
      },
      {
        title: "Cultural Performance",
        time: "3:00 -3:30 PM",
      },
      {
        title: "Networking | Photo Ops",
        time: "3:30 -4:00 PM",
      },
      {
        title: "Media Interviews & Wrap ups",
        time: "4:00 - 5:00 PM",
      },
    ],
    friday: [
      { title: "Arrivals | Guest Checkin", time: "9:00 -10:00 AM" },
      { title: "Booth Reopening | DJ morning vibes", time: "10:00 - 10:30 AM" },
      { title: "Cultural Performance 1", time: "10:30 - 11:00 AM" },
      { title: "Cultural Performance 2", time: "11:00 - 11:30 AM" },
      { title: "Vendor DEALS HOUR", time: "11:30 - 12:30 PM" },
      { title: "Demo Session 1", time: "12:30 - 1:00 PM" },
      { title: "Startup pitch session", time: "12:30 - 1:30 PM" },
      { title: "Mega Raffles", time: "2:00 - 2:30 PM" },
      { title: "Vendor Showcase/advert", time: "2:30 - 3:00 PM" },
      { title: "Cultural Performance 3", time: "3:00 - 3:30 PM" },
      { title: "Startup/Vendor Award Presentation", time: "3:30 - 4:00 PM" },
      { title: "Closing Remarks | Music", time: "4:00 - 5:00 PM" },
    ],
    saturday: [
      { title: "Arrivals/Registration", time: "8:00 - 9:00 AM" },
      { title: "Music/Hype/Warm up", time: "9:00 - 10:00 AM" },
      { title: "Opening address by the Governor", time: "10:00 - 10:20 AM" },
      {
        title: "TECHNOVA AI: Commerce meets tech in Abakaliki",
        time: "10:25 - 10:55 AM",
      },
      {
        title: "STEM & Youth Innovation in Ebonyi State",
        time: "11:00 - 11:20 AM",
      },
      {
        title: "SaltCity as a digital innovation hub",
        time: "11:25 - 11:45 AM",
      },
      {
        title: "Taxation in Nigeria's Digital Economy",
        time: "11:50 - 12:20 PM",
      },
      {
        title: "Blockchain adoption in Africa - Trend or Transformation",
        time: "12:25 - 12:55 PM",
      },
      {
        title: "The Power of education & Community development",
        time: "01:00 - 1:30 PM",
      },
      {
        title: "Early stage Funding, Infrastructure and Talent pipelines",
        time: "01:35 - 2:55 PM",
      },
      {
        title: "Builders Round Table",
        time: "03:00 - 3:30 PM",
      },
      {
        title: "Access & Education: Empowering the Next generation of founders",
        time: "03:35 - 4:00 PM",
      },
      {
        title: "Closing Remarks: Announcements, Prizes, Thanks for coming",
        time: "04:00 - 4:30 PM",
      },
      {
        title: "Event Ends",
        time: "04:30 - 5:00 PM",
      },
    ],
  };
  const containerRef = useRef<HTMLDivElement | null>(null);
  useScrollTo(containerRef, "scrollToSchedule");
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black px-3 md:px-8 py-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 gap-12 mb-12 place-items-center">
          <div>
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              Explore our 3days packed Agenda.
            </h1>
          </div>
          <div className="flex items-start">
            <p className="text-white/90 text-lg leading-relaxed font-light">
              We promise to Deliver a Three days packed with insights,
              innovation, and inspiration
            </p>
          </div>
        </div>

        {/* Tabs and Event List */}
        <div className="space-y-6 w-full">
          <AgendaTabs
            days={days}
            activeDay={activeDay}
            onDayChange={setActiveDay}
          />
          <EventList
            events={eventsByDay[activeDay as keyof typeof eventsByDay]}
            activeDay={activeDay}
            color={days.find((day) => day.id === activeDay)?.color || "#F85B1A"}
          />
        </div>
      </div>
    </div>
  );
}
