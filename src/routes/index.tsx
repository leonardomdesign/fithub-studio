import { createFileRoute, Link } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "GymFit Academia | Transforme seu corpo",
    meta: [
      { name: "description", content: "A melhor infraestrutura de academia da região. Musculação, CrossFit, Yoga e muito mais." },
      { property: "og:title", content: "GymFit Academia" },
      { property: "og:description", content: "Junte-se a nós e transforme sua vida." },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-secondary text-secondary-foreground">
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
            GO <span className="text-primary italic">HARD</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-lg text-muted-foreground md:text-xl">
            Treine com os melhores profissionais e em um ambiente motivador. Resultados reais para quem busca superação.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contato"
              className="rounded-md bg-primary px-10 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Junte-se a nós
            </Link>
            <Link
              to="/modalidades"
              className="rounded-md border-2 border-primary px-10 py-4 text-lg font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ver modalidades
            </Link>
          </div>
        </div>
        {/* Background Decorative element */}
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Diferenciais */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { title: "Infraestrutura", desc: "Equipamentos de última geração para todos os tipos de treino." },
              { title: "Profissionais", desc: "Equipe altamente qualificada para orientar sua jornada." },
              { title: "Horários", desc: "Flexibilidade total para você treinar quando quiser." }
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-card p-8 transition-colors hover:border-primary">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Planos (Preview) */}
      <section className="bg-secondary py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold tracking-tight">Escolha seu plano</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { name: "Básico", price: "R$ 89", features: ["Musculação", "Acesso 5x semana"] },
              { name: "Premium", price: "R$ 129", features: ["Musculação + Aulas", "Acesso livre", "Avaliação mensal"] },
              { name: "Elite", price: "R$ 199", features: ["VIP", "Personal Trainer 1x", "Tudo liberado"] }
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl border p-8 ${i === 1 ? 'border-primary bg-background shadow-xl' : 'bg-card'}`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 text-4xl font-bold text-primary">{plan.price}<span className="text-lg text-muted-foreground">/mês</span></div>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((f, j) => <li key={j}>• {f}</li>)}
                </ul>
                <Link to="/contato" className="mt-8 block w-full rounded-md bg-primary py-3 font-bold text-primary-foreground">Assinar agora</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
