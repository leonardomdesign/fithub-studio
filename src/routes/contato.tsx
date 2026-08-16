import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/contato")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold">Contato</h1>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg">Endereço: Av. Principal, 123 - Centro</p>
            <p className="text-lg">Telefone: (11) 99999-9999</p>
          </div>
          <form className="space-y-4 border p-6 rounded-lg">
            <input type="text" placeholder="Nome" className="w-full p-2 border rounded" />
            <input type="email" placeholder="E-mail" className="w-full p-2 border rounded" />
            <textarea placeholder="Mensagem" className="w-full p-2 border rounded" rows={4} />
            <button className="bg-primary text-white px-6 py-2 rounded">Enviar</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
