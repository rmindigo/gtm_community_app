"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeState } from "../actions";

const initialState: SubscribeState = { status: "idle" };

const inputClass =
  "mt-2 w-full rounded-xl border border-stone-900/15 bg-white px-4 py-3 text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-[#d6b15f] focus:ring-2 focus:ring-[#d6b15f]/30";
const labelClass = "block text-sm font-semibold text-stone-800";

// "persona" doubles as the routing key: whichever role they pick decides which
// of the three audiences they land in.
const roles = [
  { value: "founder", label: "Founder" },
  { value: "operator", label: "GTM operator" },
  { value: "sponsor", label: "Sponsor" },
];

export default function UpdatesForm() {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-[2rem] border border-stone-900/10 bg-white p-8 text-center shadow-xl shadow-stone-900/5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8a6a1f]">Posted</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-stone-900">
          You&apos;re on the list.
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-7 text-stone-600">
          We tell you when a Bay Area table opens. Nothing else.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-[2rem] border border-stone-900/10 bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-8"
    >
      {/* Honeypot — hidden from users, catches bots. */}
      <div aria-hidden className="hidden">
        <label>
          Nickname
          <input type="text" name="nickname" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="u-email" className={labelClass}>
            Work email<span className="text-[#8a6a1f]"> *</span>
          </label>
          <input id="u-email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="u-persona" className={labelClass}>
            Which are you?<span className="text-[#8a6a1f]"> *</span>
          </label>
          <select id="u-persona" name="persona" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select…
            </option>
            {roles.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
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
        {pending ? "Sending…" : "Keep me posted →"}
      </button>
      <p className="mt-4 text-sm text-stone-400">No spam. Word when a table opens.</p>
    </form>
  );
}
