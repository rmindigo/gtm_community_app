import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Palette, duplicated from globals.css because ImageResponse cannot read CSS
// variables — it renders in an isolated Satori context, not the browser.
const VOID = "#0a0a14";
const PANEL = "#13132b";
const EDGE = "#34346a";
const BODY = "#d8d8ec";
const GOLD = "#ffd23f";
const CYAN = "#52d8ff";
const MAGENTA = "#ff5db1";
const GREEN = "#46f797";

// 12px logo squares scaled up for a 1200px canvas.
function PixelMark({ unit }: { unit: number }) {
  const squares = [
    { c: GOLD, x: 0, y: 0 },
    { c: CYAN, x: unit, y: 0 },
    { c: MAGENTA, x: 0, y: unit },
    { c: GREEN, x: unit, y: unit },
  ];
  return (
    <div style={{ display: "flex", position: "relative", width: unit * 2, height: unit * 2 }}>
      {squares.map((s) => (
        <div
          key={`${s.x}-${s.y}`}
          style={{
            position: "absolute",
            left: s.x,
            top: s.y,
            width: unit,
            height: unit,
            background: s.c,
          }}
        />
      ))}
    </div>
  );
}

export async function ogCard({
  eyebrow,
  title,
  footer,
  accent,
}: {
  eyebrow: string;
  title: string;
  footer: string;
  accent: string;
}) {
  const font = await readFile(join(process.cwd(), "assets/PressStart2P.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: VOID,
          fontFamily: "PressStart",
          padding: 64,
        }}
      >
        {/* Panel, mirroring the site's 3px border and hard offset shadow. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            background: PANEL,
            border: `6px solid ${EDGE}`,
            boxShadow: `16px 16px 0 #000`,
            padding: 56,
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <PixelMark unit={22} />
            <div style={{ fontSize: 22, color: "#fff", letterSpacing: 4 }}>THE GTM TABLE</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 20, color: accent, letterSpacing: 4 }}>{eyebrow}</div>
            <div
              style={{
                fontSize: 46,
                color: "#fff",
                lineHeight: 1.5,
                marginTop: 28,
                textShadow: `6px 6px 0 #2b2b5e`,
              }}
            >
              {title}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 20, height: 20, background: accent }} />
            <div style={{ fontSize: 18, color: BODY, letterSpacing: 2 }}>{footer}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "PressStart", data: font, style: "normal", weight: 400 }],
    },
  );
}

export const ACCENT = { GOLD, CYAN, MAGENTA, GREEN };
