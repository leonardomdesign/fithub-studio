import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";

export const Route = createFileRoute("/galeria")({
  component: () => (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold">Galeria</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-video bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    </Layout>
  ),
});
