import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";

export const Route = createFileRoute("/horarios")({
  component: () => (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold">Horários</h1>
      </div>
    </Layout>
  ),
});
