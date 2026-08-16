import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";

export const Route = createFileRoute("/contato")({
  component: ContactPage,
});

function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold">Contato</h1>
        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Nossas informações</h2>
            <p className="text-lg"><strong>Endereço:</strong> Av. Principal, 123 - Centro, São Paulo - SP</p>
            <p className="text-lg"><strong>Telefone:</strong> (11) 99999-9999</p>
            <p className="text-lg"><strong>E-mail:</strong> contato@gymfit.com.br</p>
            <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
              [Mapa Placeholder]
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-lg bg-card">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Nome</label>
              <input id="name" type="text" placeholder="Seu nome" className="w-full p-2 border rounded bg-background" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">E-mail</label>
              <input id="email" type="email" placeholder="seu@email.com" className="w-full p-2 border rounded bg-background" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
              <textarea id="message" placeholder="Como podemos ajudar?" className="w-full p-2 border rounded bg-background" rows={4} required />
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
