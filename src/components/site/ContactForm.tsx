import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Errors = { name?: string; contact?: string; message?: string };

export function ContactForm() {
  const [values, setValues] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(v: typeof values): Errors {
    const next: Errors = {};
    if (v.name.trim().length < 2) next.name = "Please enter your name.";
    const contact = v.contact.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact);
    const isPhone = /^(\+91[-\s]?)?[6-9]\d{9}$/.test(contact.replace(/[-\s]/g, ""));
    if (!isEmail && !isPhone) next.contact = "Enter a valid phone number or email address.";
    if (v.message.trim().length < 10) next.message = "Please describe the project in a line or two.";
    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setSubmitted(false);
      return;
    }

    // NOTE: no backend is configured for this project yet, so nothing is sent
    // anywhere. To deliver these enquiries later, replace this block with a
    // POST to an email service (e.g. Resend/Formspree) or a server function,
    // and surface real success/failure from that response.
    console.info("Enquiry captured locally (not sent):", values);
    setSubmitted(true);
    setValues({ name: "", contact: "", message: "" });
  }

  const field =
    "mt-1.5 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-ring/40";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="e.g. Simran Kaur"
          className={field}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact" className="text-sm font-medium text-foreground">
          Phone or email
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          inputMode="text"
          value={values.contact}
          onChange={(e) => setValues({ ...values, contact: e.target.value })}
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? "contact-error" : undefined}
          placeholder="98xxxxxxxx or you@example.com"
          className={field}
        />
        {errors.contact && (
          <p id="contact-error" className="mt-1.5 text-sm text-destructive">
            {errors.contact}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          What do you need made?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Class, subject, topic and the date you need it by."
          className={field}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring/50 sm:w-auto"
      >
        Send enquiry
      </button>

      <div aria-live="polite">
        {submitted ? (
          <div className="flex items-start gap-2.5 rounded-md border border-dashed border-accent bg-accent/10 p-4 text-sm text-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              Your details passed validation, but this form is not connected to a backend yet, so
              the message has <strong>not</strong> been delivered. Please call or message on
              WhatsApp for now.
            </span>
          </div>
        ) : (
          Object.keys(errors).length > 0 && (
            <div className="flex items-start gap-2.5 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground">
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
              <span>Please fix the highlighted fields and try again.</span>
            </div>
          )
        )}
      </div>
    </form>
  );
}