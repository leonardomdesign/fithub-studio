import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout/Layout";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <Layout>
      <section className="container py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          Transforme sua <span className="text-primary">vida</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          A GymFit oferece a melhor infraestrutura e os melhores profissionais para você atingir seus objetivos de forma saudável e motivadora.
        </p>
        <div className="mt-10">
          <Link
            to="/contato"
            className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Junte-se a nós
          </Link>
        </div>
      </section>
    </Layout>
  );
}
