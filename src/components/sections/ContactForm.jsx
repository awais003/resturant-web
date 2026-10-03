"use client";

import { useState } from "react";
import { Button } from "../common/Button";

const initial = { name: "", email: "", phone: "", message: "" };

export const ContactForm = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const existing = JSON.parse(
        localStorage.getItem("lumiere-messages") || "[]"
      );
      existing.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem("lumiere-messages", JSON.stringify(existing));
    } catch {
      // Ignore storage errors in the simulated flow.
    }
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
    setForm(initial);
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-[var(--surface)] p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--gold)]/40 text-2xl text-[var(--gold)]">
          ✓
        </span>
        <h3 className="font-display text-2xl">Message Sent</h3>
        <p className="max-w-sm text-sm text-[var(--foreground)]/65">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <Button type="button" variant="secondary" onClick={() => setStatus("idle")}>
          Send Another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-5 rounded-xl border border-white/10 bg-[var(--surface)] p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="ct-name" error={errors.name}>
          <input
            id="ct-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className={inputClass(errors.name)}
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email" htmlFor="ct-email" error={errors.email}>
          <input
            id="ct-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            className={inputClass(errors.email)}
            placeholder="jane@example.com"
          />
        </Field>
      </div>
      <Field label="Phone" htmlFor="ct-phone" error={errors.phone}>
        <input
          id="ct-phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          className={inputClass(errors.phone)}
          placeholder="+1 (555) 000-0000"
        />
      </Field>
      <Field label="Message" htmlFor="ct-message" error={errors.message}>
        <textarea
          id="ct-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClass(errors.message)}
          placeholder="How can we help?"
        />
      </Field>
      <Button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
};

const inputClass = (error) =>
  `w-full rounded-lg border bg-black/30 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--foreground)]/35 focus:border-[var(--gold)] ${
    error ? "border-red-400/70" : "border-white/10"
  }`;

const Field = ({ label, htmlFor, error, children }) => (
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
