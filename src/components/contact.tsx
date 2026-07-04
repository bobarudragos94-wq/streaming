"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { sendInquiry, type ContactState } from "@/lib/actions";
import { site } from "@/content/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const initial: ContactState = { status: "idle" };

const inputCls =
  "w-full rounded-xl border border-hairline bg-panel px-4 py-3 text-[15px] text-frost placeholder:text-dim/50 transition-colors focus:border-brand-soft/60 focus:outline-none";

export function Contact() {
  const t = useTranslations("contact");
  const [state, action, pending] = useActionState(sendInquiry, initial);

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <SectionHeading kicker={t("kicker")} title={t("title")} />

        <Reveal delay={0.1}>
          <form action={action} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim"
                >
                  {t("name")} *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  className={inputCls}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim"
                >
                  {t("email")} *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-type"
                className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim"
              >
                {t("type")}
              </label>
              <select id="contact-type" name="type" className={inputCls}>
                <option value="sponsor">{t("typeSponsor")}</option>
                <option value="collab">{t("typeCollab")}</option>
                <option value="event">{t("typeEvent")}</option>
                <option value="other">{t("typeOther")}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim"
              >
                {t("message")} *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className={`${inputCls} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_-8px_var(--color-brand)] transition-all hover:bg-brand/85 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={15} aria-hidden />
              {pending ? t("sending") : t("submit")}
            </button>

            <div aria-live="polite" className="min-h-6 text-[14px]">
              {state.status === "success" ? (
                <p className="text-volt-soft">{t("success")}</p>
              ) : null}
              {state.status === "error" ? (
                <p className="text-ember-soft">
                  {state.code === "validation"
                    ? t("errorValidation")
                    : state.code === "not-configured"
                      ? t("errorNotConfigured")
                      : t("errorGeneric")}{" "}
                  {state.code !== "validation" ? (
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold text-frost underline decoration-brand-soft underline-offset-4"
                    >
                      {site.email}
                    </a>
                  ) : null}
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
