
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Badge, Switch } from "@heroui/react";
import { MagnifyingGlassIcon, BellIcon, SunIcon, MoonIcon, ChevronDownIcon, UserIcon, ArrowRightIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
        export default function HeaderBar() {
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(() => {
  if (typeof document !== "undefined") {
  return document.documentElement.getAttribute("data-theme") !== "light";
  }
  return true;
  });
  const [notifications, setNotifications] = useState([
  { id: 1, title: "Budget 'Groceries' at 80%", time: "2h ago" },
  { id: 2, title: "New expense added: $24.50", time: "yesterday" }
  ]);
  const unreadCount = useMemo(() => notifications.length, [notifications]);
  const menuItems = [
  { to: "/", label: "Home" },
  { to: "/add-expense", label: "Add Expense" },
  { to: "/expenses", label: "Expenses" },
  { to: "/budgets", label: "Budgets" },
  { to: "/reports", label: "Reports" },
  { to: "/settings", label: "Settings" }
  ];

  const toggleTheme = (val) => {
  setIsDark(val);
  if (typeof document !== "undefined") {
  document.documentElement.setAttribute("data-theme", val ? "dark" : "light");
  }
  };

  useEffect(() => {
  if (typeof document !== "undefined") {
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }
  }, [isDark]);
        return (
            <Navbar maxWidth="xl" className="bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)] rounded-2xl shadow-md">
    <NavbarContent justify="start">
    <NavbarBrand className="hidden md:flex">
    <Link to="/" className="text-[var(--color-text)] font-semibold">Expense Tracker Application</Link>
    </NavbarBrand>
    </NavbarContent>

    <NavbarContent justify="center" className="w-full max-w-xl">
    <Input
    aria-label="Search"
    value={search}
    onValueChange={setSearch}
    labelPlacement="outside-left"
    placeholder="Search expenses, budgets..."
    classNames={{
    base: "w-full",
    inputWrapper: "bg-[var(--color-background)]/80 border border-[var(--color-border)] rounded-xl input-focus-primary",
    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
    label: "text-[var(--color-text)]"
    }}
    startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
    />
    </NavbarContent>

    <NavbarContent justify="end" className="items-center gap-2">
    <Switch
    isSelected={isDark}
    onValueChange={toggleTheme}
    size="sm"
    className="mr-2"
    thumbIcon={({isSelected, className}) => isSelected ? <SunIcon className={`${className} text-[var(--color-text)]`} /> : <MoonIcon className={`${className} text-[var(--color-text)]`} />}
    />

    <Dropdown>
    <DropdownTrigger>
    <Button isIconOnly className="rounded-xl bg-[var(--color-background)] border border-[var(--color-border)]">
    <Badge content={unreadCount} color="warning">
    <BellIcon className="w-5 h-5 text-[var(--color-text)]" />
    </Badge>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Notifications" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[280px]" }}>
    {notifications.length === 0 ? (
    <DropdownItem key="empty" className="text-[var(--color-text)]/70">No new notifications</DropdownItem>
    ) : (
    notifications.map((n) => (
    <DropdownItem key={n.id} className="text-[var(--color-text)]">
    <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/15 flex items-center justify-center">
    <BellIcon className="w-4 h-4 text-[var(--color-primary)]" />
    </div>
    <div className="flex-1">
    <p className="text-sm text-[var(--color-text)]">{n.title}</p>
    <p className="text-xs text-[var(--color-text)]/70">{n.time}</p>
    </div>
    </div>
    </DropdownItem>
    ))
    )}
    {notifications.length > 0 && (
    <DropdownItem key="viewall" className="text-[var(--color-primary)]">View all</DropdownItem>
    )}
    </DropdownMenu>
    </Dropdown>

    <Dropdown>
    <DropdownTrigger>
    <Button className="rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] px-2">
    <div className="flex items-center gap-2">
    <Avatar name="You" size="sm" className="w-7 h-7" />
    <ChevronDownIcon className="w-4 h-4 text-[var(--color-text)]" />
    </div>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="User menu" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[220px]" }}>
    <DropdownItem key="profile" startContent={<UserIcon className="w-4 h-4 text-[var(--color-text)]" />}>Profile</DropdownItem>
    <DropdownItem key="settings" startContent={<Cog6ToothIcon className="w-4 h-4 text-[var(--color-text)]" />}>Settings</DropdownItem>
    <DropdownItem key="logout" color="danger" startContent={<ArrowRightIcon className="w-4 h-4 text-red-500" />}>Sign out</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    </NavbarContent>

    <NavbarMenu>
    {menuItems.map((item) => (
    <NavbarMenuItem key={item.to}>
    <Link to={item.to} className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">{item.label}</Link>
    </NavbarMenuItem>
    ))}
    </NavbarMenu>
    </Navbar>
        );
        }
