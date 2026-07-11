"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function WhistleblowerSection() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <section id="voice" className="border-t border-stone/30 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mb-14 sm:mb-20">
          <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.25em] text-gold">
            Chapter 05
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your Voice
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-warm-muted sm:text-lg">
            See something that needs fixing? Know about an issue that&apos;s being
            ignored? This is a direct, confidential channel — no names
            required, no backlash. Every submission is reviewed.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="border-l border-gold/50 pl-5">
              <p className="font-display text-xl text-warm-white sm:text-2xl">
                Confidential reporting
              </p>
              <p className="mt-3 text-sm leading-relaxed text-warm-muted">
                Your identity is never collected. No accounts, no emails, no
                tracking. If you want to share contact details for follow-up,
                you can — but you don&apos;t have to. This is built for safety.
              </p>
            </div>
            <div className="mt-8 border-l border-stone/50 pl-5">
              <p className="font-display text-xl text-warm-white sm:text-2xl">
                What gets reported?
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-warm-muted">
                <li>&rarr; Stalled or abandoned projects</li>
                <li>&rarr; Misuse of public funds or resources</li>
                <li>&rarr; Schools, clinics, or roads in disrepair</li>
                <li>&rarr; Bursary or aid that didn&apos;t reach intended recipients</li>
                <li>&rarr; Any issue you believe needs attention</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-sm border border-emerald/30 bg-emerald/5 p-8 text-center"
              >
                <p className="font-display text-xl text-emerald">
                  Submission received.
                </p>
                <p className="mt-2 text-sm text-warm-muted">
                  Every report is reviewed by the team. Thank you for speaking
                  up.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm uppercase tracking-widest text-gold underline-offset-2 hover:underline"
                >
                  Submit another
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="category"
                    className="mb-1.5 block text-xs uppercase tracking-widest text-warm-muted"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    required
                    className="w-full rounded-sm border border-stone bg-night px-4 py-3 text-sm text-warm-white outline-none transition-colors focus:border-gold"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="project">Stalled / abandoned project</option>
                    <option value="funds">Funds / resource misuse</option>
                    <option value="infrastructure">
                      Infrastructure issue (road, water, health)
                    </option>
                    <option value="education">Education / bursary issue</option>
                    <option value="other">Other concern</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-1.5 block text-xs uppercase tracking-widest text-warm-muted"
                  >
                    Location (ward / area)
                  </label>
                  <input
                    id="location"
                    type="text"
                    required
                    placeholder="e.g. Kithimu, Nguviu, Embu Town..."
                    className="w-full rounded-sm border border-stone bg-night px-4 py-3 text-sm text-warm-white outline-none transition-colors placeholder:text-warm-muted/40 focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs uppercase tracking-widest text-warm-muted"
                  >
                    Your report
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe the issue — what, where, how long, who it affects..."
                    className="w-full resize-y rounded-sm border border-stone bg-night px-4 py-3 text-sm text-warm-white outline-none transition-colors placeholder:text-warm-muted/40 focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="mb-1.5 block text-xs uppercase tracking-widest text-warm-muted"
                  >
                    Contact (optional — for follow-up)
                  </label>
                  <input
                    id="contact"
                    type="text"
                    placeholder="Phone, email, or WhatsApp — only if you want a response"
                    className="w-full rounded-sm border border-stone bg-night px-4 py-3 text-sm text-warm-white outline-none transition-colors placeholder:text-warm-muted/40 focus:border-gold"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="anonymous"
                    type="checkbox"
                    defaultChecked
                    className="mt-1 h-4 w-4 accent-gold"
                  />
                  <label htmlFor="anonymous" className="text-xs text-warm-muted">
                    Keep this anonymous. Do not share my contact or identity
                    with anyone. (The contact field above will be ignored if
                    checked.)
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex h-13 min-h-[48px] items-center justify-center rounded-sm bg-gold px-8 text-sm font-semibold uppercase tracking-widest text-night transition-all hover:bg-gold-light active:scale-[0.98]"
                >
                  Submit report
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
