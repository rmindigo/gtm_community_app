// Shared, secret-free config for the three intake personas.
// Field definitions render the forms (client) and drive validation + the
// confirmation email (server). Actual Resend keys/audience IDs live in env,
// never here — `segmentEnv` only names the env var to read at request time.

export type FieldType = "text" | "email" | "textarea" | "select";

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

export type PersonaKey = "founder" | "operator" | "sponsor";

export type Persona = {
  key: PersonaKey;
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  ctaLabel: string;
  // Name of the env var holding this persona's Resend segment id.
  segmentEnv: string;
  fields: Field[];
  // Confirmation email sent to the subscriber.
  email: { subject: string; heading: string; body: string[] };
};

const bayAreaOptions = ["Yes, SF / Bay Area", "Sometimes", "No"];

export const PERSONAS: Record<PersonaKey, Persona> = {
  founder: {
    key: "founder",
    eyebrow: "For founders",
    title: "Bring the deal. Leave with the play.",
    intro:
      "You are selling into the enterprise. The pipe is stalled, the logo will not sign, the hire is not made. Sit down with operators who have worked the same ground and closed it.",
    points: [
      "Test the GTM call before it costs the quarter.",
      "Hear from operators who carried the number and ran the team.",
      "Talk through the buyer, the deal, the hire, the price, the next segment.",
    ],
    ctaLabel: "Request a seat",
    segmentEnv: "RESEND_SEGMENT_FOUNDER",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Work email", type: "email", required: true },
      { name: "company", label: "Company + website", type: "text", required: true },
      {
        name: "problem",
        label: "What is the GTM problem on your desk right now?",
        type: "textarea",
        required: true,
      },
      {
        name: "stage",
        label: "Where are you in enterprise GTM?",
        type: "select",
        options: [
          "Pre-first enterprise deal",
          "Closing the first few",
          "Repeatable motion",
          "Scaling the team",
        ],
      },
      {
        name: "dealSize",
        label: "Typical deal size",
        type: "select",
        options: ["<$25k", "$25–100k", "$100–250k", "$250k+"],
      },
      { name: "bayArea", label: "Can you make Bay Area dinners?", type: "select", options: bayAreaOptions },
    ],
    email: {
      subject: "Your seat request — The GTM Table",
      heading: "You asked for a seat.",
      body: [
        "We read every one. If the table fits the deal you are working, you hear from us.",
        "Bring the problem. Operators bring the play.",
      ],
    },
  },

  operator: {
    key: "operator",
    eyebrow: "For GTM operators",
    title: "Sit at the table. Say what worked.",
    intro:
      "You carried the number. You ran the team. Trade notes with operators who did the same, and meet founders working the problems you have already solved.",
    points: [
      "Sit with operators who have done the work. No panels. No stage.",
      "Meet founders working real enterprise problems.",
      "Come to the dinners and the golf across the Bay Area.",
    ],
    ctaLabel: "Join the network",
    segmentEnv: "RESEND_SEGMENT_OPERATOR",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Work email", type: "email", required: true },
      { name: "linkedin", label: "LinkedIn URL", type: "text", required: true },
      {
        name: "work",
        label: "Which best describes your work?",
        type: "select",
        options: [
          "AE / Sales",
          "CRO or VP Sales",
          "RevOps",
          "Partnerships",
          "Customer Success",
          "Marketing",
          "Sales Engineering",
          "Other",
        ],
      },
      {
        name: "track",
        label: "Have you carried a number or owned a GTM function?",
        type: "select",
        options: ["Quota-carrying", "Led a function", "Both", "Advisory only"],
      },
      {
        name: "motion",
        label: "What enterprise motion do you know cold?",
        type: "textarea",
        required: true,
      },
      { name: "bayArea", label: "Bay Area based?", type: "select", options: bayAreaOptions },
    ],
    email: {
      subject: "You're on the list — The GTM Table",
      heading: "You carried the number.",
      body: [
        "We want you at the table. When a room fits your ground, we reach out.",
        "Bring the plays that worked.",
      ],
    },
  },

  sponsor: {
    key: "sponsor",
    eyebrow: "Sponsors",
    title: "Cover the room. Earn the trust.",
    intro:
      "Cover the dinner and the golf. Sit near the founders and operators before the deal becomes a vendor list. Do not pitch across the table.",
    points: [
      "A seat near the founders and operators in the room.",
      "Time with the deal before it becomes a vendor list.",
      "The dinners and the golf to host.",
      "Time to earn the trust of the people who sign.",
    ],
    ctaLabel: "Start a conversation",
    segmentEnv: "RESEND_SEGMENT_SPONSOR",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Work email", type: "email", required: true },
      { name: "company", label: "Company + website", type: "text", required: true },
      { name: "role", label: "Your role", type: "text" },
      {
        name: "why",
        label: "Why do you want to be in the room with these founders and operators?",
        type: "textarea",
        required: true,
      },
      {
        name: "host",
        label: "What would you want to host or fund?",
        type: "select",
        options: ["Founder dinner", "Operator salon", "Golf outing", "Not sure yet"],
      },
      {
        name: "budget",
        label: "Rough sponsorship budget",
        type: "select",
        options: [
          "Under $5,000",
          "$5,000 – $15,000",
          "$15,000 – $50,000",
          "$50,000+",
          "Not sure yet — let's talk",
        ],
      },
      { name: "bayArea", label: "Bay Area presence?", type: "select", options: ["Yes", "Some", "No"] },
    ],
    email: {
      subject: "Thanks — The GTM Table",
      heading: "You want to cover the room.",
      body: [
        "We read your note. If there is a fit, we start a conversation.",
        "The room stays curated. Operators run it.",
      ],
    },
  },
};

export const PERSONA_KEYS = Object.keys(PERSONAS) as PersonaKey[];
