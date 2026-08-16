import { Link, Outlet } from "@tanstack/react-router";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">GymFit</Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/modalidades" className="hover:text-primary">Modalidades</Link>
            <Link to="/horarios" className="hover:text-primary">Horários</Link>
            <Link to="/galeria" className="hover:text-primary">Galeria</Link>
            <Link to="/contato" className="hover:text-primary">Contato</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children || <Outlet />}</main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        &copy; 2026 GymFit Academia. Todos os direitos reservados.
      </footer>
    </div>
  );
}
