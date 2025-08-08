"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Roadmap } from "@/types/roadmap.types";
import axios from "axios";
import { useState } from "react";

function normalizeCohereContent(raw: unknown): string {
  if (!raw) return "";
  if (typeof raw === "string") return raw;
  if (Array.isArray(raw)) {
    return (
      raw
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((part: any) =>
          typeof part === "string"
            ? part
            : typeof part?.text === "string"
            ? part.text
            : part?.text?.toString?.() ?? ""
        )
        .filter(Boolean)
        .join("\n\n")
    );
  }
  // Fallback

  return raw?.toString?.() ?? "";
}

function parseRoadmapMarkdown(markdown: string): Roadmap[] {
  if (!markdown) return [];
  // Split by H2 sections (e.g., ## Phase 1 ...). Keep the delimiter by using match and slicing.
  const lines = markdown.split(/\r?\n/);
  const sections: string[] = [];
  let current: string[] = [];

  for (const line of lines) {
    if (/^##\s+/i.test(line)) {
      if (current.length) sections.push(current.join("\n"));
      current = [line];
    } else {
      current.push(line);
    }
  }
  if (current.length) sections.push(current.join("\n"));

  const phases: Roadmap[] = sections
    // filter out possible intro before first phase if it didn't start with ##
    .filter((sec) => /^##\s+/i.test(sec.trim()))
    .map((sec) => {
      // Title from the H2 line
      const titleMatch = sec.match(/^##\s+\**?(.*?)\**?\s*$/m);
      const title = titleMatch?.[1]?.trim() || "Phase";

      // Description: line starting with **Description**:
      const descMatch = sec.match(/\*\*Description\*\*:\s*(.+)/i);
      const description = descMatch?.[1]?.trim() || "";

      // Milestones: any ordered/bulleted list items within this section
      const milestoneMatches = Array.from(
        sec.matchAll(/^\s*(?:\d+\.|[-*+])\s+(.+)/gm)
      );
      const milestones = milestoneMatches.map((m) => m[1].trim());

      // Skills: from **Skills**: comma-separated, if present
      const skillsMatch = sec.match(/\*\*Skills\*\*:\s*(.+)/i);
      const skills = skillsMatch
        ? skillsMatch[1].split(/,\s*/).map((s) => s.trim())
        : [];

      // Resources: extract URLs in this section
      const resourceMatches = Array.from(sec.matchAll(/https?:\/\/\S+/g));
      const resources = resourceMatches.map((m) => m[0]);

      return { title, description, milestones, skills, resources } as Roadmap;
    });

  return phases;
}

export default function RoadmapPage() {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [phases, setPhases] = useState<Roadmap[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!goal.trim() || !level.trim()) {
      setError("Please fill in both goal and level fields");
      return;
    }

    setLoading(true);
    setError("");
    setPhases([]);

    try {
      const response = await axios.post("/api/roadmap", { goal, level });
      if (!response.data?.success) {
        setError("Failed to generate roadmap");
        return;
      }

      const content = normalizeCohereContent(response.data.roadmap);
      if (!content) {
        setError("No roadmap content returned by AI.");
        return;
      }

      const parsed = parseRoadmapMarkdown(content);
      if (!parsed.length) {
        setError("Could not parse roadmap into phases.");
        return;
      }
      setPhases(parsed);
    } catch (e) {
      console.log("ERROR generating roadmap:", e);
      setError("Failed to generate roadmap. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">SkillHero Roadmap Generator</h1>

      <div className="space-y-4">
        <Input
          placeholder="Career Goal (e.g., Frontend Developer)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <Input
          placeholder="Your Level (e.g., Beginner)"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button onClick={generate} className="w-full" disabled={loading}>
          {loading ? "Generating..." : "Generate Roadmap"}
        </Button>
      </div>

      {/* Stylized, responsive Accordion UI */}
      {!!phases.length && (
        <Accordion type="single" collapsible className="w-full">
          {phases.map((phase, idx) => (
            <AccordionItem key={idx} value={`phase-${idx}`}>
              <AccordionTrigger>
                <div className="flex flex-col text-left">
                  <span className="text-base font-semibold">{phase.title}</span>
                  {phase.description && (
                    <span className="text-muted-foreground text-sm line-clamp-2">
                      {phase.description}
                    </span>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="p-4 rounded-lg border bg-card space-y-4">
                  {phase.description && (
                    <div>
                      <h3 className="font-medium mb-2">Description</h3>
                      <p className="text-sm text-muted-foreground">
                        {phase.description}
                      </p>
                    </div>
                  )}

                  {!!phase.milestones?.length && (
                    <div>
                      <h3 className="font-medium mb-2">Milestones</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        {phase.milestones.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!!phase.skills?.length && (
                    <div>
                      <h3 className="font-medium mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.map((s, i) => (
                          <span
                            key={i}
                            className="bg-secondary text-foreground/80 px-2 py-1 rounded-md text-xs"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {!!phase.resources?.length && (
                    <div>
                      <h3 className="font-medium mb-2">Resources</h3>
                      <ul className="list-square pl-6 text-sm space-y-1">
                        {phase.resources.map((r, i) => (
                          <li key={i}>
                            <a
                              href={r}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline break-all"
                            >
                              {r}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </main>
  );
}
