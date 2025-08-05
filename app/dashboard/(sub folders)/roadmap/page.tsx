"use client";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Roadmap } from "@/types/roadmap.types";

import axios from "axios";
import { useState } from "react";

export default function Roadmap() {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");

  const [roadmap, setRoadmap] = useState<Roadmap[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!goal.trim() || !level.trim()) {
      setError("Please fill in both goal and level fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/roadmap", {
        goal: goal,
        level: level,
      });

      if (response.data.success) {
        setRoadmap(response.data || []);
      } else {
        setError("Failed to generate roadmap");
      }
    } catch (err) {
      console.error("Roadmap generation error:", err);
      setError("Failed to generate roadmap. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">SkillHero Roadmap Generator</h1>

      <div className="space-y-4">
        <Input
          placeholder="Career Goal (e.g., Frontend Developer)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full"
        />
        <Input
          placeholder="Your Level (e.g., Beginner)"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button onClick={generate} className="w-full" disabled={loading}>
          {loading ? "Generating..." : "Generate Roadmap"}
        </Button>
      </div>

      <div className="space-y-4">
        {roadmap.map((phase, idx) => (
          <Accordion key={idx} type="single" collapsible>
            <AccordionItem value={`item-${idx}`}>
              <div className="p-4 border rounded-lg space-y-2 bg-muted">
                <h2 className="text-lg font-semibold">{phase.title}</h2>
                <p className="text-muted-foreground">{phase.description}</p>

                <div>
                  <h3 className="font-medium mb-2">Milestones:</h3>
                  <ul className="list-disc pl-4 text-sm space-y-1">
                    {phase.milestones?.map((m: string, i: number) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Skills:</h3>
                  <p className="text-sm">{phase.skills?.join(", ")}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Resources:</h3>
                  <ul className="list-square pl-4 text-sm space-y-1">
                    {phase.resources?.map((r: string, i: number) => (
                      <li key={i}>
                        <a
                          href={r}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {r}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </main>
  );
}
