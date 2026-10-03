"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../common/Button";
import { restaurantInfo } from "../../data/restaurantData";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  request: "",
};

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your full name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.phone.trim()) errors.phone = "Please enter your phone number.";
  if (!form.date) errors.date = "Please choose a date.";
  if (!form.time) errors.time = "Please choose a time.";
  if (!form.guests) errors.guests = "Please select the number of guests.";
  return errors;
};

export const BookingModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => firstFieldRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = original;
      clearTimeout(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const reset = setTimeout(() => {
        setForm(initialForm);
        setErrors({});
        setSubmitted(false);
        setIsSubmitting(false);
      }, 250);
      return () => clearTimeout(reset);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      // Simulated reservation submission. Replace with an API call later.
      await new Promise((resolve) => setTimeout(resolve, 900));
      const existing = JSON.parse(
        localStorage.getItem("lumiere-reservations") || "[]"
      );
      existing.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem("lumiere-reservations", JSON.stringify(existing));
    } catch {
      // Ignore storage errors in the simulated flow.
    }
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto p-0 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close booking form"
        onClick={onClose}
        className="fixed inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative w-full max-w-2xl rounded-t-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-2xl animate-[slideUp_400ms_cubic-bezier(0.16,1,0.3,1)] sm:my-8 sm:rounded-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[var(--foreground)]/70 transition-colors hover:border-white/30 hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
        >
          <span aria-hidden="true">×</span>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--gold)]/40 text-2xl text-[var(--gold)]">
              ✓
            </span>
            <h2 id="booking-title" className="font-display text-3xl">
              Reservation Request Received
            </h2>
            <p className="max-w-md text-[var(--foreground)]/70">
              Thank you, {form.name.trim() || "guest"}. We&apos;ve received your
              reservation request and will confirm your table shortly.
            </p>
            <Button type="button" onClick={onClose} className="mt-2">
              Done
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6 pr-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                Reservations
              </span>
              <h2 id="booking-title" className="mt-2 font-display text-3xl">
                Reserve your table
              </h2>
              <p className="mt-1 text-sm text-[var(--foreground)]/60">
                {restaurantInfo.name} · {restaurantInfo.tagline}
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name} htmlFor="bk-name">
                <input
                  id="bk-name"
                  ref={firstFieldRef}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass(errors.name)}
                  placeholder="Jane Doe"
                />
              </Field>

              <Field label="Email" error={errors.email} htmlFor="bk-email">
                <input
                  id="bk-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass(errors.email)}
                  placeholder="jane@example.com"
                />
              </Field>

              <Field label="Phone" error={errors.phone} htmlFor="bk-phone">
                <input
                  id="bk-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass(errors.phone)}
                  placeholder="+1 (555) 000-0000"
                />
              </Field>

              <Field label="Guests" error={errors.guests} htmlFor="bk-guests">
                <select
                  id="bk-guests"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className={inputClass(errors.guests)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                  <option value="9+">9+ guests</option>
                </select>
              </Field>

              <Field label="Date" error={errors.date} htmlFor="bk-date">
                <input
                  id="bk-date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className={inputClass(errors.date)}
                />
              </Field>

              <Field label="Time" error={errors.time} htmlFor="bk-time">
                <input
                  id="bk-time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  className={inputClass(errors.time)}
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Special Request" error={errors.request} htmlFor="bk-request">
                  <textarea
                    id="bk-request"
                    name="request"
                    rows={3}
                    value={form.request}
                    onChange={handleChange}
                    className={inputClass(errors.request)}
                    placeholder="Allergies, occasions, seating preferences…"
                  />
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending…" : "Confirm Reservation"}
                </Button>
                <p className="mt-3 text-center text-xs text-[var(--foreground)]/50">
                  We&apos;ll confirm your reservation by phone or email.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const inputClass = (error) =>
  `w-full rounded-lg border bg-black/30 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/35 focus:border-[var(--gold)] ${
    error ? "border-red-400/70" : "border-white/10"
  }`;

const Field = ({ label, error, htmlFor, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={htmlFor}
      className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--foreground)]/60"
    >
      {label}
    </label>
    {children}
    {error && (
      <span role="alert" className="text-xs text-red-400">
        {error}
      </span>
    )}
  </div>
);
