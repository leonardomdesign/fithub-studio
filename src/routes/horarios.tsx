import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";

export const Route = createFileRoute("/horarios")({
  component: () => (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold">Horários</h1>
        <div className="mt-8 overflow-hidden rounded-lg border">
          <table className="w-full text-left">
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Modalidade</th>
                <th className="p-4">Horário</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Musculação</td>
                <td className="p-4">06:00 - 22:00</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">CrossFit</td>
                <td className="p-4">07:00, 18:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  ),
});
