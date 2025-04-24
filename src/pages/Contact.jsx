//------------------------------------------------------
// 2. CONTACT PAGE
//------------------------------------------------------

import { Reveal } from "../hooks/useReveal";

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl space-y-10 px-4 py-24">
      <Reveal>
        <h1 className="text-4xl font-bold">Let’s Talk</h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p>
          Our headquarters are in XX, and our team works across XX. Drop us a message—whether you’d like a demo, a datasheet
          or just a coffee chat.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <iframe
          title="Apex Analytica HQ map"
          className="h-64 w-full rounded-xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.857242!2d-76.6122!3d39.2904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sApex%20Analytica!5e0!3m2!1sen!2sus!4v1680000000000"
          allowFullScreen
        />
      </Reveal>

      {/* simple contact form */}
      <Reveal delay={0.3}>
        <form
          action="https://formspree.io/f/{your-id}"
          method="POST"
          className="space-y-6"
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="mb-2 block text-sm font-medium">
                {f.label}
              </label>
              <input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                className="w-full rounded-lg bg-primary-light p-3 outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded-lg bg-primary-light p-3 outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl bg-accent px-8 py-3 font-semibold text-primary transition hover:scale-105"
          >
            Send
          </button>
        </form>
      </Reveal>
    </section>
  );
}