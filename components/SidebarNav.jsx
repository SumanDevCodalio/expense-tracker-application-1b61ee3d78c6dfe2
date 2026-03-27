

import { Listbox, ListboxItem, Button, Badge } from "@heroui/react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  PlusIcon,
  CurrencyDollarIcon,
  WalletIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";
        export default function SidebarNav() {
  const navItems = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/add-expense", label: "Add Expense", icon: PlusIcon },
  { to: "/expenses", label: "Expenses", icon: CurrencyDollarIcon },
  { to: "/budgets", label: "Budgets", icon: WalletIcon },
  { to: "/reports", label: "Reports", icon: ChartBarIcon },
  { to: "/settings", label: "Settings", icon: Cog6ToothIcon }
  ];
        return (
            <aside className="h-full w-full p-4">
    <div className="flex items-center gap-3 px-2 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm">
    <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center">
    <span className="text-[var(--color-primary)] font-bold">ET</span>
    </div>
    <div className="flex flex-col">
    <span className="text-[var(--color-text)] font-semibold leading-5">Expense Tracker</span>
    <span className="text-[var(--color-text)]/70 text-xs leading-4">Stay on top of your spending</span>
    </div>
    </div>

    <nav className="mt-4">
    <Listbox aria-label="Main Navigation" className="bg-transparent" itemClasses={{base: "rounded-xl"}}>
    {navItems.map((item) => (
    <ListboxItem key={item.to} textValue={item.label} className="mb-1 rounded-xl">
    <NavLink
      to={item.to}
      className={({isActive}) => `group flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-colors duration-150 hover:bg-[var(--color-surface)] border border-transparent hover:border-[var(--color-border)] ${isActive ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : ''}`}
    >
    <item.icon className="w-5 h-5 text-[var(--color-text)] group-hover:text-[var(--color-primary)]" />
    <span className="text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)]">{item.label}</span>
    {item.badge ? (
    <div className="ml-auto">
    <Badge content={item.badge} color="warning">
    <Button size="sm" variant="light" className="rounded-lg text-[var(--color-text)]">{item.badgeLabel}</Button>
    </Badge>
    </div>
    ) : null}
    </NavLink>
    </ListboxItem>
    ))}
    </Listbox>
    </nav>

    <div className="mt-6 p-3 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30">
    <p className="text-[var(--color-text)] text-sm">
    Tip: Use the Add Expense page to quickly log purchases and keep budgets accurate.
    </p>
    </div>
    </aside>
        );
        }
