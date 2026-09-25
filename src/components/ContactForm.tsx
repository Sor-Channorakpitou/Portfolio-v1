"use client";

import { useState } from "react";
import Icon from "./Icon";

const CONTACT_EMAIL = "pitousorchannorak14@gmail.com";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`[Portfolio] Transmission from ${name}`);
    const body = encodeURIComponent(
      `IDENTIFIER: ${name}\nROUTING PROTOCOL: ${email}\n\nPAYLOAD:\n${message}`,
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer",
    );

    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 3000);
  }

  const fields = [
    { id: "name", label: "IDENTIFIER (NAME)", placeholder: "ENTER IDENTIFIER", type: "text" },
    { id: "email", label: "ROUTING PROTOCOL (EMAIL)", placeholder: "ENTER ROUTING PROTOCOL", type: "email" },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <label className="font-mono text-label-bold uppercase text-on-background" htmlFor={field.id}>
            {field.label}
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            required
            placeholder={field.placeholder}
            className="w-full border-2 border-on-background bg-surface-container-lowest p-4 text-body-lg text-on-background placeholder:text-on-surface-variant/70 transition-all duration-200 focus:border-primary-container focus:shadow-brutal focus:outline-none"
          />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <label className="font-mono text-label-bold uppercase text-on-background" htmlFor="message">
          PAYLOAD
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="INITIALIZE PAYLOAD..."
          className="w-full resize-none border-2 border-on-background bg-surface-container-lowest p-4 text-body-lg text-on-background placeholder:text-on-surface-variant/70 transition-all duration-200 focus:border-primary-container focus:shadow-brutal focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-stack-md flex items-center justify-center gap-2 bg-electric-cyan bg-border-heavy px-8 py-4 
        font-mono text-label-bold uppercase shadow-brutal dark:bg-primary-container dark:text-black dark:shadow-white
         transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
      >
        <Icon name={sent ? "check_box" : "send"} filled={sent} />
        <span>{sent ? "TRANSMITTED" : "SEND TRANSMISSION"}</span>
      </button>
    </form>
  );
}