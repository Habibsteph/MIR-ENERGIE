"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { company, solutions } from "@/lib/content";

export function ProjectInquiryForm() {
  const [status, setStatus] = useState("");
  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!company.email) {
      setStatus("Your inquiry has not been sent. Online inquiries are not available yet. Your details remain in this form.");
      return;
    }
    const form = new FormData(event.currentTarget);
    const fields = [["Full Name", "name"], ["Company", "company"], ["Business Email", "email"], ["Phone / WhatsApp", "phone"], ["Area of Interest", "service"], ["Project Location", "location"], ["Estimated Volume / Capacity", "capacity"], ["Target Timeline", "timeline"], ["Project Details", "message"]];
    const body = fields.map(([label, key]) => `${label}: ${form.get(key) || "Not specified"}`).join("\n\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("MIR ENERGY — Project inquiry")}&body=${encodeURIComponent(body)}`;
    setStatus("Your email application has been requested. Review the inquiry and send it there to complete your submission. If no application opened, email our team directly. Nothing has been sent by this website.");
  }
  return <form className="contact-form contact-form-modern" onSubmit={submitInquiry}>
    <div className="contact-form-heading"><p className="overline">Project inquiry</p><h2>Tell us about your project</h2></div>
    <div className="contact-form-row"><label>Full Name<input name="name" placeholder="Your full name" autoComplete="name" maxLength={120} required /></label><label>Company<input name="company" placeholder="Company name" autoComplete="organization" maxLength={160} /></label></div>
    <div className="contact-form-row"><label>Business Email<input name="email" type="email" placeholder="you@company.com" autoComplete="email" maxLength={254} required /></label><label>Phone / WhatsApp<input name="phone" type="tel" placeholder="Include country code" autoComplete="tel" maxLength={60} /></label></div>
    <label>Area of Interest<select name="service" defaultValue="" required><option value="" disabled>Select an area of interest</option>{solutions.map(s => <option key={s.id}>{s.title}</option>)}<option>Strategic Partnership</option><option>Other</option></select></label>
    <label>Project Location<input name="location" placeholder="Country, city or project site" maxLength={200} /></label>
    <div className="contact-form-row"><label>Estimated Volume / Capacity<input name="capacity" placeholder="Include quantity and unit, if known" maxLength={160} /></label><label>Target Timeline<input name="timeline" placeholder="Expected start date or timeframe" maxLength={160} /></label></div>
    <label>Project Details<textarea name="message" rows={6} placeholder="Tell us about your project, location, expected volume, timeline and key requirements." maxLength={5000} required /></label>
    {!company.email && <p className="form-notice">Online inquiries are not available yet. Please return once our contact channels are open.</p>}
    <button className="btn gold" type="submit" disabled={!company.email}>SUBMIT PROJECT INQUIRY <Send aria-hidden="true" size={17} strokeWidth={1.8} /></button>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
    <small>{company.email ? "Your inquiry opens in your email application for you to review and send. " : "This form does not currently send inquiries. "}<a href="/privacy-policy">Privacy Policy</a></small>
  </form>;
}
