import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">🚀 Welcome to shadcn UI + GitHub Pages</h1>
        <Button onClick={() => alert("Hello from shadcn!")}>Click Me</Button>
      </div>
    </main>
  );
}
