"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoaderTwo } from "@/components/ui/loader";
import axios from "axios";
import { Wand2 } from "lucide-react";
import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function RoadmapPage() {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [roadmap, setRoadmap] = useState<string>("");

  const levels = ["Beginner", "Intermediate", "Advanced"] as const;

  const generate = async () => {
    if (!goal.trim() || !level.trim()) {
      setError("Please fill in both goal and level fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/roadmap", { goal, level });
      if (!response.data?.success) {
        setError("Failed to generate roadmap");
        return;
      }

      const content = response.data.roadmap as string;
      setRoadmap(content ?? "");
    } catch (e) {
      console.log("ERROR generating roadmap:", e);
      setError("Failed to generate roadmap. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const markdownComponents = useMemo(
    () => ({
      h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
          {...props}
          className="text-3xl md:text-4xl font-bold tracking-tight mt-6 mb-4 first:mt-0"
        />
      ),
      h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
          {...props}
          className="text-2xl md:text-3xl font-semibold tracking-tight mt-8 mb-3"
        />
      ),
      h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
          {...props}
          className="text-xl md:text-2xl font-semibold mt-6 mb-2"
        />
      ),
      h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4 {...props} className="text-lg md:text-xl font-semibold mt-4 mb-2" />
      ),
      p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
          {...props}
          className="leading-7 text-base md:text-[17px] text-muted-foreground my-3"
        />
      ),
      ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul {...props} className="list-disc pl-6 space-y-2 my-3" />
      ),
      ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol {...props} className="list-decimal pl-6 space-y-2 my-3" />
      ),
      li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li
          {...props}
          className="text-base md:text-[17px] text-foreground/90"
        />
      ),
      a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
          {...props}
          className="text-primary underline underline-offset-4 hover:text-primary/90 break-words"
          target="_blank"
          rel="noopener noreferrer"
        />
      ),
      strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong {...props} className="font-semibold text-foreground" />
      ),
      em: (props: React.HTMLAttributes<HTMLElement>) => (
        <em {...props} className="italic" />
      ),
      code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code {...props} className="rounded bg-muted px-1.5 py-0.5 text-sm" />
      ),
      pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
          {...props}
          className="bg-muted rounded-lg p-4 overflow-x-auto my-4"
        />
      ),
      blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
        <blockquote
          {...props}
          className="border-l-4 pl-4 italic text-muted-foreground my-4"
        />
      ),
      hr: () => <hr className="my-6 border-border" />,
      table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="w-full overflow-x-auto">
          <table {...props} className="w-full text-left border-collapse" />
        </div>
      ),
      th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th {...props} className="border-b px-3 py-2 font-semibold" />
      ),
      td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td {...props} className="border-b px-3 py-2 align-top" />
      ),
    }),
    []
  );

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Roadmap Generator
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Generate a personalized learning plan with phases, projects, and
          resources.
        </p>
      </div>

      <Card className="border bg-card/60 backdrop-blur">
        <CardHeader>
          <CardTitle>Tell us about your goal</CardTitle>
          <CardDescription>
            Describe your target role and current level. We will craft a
            tailored roadmap.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="md:col-span-7">
              <label htmlFor="goal" className="block text-sm font-medium mb-1">
                Career goal
              </label>
              <Input
                id="goal"
                placeholder="e.g., Frontend Developer, Data Analyst"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="md:col-span-3">
              <label htmlFor="level" className="block text-sm font-medium mb-1">
                Level
              </label>
              <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                disabled={loading}
                className="w-full h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
              >
                {levels.map((lv) => (
                  <option key={lv} value={lv}>
                    {lv}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 flex items-end">
              <Button
                onClick={generate}
                className="w-full gap-2"
                disabled={loading}
              >
                <Wand2 className="size-4" />
                {loading ? <LoaderTwo /> : "Generate"}
              </Button>
            </div>
          </div>

          {error && (
            <div className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 text-destructive px-3 py-2 text-sm">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {loading && (
        <Card>
          <CardHeader>
            <CardTitle>Generating roadmap…</CardTitle>
            <CardDescription>This usually takes a few seconds.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="animate-pulse space-y-4">
              <div className="h-5 w-1/2 rounded bg-muted" />
              <div className="h-4 w-3/4 rounded bg-muted" />
              <div className="h-4 w-2/3 rounded bg-muted" />
              <div className="h-5 w-1/3 rounded bg-muted" />
              <div className="h-4 w-4/5 rounded bg-muted" />
              <div className="h-4 w-3/5 rounded bg-muted" />
            </div>
          </CardContent>
        </Card>
      )}

      {!!roadmap && !loading && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Roadmap</CardTitle>
            <CardDescription>
              Formatted for readability. You can copy and follow each phase.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-foreground">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {roadmap}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
