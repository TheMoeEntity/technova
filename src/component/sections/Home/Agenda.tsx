"use client";

import { useState } from "react";
import AgendaTabs from "@/component/ui/AgendaTabs";
import EventList from "@/component/ui/EventList";

export default function Agenda() {
  const [activeDay, setActiveDay] = useState("thursday");

  const days = [
    { id: "thursday", label: "Thursday, 12th" },
    { id: "friday", label: "Friday, 13th" },
    { id: "saturday", label: "Saturday, 14th" },
  ];

  const eventsByDay = {
    thursday: [
      { title: "Carnival Showcase Kickoff", time: "9:00 AM" },
      { title: "Trade Fair", time: "11:00 AM" },
      { title: "Pitch Competition", time: "2:00 PM" },
      { title: "Investor Meetup", time: "4:00 PM" },
      { title: "Evening Social & Entertainment", time: "6:00 PM" },
    ],
    friday: [
      { title: "Hackathon Kickoff", time: "9:00 AM" },
      { title: "Masterclass:DeFi Fundamentals", time: "11:00 AM" },
      { title: "Pitch Competition", time: "2:00 PM" },
      { title: "Investor Meetup", time: "4:00 PM" },
      { title: "Evening Social & Entertainment", time: "6:00 PM" },
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

  return (
    <div className="min-h-screen bg-black px-3 md:px-8 py-16">
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
          />
        </div>
      </div>
    </div>
  );
}
