"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeState } from "../actions";
import type { Field, PersonaKey } from "@/lib/personas";

const initialState: SubscribeState = { status: "idle" };

const labelClass = "block text-sm font-semibold text-stone-800";
const inputClass =
  "mt-2 w-full rounded-xl border border-stone-900/15 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-[#d6b15f] focus:ring-2 focus:ring-[#d6b15f]/30";

function FieldInput({ field }: { field: Field }) {
  const id = `f-${field.name}`;
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {field.label}
        {field.required ? <span className="text-[#8a6a1f]"> *</span> : null}
      </label>
      {field.type === "textarea" ? (
        <textarea id={id} name={field.name} required={field.required} rows={3} className={inputClass} />
      ) : field.type === "select" ? (
        <select id={id} name={field.name} required={field.required} defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select…
          </option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          required={field.required}
          className={inputClass}
        />
      )}
    </div>
  );
}

export default function PersonaForm({
  persona,
  fields,
  ctaLabel,
}: {
  persona: PersonaKey;
  fields: Field[];
  ctaLabel: string;
}) {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-[2rem] border border-stone-900/10 bg-white p-8 text-center shadow-xl shadow-stone-900/5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a1f]">Received</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-stone-900">
          You&apos;re on the list.
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-7 text-stone-600">
          Check your inbox for a note. If the table fits, you hear from us.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-[2rem] border border-stone-900/10 bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-8"
    >
      <input type="hidden" name="persona" value={persona} />
      {/* Honeypot — hidden from users, catches bots. */}
      <div aria-hidden className="hidden">
        <label>
          Nickname
          <input type="text" name="nickname" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="space-y-5">
        {fields.map((field) => (
          <FieldInput key={field.name} field={field} />
        ))}
      </div>

      {state.status === "error" && state.message ? (
        <p className="mt-5 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-[#d6b15f] bg-[#e7c778] px-5 py-3 text-sm font-semibold text-[#2a2109] shadow-[0_14px_44px_rgba(214,177,95,0.28)] transition hover:bg-[#eed08a] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : `${ctaLabel} →`}
      </button>
      <p className="mt-4 text-sm text-stone-400">
        We keep the list short. No spam, no sharing.
      </p>
    </form>
  );
}
