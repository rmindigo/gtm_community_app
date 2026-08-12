"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeState } from "../actions";
import type { Field, PersonaKey } from "@/lib/personas";
import { ACCENTS, type AccentName } from "@/lib/theme";

const initialState: SubscribeState = { status: "idle" };

const labelClass = "font-pixel text-[10px] leading-[1.6] tracking-[1px] text-white";
const inputClass =
  "w-full border-[3px] border-edge bg-band px-[14px] py-[10px] text-[17px] text-ink outline-none";

function FieldInput({ field }: { field: Field }) {
  const id = `f-${field.name}`;
  const label = (
    <span className={labelClass}>
      {field.label.toUpperCase()}
      {field.required ? <span className="text-magenta"> *</span> : null}
    </span>
  );

  return (
    <label htmlFor={id} className="grid gap-2">
      {label}
      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          required={field.required}
          rows={4}
          className={`${inputClass} resize-y`}
        />
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
        <input id={id} name={field.name} type={field.type} required={field.required} className={inputClass} />
      )}
    </label>
  );
}

export default function PersonaForm({
  persona,
  fields,
  ctaLabel,
  accent,
  formHeader,
}: {
  persona: PersonaKey;
  fields: Field[];
  ctaLabel: string;
  accent: AccentName;
  // e.g. "NEW GAME — ENTER PLAYER DATA"
  formHeader: string;
}) {
  const [state, formAction, pending] = useActionState(subscribe, initialState);
  const color = ACCENTS[accent];

  if (state.status === "success") {
    return (
      <div className="border-[3px] border-edge bg-panel p-8 text-center shadow-[8px_8px_0_#000]">
        <p className="font-pixel text-[10px] tracking-[2px] text-green">STAGE CLEARED</p>
        <h2 className="mt-4 font-pixel text-[13px] leading-[1.7] text-white">
          You&apos;re on the list.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-[1.45] text-body">
          Check your inbox for a note. If the table fits, you hear from us.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="grid gap-[22px] border-[3px] border-edge bg-panel px-[26px] py-[30px] shadow-[8px_8px_0_#000]"
    >
      <input type="hidden" name="persona" value={persona} />
      {/* Honeypot — hidden from users, catches bots. */}
      <div aria-hidden className="hidden">
        <label>
          Nickname
          <input type="text" name="nickname" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="font-pixel text-[10px] tracking-[2px] text-green">{formHeader}</div>

      {fields.map((field) => (
        <FieldInput key={field.name} field={field} />
      ))}

      {state.status === "error" && state.message ? (
        <p className="border-[3px] border-magenta bg-band px-4 py-3 text-base text-magenta">
          {state.message}
        </p>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="press cursor-pointer border-[3px] border-black px-5 py-4 font-pixel text-[11px] text-void shadow-[5px_5px_0_#000] hover:shadow-[2px_2px_0_#000] disabled:cursor-not-allowed disabled:opacity-60"
          style={{ background: color }}
        >
          {pending ? "LOADING…" : `PRESS START — ${ctaLabel.toUpperCase()} →`}
        </button>
        <p className="mt-4 text-[15px] text-muted">We keep the list short. No spam, no sharing.</p>
      </div>
    </form>
  );
}
