import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Badge, Button, Switch, Card } from "@heroui/react";
import {
  HomeIcon,
  PlusIcon,
  CalendarIcon,
  AdjustmentsHorizontalIcon,
  FireIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

export default function Layout({ children }) {
  const [isDark, setIsDark] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [notifications] = React.useState(2);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleThemeToggle = (val) => {
    setIsDark(val);
    const root = document.documentElement;
    if (val) {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "light");
    }
  };

  const toggleSidebar = () => setSidebarOpen((v) => !v);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] flex">
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex md:w-64 lg:w-72 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-xl">
        <div className="flex items-center gap-2 px-6 py-5 border-b border-[var(--color-border)]">
          <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
            <FireIcon className="w-5 h-5 text-[var(--color-primary-light)]" />
          </div>
          <span className="text-[var(--color-text)] font-semibold text-base">Expense Tracker Application</span>
        </div>
        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 ${
                    isActive
                      ? "text-[var(--color-primary-light)] bg-[var(--color-primary)]/10"
                      : "text-[var(--color-text)]"
                  }`
                }
              >
                <HomeIcon className="w-5 h-5 text-[inherit]" />
                <span className="text-sm text-[inherit]">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-expense"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 ${
                    isActive
                      ? "text-[var(--color-primary-light)] bg-[var(--color-primary)]/10"
                      : "text-[var(--color-text)]"
                  }`
                }
              >
                <PlusIcon className="w-5 h-5 text-[inherit]" />
                <span className="text-sm text-[inherit]">Add Expense</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/expenses"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 ${
                    isActive
                      ? "text-[var(--color-primary-light)] bg-[var(--color-primary)]/10"
                      : "text-[var(--color-text)]"
                  }`
                }
              >
                <CalendarIcon className="w-5 h-5 text-[inherit]" />
                <span className="text-sm text-[inherit]">Expenses</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/budgets"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 ${
                    isActive
                      ? "text-[var(--color-primary-light)] bg-[var(--color-primary)]/10"
                      : "text-[var(--color-text)]"
                  }`
                }
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5 text-[inherit]" />
                <span className="text-sm text-[inherit]">Budgets</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 ${
                    isActive
                      ? "text-[var(--color-primary-light)] bg-[var(--color-primary)]/10"
                      : "text-[var(--color-text)]"
                  }`
                }
              >
                <FireIcon className="w-5 h-5 text-[inherit]" />
                <span className="text-sm text-[inherit]">Reports</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-[var(--color-primary)]/10 ${
                    isActive
                      ? "text-[var(--color-primary-light)] bg-[var(--color-primary)]/10"
                      : "text-[var(--color-text)]"
                  }`
                }
              >
                <Cog6ToothIcon className="w-5 h-5 text-[inherit]" />
                <span className="text-sm text-[inherit]">Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="px-4 py-4">
          <Card className="bg-[var(--color-background)]/60 border border-[var(--color-border)] rounded-2xl">
            <Card.Content className="p-4">
              <p className="text-[var(--color-text)] text-xs leading-5">
                Tip: Use the Add Expense page to quickly log purchases. Keep categories consistent for better reports.
              </p>
            </Card.Content>
          </Card>
        </div>
      </aside>

      {/* Mobile sidebar drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={toggleSidebar} />
          <div className="relative w-72 h-full bg-[var(--color-surface)] border-r border-[var(--color-border)] p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <FireIcon className="w-5 h-5 text-[var(--color-primary-light)]" />
                </div>
                <span className="text-[var(--color-text)] font-semibold text-base">Expense Tracker Application</span>
              </div>
              <Button isIconOnly onPress={toggleSidebar} className="rounded-xl bg-[var(--color-background)]">
                <XMarkIcon className="w-5 h-5 text-[var(--color-text)]" />
              </Button>
            </div>
            <nav className="flex-1">
              <ul className="space-y-1">
                <li>
                  <Link
                    onClick={toggleSidebar}
                    to="/"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  >
                    <HomeIcon className="w-5 h-5 text-[var(--color-text)]" />
                    <span className="text-sm text-[var(--color-text)]">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleSidebar}
                    to="/add-expense"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  >
                    <PlusIcon className="w-5 h-5 text-[var(--color-text)]" />
                    <span className="text-sm text-[var(--color-text)]">Add Expense</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleSidebar}
                    to="/expenses"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  >
                    <CalendarIcon className="w-5 h-5 text-[var(--color-text)]" />
                    <span className="text-sm text-[var(--color-text)]">Expenses</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleSidebar}
                    to="/budgets"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  >
                    <AdjustmentsHorizontalIcon className="w-5 h-5 text-[var(--color-text)]" />
                    <span className="text-sm text-[var(--color-text)]">Budgets</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleSidebar}
                    to="/reports"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  >
                    <FireIcon className="w-5 h-5 text-[var(--color-text)]" />
                    <span className="text-sm text-[var(--color-text)]">Reports</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleSidebar}
                    to="/settings"
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                  >
                    <Cog6ToothIcon className="w-5 h-5 text-[var(--color-text)]" />
                    <span className="text-sm text-[var(--color-text)]">Settings</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Content area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header bar */}
        <Navbar maxWidth="xl" className="sticky top-0 z-40 bg-[var(--color-background)]/80 backdrop-blur-xl border-b border-[var(--color-border)]">
          <NavbarContent justify="start" className="gap-2">
            <Button isIconOnly className="md:hidden rounded-xl bg-[var(--color-surface)]" onPress={toggleSidebar}>
              <Bars3Icon className="w-5 h-5 text-[var(--color-text)]" />
            </Button>
            <NavbarBrand>
              <Link to="/" className="text-[var(--color-text)] font-semibold">
                Dashboard
              </Link>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent className="hidden sm:flex" justify="center">
            <Input
              aria-label="Search expenses"
              value={search}
              onValueChange={setSearch}
              placeholder="Search expenses, merchants, notes..."
              classNames={{
                base: "w-80",
                inputWrapper:
                  "bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl input-focus-primary",
                input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
                label: "text-[var(--color-text)]",
              }}
              startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
            />
          </NavbarContent>
          <NavbarContent justify="end" className="gap-2 pr-2">
            <Dropdown>
              <DropdownTrigger>
                <Badge content={notifications} color="danger">
                  <Button isIconOnly className="rounded-xl bg-[var(--color-surface)]">
                    <BellIcon className="w-5 h-5 text-[var(--color-text)]" />
                  </Button>
                </Badge>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Notifications"
                classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[260px]" }}
              >
                <DropdownItem key="n1" className="text-[var(--color-text)]">
                  Monthly report is ready
                </DropdownItem>
                <DropdownItem key="n2" className="text-[var(--color-text)]">
                  Budget limit approaching
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Switch aria-label="Toggle theme" isSelected={isDark} onValueChange={handleThemeToggle} size="sm" classNames={{ wrapper: "rounded-xl" }}>
              <span className="text-xs text-[var(--color-text)] hidden lg:inline">{isDark ? "Dark" : "Light"}</span>
            </Switch>
            <Dropdown>
              <DropdownTrigger>
                <Button className="rounded-xl bg-[var(--color-surface)] flex items-center gap-2 px-2">
                  <Avatar size="sm" src="https://i.pravatar.cc/150?img=32" />
                  <span className="text-sm text-[var(--color-text)] hidden md:inline">You</span>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User menu" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[220px]" }}>
                <DropdownItem key="profile" className="text-[var(--color-text)]">
                  Profile
                </DropdownItem>
                <DropdownItem key="settings" className="text-[var(--color-text)]">
                  Settings
                </DropdownItem>
                <DropdownItem key="logout" className="text-[var(--color-text)]" color="danger">
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-[var(--color-background)]">{children}</main>
      </div>
    </div>
  );
}
