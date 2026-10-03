"use client";

import { useState, type FormEvent } from "react";
import { site, waLink } from "@/content/site";

const reasons = [
  "Book a Free Trial",
  "Membership & Pricing",
  "Personal / Home Training",
  "Sponsorship",
  "Brand Deal / Collaboration",
  "Press / Media",
  "Other",
];

const disciplineOptions = [
  "Boxing",
  "Kickboxing",
  "Muay Thai",
  "MMA",
  "Wushu / Kung Fu",
  "Self-Defense",
  "Strength & Fitness",
  "Kids Program",
  "Not Sure Yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData): Record<string, string> {
    const e: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) e.name = "Please enter your name.";
    if (!String(data.get("phone") || "").trim()) e.phone = "Please enter a phone number.";
    const reason = String(data.get("reason") || "");
    if (!reason) e.reason = "Please choose a reason.";
    const email = String(data.get("email") || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email.";
    return e;
  }

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill this hidden field; humans never see it.
    if (String(data.get("company") || "").trim()) return;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("error");
      return;
    }

    // Default provider: open WhatsApp pre-filled. (Wire Resend/Formspree via a
    // server action when FORM_PROVIDER is set — keys stay server-side.)
    const lines = [
      "Hi ROAR — new enquiry from the website:",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : "",
      `Reason: ${data.get("reason")}`,
      data.get("discipline") ? `Discipline: ${data.get("discipline")}` : "",
      data.get("message") ? `Message: ${data.get("message")}` : "",
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener");
    setStatus("sent");
    form.reset();
  }

  return (
    <form className="trial-form" onSubmit={onSubmit} noValidate>
      {/* Honeypot */}
      <div aria-hidden="true" className="hp-field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="f-name">Full name *</label>
        <input id="f-name" name="name" type="text" required placeholder="Your name" aria-invalid={!!errors.name} />
        {errors.name && <span className="field-err">{errors.name}</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-phone">Phone number *</label>
          <input id="f-phone" name="phone" type="tel" required placeholder="+92 3XX XXXXXXX" aria-invalid={!!errors.phone} />
          {errors.phone && <span className="field-err">{errors.phone}</span>}
        </div>
        <div className="field">
          <label htmlFor="f-email">Email address (optional)</label>
          <input id="f-email" name="email" type="email" placeholder="you@email.com" aria-invalid={!!errors.email} />
          {errors.email && <span className="field-err">{errors.email}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-reason">Reason for contact *</label>
        <select id="f-reason" name="reason" required defaultValue="" aria-invalid={!!errors.reason}>
          <option value="" disabled>
            What can we help with?
          </option>
          {reasons.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        {errors.reason && <span className="field-err">{errors.reason}</span>}
      </div>

      <div className="field">
        <label htmlFor="f-disc">Discipline of interest (optional)</label>
        <select id="f-disc" name="discipline" defaultValue="">
          <option value="" disabled>
            Select a discipline
          </option>
          {disciplineOptions.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="f-msg">Message (optional)</label>
        <textarea id="f-msg" name="message" rows={3} placeholder="Tell us a little about what you're looking for…" />
      </div>

      <button type="submit" className="btn btn-red btn-block">
        Send Message
      </button>

      {status === "sent" && (
        <p className="form-note" role="status">
          Opening WhatsApp with your message… If it didn&apos;t open, message us directly at {site.whatsapp.display}.
        </p>
      )}
      {status === "error" && (
        <p className="form-note form-note--err" role="alert">
          Please fix the highlighted fields and try again.
        </p>
      )}
    </form>
  );
}
