import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";

export const Route = createFileRoute("/galeria")({
  component: () => (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold">Galeria</h1>
      </div>
    </Layout>
  ),
});
