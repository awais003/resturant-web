"use client";

import { useState } from "react";
import { Button } from "../common/Button";
import { useBooking } from "./BookingContext";

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

export const BookingBar = ({ className = "" }) => {
  const { openBooking } = useBooking();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <div
      className={`w-full rounded-2xl border border-white/10 bg-[var(--surface)]/95 p-3 shadow-2xl backdrop-blur-md md:rounded-full md:p-2 ${className}`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          openBooking();
        }}
        className="grid gap-2 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center"
      >
        <BarField label="Date">
          <input
            type="date"
            aria-label="Reservation date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none [color-scheme:dark]"
          />
        </BarField>
        <BarField label="Time">
          <input
            type="time"
            aria-label="Reservation time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none [color-scheme:dark]"
          />
        </BarField>
        <BarField label="Guests" last>
          <select
            aria-label="Number of guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none [color-scheme:dark]"
          >
            {guestOptions.map((n) => (
              <option key={n} value={n} className="bg-[var(--surface)]">
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </BarField>
        <Button type="submit" className="w-full md:w-auto md:px-8">
          Book a Table
        </Button>
      </form>
    </div>
  );
};

const BarField = ({ label, children, last = false }) => (
  <div
    className={`flex flex-col gap-1 px-4 py-2 md:border-r md:border-white/10 ${
      last ? "md:border-r-0" : ""
    }`}
  >
    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
      {label}
    </span>
    {children}
  </div>
);
