"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeState } from "../actions";
import { ACCENTS } from "@/lib/theme";

const initialState: SubscribeState = { status: "idle" };

const labelClass = "font-pixel text-[10px] leading-[1.6] tracking-[1px] text-white";
const inputClass =
  "w-full border-[3px] border-edge bg-band px-[14px] py-[10px] text-[17px] text-ink outline-none";

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
      <div className="border-[3px] border-edge bg-panel p-8 text-center shadow-[8px_8px_0_#000]">
        <p className="font-pixel text-[10px] tracking-[2px] text-green">POSTED</p>
        <h2 className="mt-4 font-pixel text-[13px] leading-[1.7] text-white">
          You&apos;re on the list.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-[1.45] text-body">
          We tell you when a Bay Area table opens. Nothing else.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="grid gap-[22px] border-[3px] border-edge bg-panel px-[26px] py-[30px] shadow-[8px_8px_0_#000]"
    >
      {/* Honeypot — hidden from users, catches bots. */}
      <div aria-hidden className="hidden">
        <label>
          Nickname
          <input type="text" name="nickname" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="font-pixel text-[10px] tracking-[2px] text-green">
        LEAVE YOUR EMAIL
      </div>

      <label htmlFor="u-email" className="grid gap-2">
        <span className={labelClass}>
          WORK EMAIL<span className="text-magenta"> *</span>
        </span>
        <input id="u-email" name="email" type="email" required className={inputClass} />
      </label>

      <label htmlFor="u-persona" className="grid gap-2">
        <span className={labelClass}>
          WHICH ARE YOU?<span className="text-magenta"> *</span>
        </span>
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
      </label>

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
          style={{ background: ACCENTS.green }}
        >
          {pending ? "SENDING…" : "KEEP ME POSTED →"}
        </button>
        <p className="mt-4 text-[15px] text-muted">No spam. Word when a table opens.</p>
      </div>
    </form>
  );
}
