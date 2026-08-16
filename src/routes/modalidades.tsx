import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";

export const Route = createFileRoute("/modalidades")({
  component: () => (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold">Modalidades</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {["Musculação", "CrossFit", "Yoga", "Funcional"].map((m) => (
            <div key={m} className="border p-6 rounded-lg">
              <h2 className="text-2xl font-semibold">{m}</h2>
              <p className="mt-2 text-muted-foreground">Descrição breve sobre {m}.</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  ),
});
