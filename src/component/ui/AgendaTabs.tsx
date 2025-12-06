"use client";

interface AgendaTabsProps {
  days: Array<{ id: string; label: string }>;
  activeDay: string;
  onDayChange: (day: string) => void;
}

export default function AgendaTabs({
  days,
  activeDay,
  onDayChange,
}: AgendaTabsProps) {
  const tabColors = ["bg-[#F85B1A]", "bg-[#FFC420]", "bg-[#1CC2FF]"];
  return (
    <div className="flex gap-4 bg-zinc-900/50 p-2 rounded-full w-full">
      {days.map((day) => (
        <button
          key={day.id}
          onClick={() => onDayChange(day.id)}
          className={`px-8 transition-colors duration-300 ease-in cursor-pointer flex-1 py-3 rounded-full font-semibold text-lg ${
            activeDay === day.id
              ? tabColors[days.indexOf(day)] + " text-white"
              : "bg-transparent text-white/70 hover:text-white"
          }`}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
}
