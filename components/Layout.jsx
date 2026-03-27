

import HeaderBar from "./HeaderBar";
import SidebarNav from "./SidebarNav";
        export default function Layout({ children }) {
        return (
            <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 p-4">
    <aside className="hidden md:block sticky top-4 self-start h-[calc(100vh-2rem)] rounded-2xl bg-[var(--color-surface)]/60 border border-[var(--color-border)] shadow-md overflow-hidden">
    <SidebarNav />
    </aside>

    <section className="flex flex-col gap-4 min-h-[calc(100vh-2rem)]">
    <header className="sticky top-4 z-40">
    <HeaderBar />
    </header>
    <main className="rounded-2xl bg-[var(--color-surface)]/50 border border-[var(--color-border)] p-4 shadow-sm min-h-[60vh]">
    {children}
    </main>
    </section>
    </div>
    </div>
        );
        }
