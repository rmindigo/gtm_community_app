import type { AccentName } from "./theme";

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
  title: string;
  points: string[];
  ctaLabel: string;
  accent: AccentName;
  // Badge above the headline, e.g. "FOR FOUNDERS".
  badge: string;
  // Header line inside the form panel.
  formHeader: string;
  // Landing-page content. `heroTitle` deliberately reuses the homepage section
  // headline so someone arriving from the seat picker lands on the same promise.
  landing: {
    heroTitle: string;
    pitch: string[];
    // Heading on the bordered panel holding the bullet list.
    pointsHeading: string;
    // Terminal-style closing line above the form.
    terminal: string;
    // One line placing the other two roles. No CTAs — the page has one job.
    otherRoles: string;
  };
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
    title: "Bring your GTM questions. Leave with the plays.",
    points: [
      "Test the GTM call before it costs the quarter.",
      "Hear from operators who carried the number and ran the team.",
      "Talk through pipeline and outbound, the buyer, the price, the hire, the next segment.",
    ],
    ctaLabel: "Request a seat",
    accent: "gold",
    badge: "FOR FOUNDERS",
    formHeader: "BRING YOUR QUESTIONS",
    landing: {
      heroTitle: "Get the operator's read before the mistake compounds.",
      pitch: [
        "You are selling into the enterprise. Outbound is not landing, the pipe is thin, the logo will not sign, the hire is not made. Sit down with operators who have worked the same ground.",
        "Founders come for operators who know the difference between a good story and a motion that works. Bring a few GTM questions you are actually stuck on — pipeline, outbound, pricing, the buyer, the hire — and the table works them with you.",
        "Each table holds a few founders and a few operators. The questions stay narrow enough to answer over dinner.",
      ],
      pointsHeading: "What you leave with",
      terminal: "Bring the questions you are actually stuck on. The table works them with you.",
      otherRoles:
        "Operators at the table have carried the number. Sponsors cover the room and stay out of the way.",
    },
    segmentEnv: "RESEND_SEGMENT_FOUNDER",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Work email", type: "email", required: true },
      { name: "company", label: "Company + website", type: "text", required: true },
      {
        name: "problem",
        label: "What GTM questions are on your desk right now?",
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
        "We read every one. If the table fits the questions you are working, you hear from us.",
        "Bring the questions. Operators bring the plays.",
      ],
    },
  },

  operator: {
    key: "operator",
    title: "Sit at the table. Say what worked.",
    points: [
      "Sit with operators who have done the work. Everyone at the table talks.",
      "Meet founders working real enterprise problems.",
      "Come to the dinners and the golf across the Bay Area.",
    ],
    ctaLabel: "Join the network",
    accent: "cyan",
    badge: "FOR GTM OPERATORS",
    formHeader: "SAY WHAT WORKED",
    landing: {
      heroTitle: "The room runs on operators.",
      pitch: [
        "You carried the number. You ran the team. Trade notes with operators who did the same, and meet founders working the problems you have already solved.",
        "Operators come for the peers, the dinners, the golf, and founders worth the time. You say what worked in the field — the account you expanded, the one you lost, the motion you would run again.",
        "Dinners and golf across the Bay Area. Small rooms, and everyone at the table talks.",
      ],
      pointsHeading: "Why operators come",
      terminal: "You carried the number. Say what worked, and hear what did not.",
      otherRoles:
        "Founders bring the GTM questions they are working. Sponsors cover the room and stay out of the way.",
    },
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
    title: "Cover the room. Earn the trust.",
    points: [
      "A seat near the founders and operators in the room.",
      "Time with the deal before it becomes a vendor list.",
      "The dinners and the golf to host.",
      "Time to earn the trust of the people who sign.",
    ],
    ctaLabel: "Start a conversation",
    accent: "magenta",
    badge: "SPONSORS",
    formHeader: "COVER THE ROOM",
    landing: {
      heroTitle: "Cover the room where the deals get talked about.",
      pitch: [
        "Sponsors cover the dinners, the golf, and the rooms that bring founders and operators together. They get proximity and trust.",
        "One sponsor per dinner. You cover the room and you sit in it. The founders and operators at the table decide whether you earned the next conversation.",
        "A sponsor has to fit the people at the table. The room stays small, and operators run it.",
      ],
      pointsHeading: "Why sponsors come",
      terminal: "Cover the room. Sit in it. Earn the next conversation.",
      otherRoles:
        "Founders bring the GTM questions they are working. Operators bring the plays that answered theirs.",
    },
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
