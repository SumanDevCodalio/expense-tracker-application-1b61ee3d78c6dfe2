import BudgetProgress from "../components/BudgetProgress";
import StatCard from "../components/StatCard";
import { Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader, Chip, Pagination, Progress, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const data = useMemo(() => ([
      { id: 1, name: "Groceries - Fresh Mart", category: "Groceries", date: "2026-03-20", amount: 54.12 },
      { id: 2, name: "Uber Ride", category: "Transport", date: "2026-03-19", amount: 16.8 },
      { id: 3, name: "Coffee Shop", category: "Dining", date: "2026-03-19", amount: 4.75 },
      { id: 4, name: "Electricity Bill", category: "Utilities", date: "2026-03-18", amount: 92.6 },
      { id: 5, name: "Book Purchase", category: "Other", date: "2026-03-18", amount: 18.99 },
      { id: 6, name: "Lunch - Bistro", category: "Dining", date: "2026-03-17", amount: 12.5 },
      { id: 7, name: "Gas Station", category: "Transport", date: "2026-03-16", amount: 44.21 },
      { id: 8, name: "Pharmacy", category: "Health", date: "2026-03-16", amount: 23.15 }
    ]), []);
    const totalPages = Math.ceil(data.length / pageSize);
    const pagedData = useMemo(() => data.slice((page - 1) * pageSize, page * pageSize), [data, page]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-6 md:p-10 shadow-primary">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{background: "radial-gradient(800px 400px at 20% 0%, rgba(255,255,255,0.25) 0%, transparent 60%), radial-gradient(800px 400px at 80% 100%, rgba(255,255,255,0.25) 0%, transparent 60%)"}} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">
      <div className="space-y-4">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">Track expenses with clarity and control</h1>
      <p className="text-[var(--color-text)]/90 text-base md:text-lg">Monitor spending, manage budgets, and make smarter financial decisions with a beautiful, fast interface.</p>
      <div className="flex flex-wrap gap-3 pt-2">
      <Chip className="rounded-full bg-[var(--color-background)]/20 text-[var(--color-text)]">Real-time insights</Chip>
      <Chip className="rounded-full bg-[var(--color-background)]/20 text-[var(--color-text)]">Smart budgets</Chip>
      <Chip className="rounded-full bg-[var(--color-background)]/20 text-[var(--color-text)]">Powerful search</Chip>
      </div>
      <div className="flex flex-wrap gap-4 pt-4">
      <Link to="/add-expense">
      <Button size="md" className="rounded-full bg-[var(--color-background)] text-[var(--color-primary)] font-semibold px-7 transition-all hover:scale-[1.02] active:scale-95">Add an expense</Button>
      </Link>
      <Link to="/reports">
      <Button size="md" variant="bordered" className="rounded-full border-[var(--color-text)] text-[var(--color-text)] px-7">View reports</Button>
      </Link>
      </div>
      </div>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl shadow-lg">
      <CardHeader className="p-5 pb-0">
      <p className="text-sm text-[var(--color-text)]/70">Recently active</p>
      </CardHeader>
      <CardBody className="p-5 pt-4 flex flex-col gap-4">
      <div className="flex -space-x-2">
      <Avatar src="https://i.pravatar.cc/150?img=8" size="sm" className="ring-2 ring-[var(--color-background)]" />
      <Avatar src="https://i.pravatar.cc/150?img=10" size="sm" className="ring-2 ring-[var(--color-background)]" />
      <Avatar src="https://i.pravatar.cc/150?img=12" size="sm" className="ring-2 ring-[var(--color-background)]" />
      <Avatar src="https://i.pravatar.cc/150?img=14" size="sm" className="ring-2 ring-[var(--color-background)]" />
      </div>
      <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/70">This week spend</p>
      <p className="text-xl font-bold text-[var(--color-text)]">$482.30</p>
      </div>
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/70">Active budgets</p>
      <p className="text-xl font-bold text-[var(--color-text)]">6</p>
      </div>
      </div>
      </CardBody>
      <CardFooter className="p-5 pt-0">
      <p className="text-xs text-[var(--color-text)]/70">Secure and private. Your data stays with you.</p>
      </CardFooter>
      </Card>
      </div>
      </section>
  <section className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Total spent" subtitle="This month" value="$2,345" target="$3,000" progress={78} badge="On track" />
      <StatCard title="Average daily" subtitle="Last 7 days" value="$84.20" progress={42} />
      <StatCard title="Transactions" subtitle="This month" value="128" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0 flex items-center justify-between">
      <p className="text-[var(--color-text)] font-semibold">Spending snapshot</p>
      <Chip size="sm" className="rounded-md bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]">Week</Chip>
      </CardHeader>
      <CardBody className="p-5 pt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/70">Groceries</p>
      <p className="text-lg font-semibold text-[var(--color-text)]">$320</p>
      </div>
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/70">Transport</p>
      <p className="text-lg font-semibold text-[var(--color-text)]">$96</p>
      </div>
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/70">Dining</p>
      <p className="text-lg font-semibold text-[var(--color-text)]">$210</p>
      </div>
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/70">Utilities</p>
      <p className="text-lg font-semibold text-[var(--color-text)]">$180</p>
      </div>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <p className="text-[var(--color-text)] font-semibold">Budgets</p>
      </CardHeader>
      <CardBody className="p-5 pt-4 space-y-4">
      <BudgetProgress label="Groceries" value={72} />
      <BudgetProgress label="Transport" value={45} />
      <BudgetProgress label="Dining" value={58} />
      <BudgetProgress label="Utilities" value={33} />
      </CardBody>
      </Card>
      </div>
      </section>
  <section className="max-w-7xl mx-auto w-full">
      <div className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] p-4">
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Recent expenses</h3>
      <Button size="sm" variant="bordered" className="rounded-lg text-[var(--color-text)] border-[var(--color-border)]">View all</Button>
      </div>
      <Table aria-label="Recent expenses table" className="bg-transparent">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">ITEM</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CATEGORY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">DATE</TableColumn>
      <TableColumn className="text-[var(--color-text)]" align="end">AMOUNT</TableColumn>
      </TableHeader>
      <TableBody items={pagedData}>
      {(item) => (
      <TableRow key={item.id} className="hover:bg-[var(--color-background)]/60">
      <TableCell className="text-[var(--color-text)]">
      <div className="flex items-center gap-3">
      <Avatar size="sm" name={item.name} className="w-7 h-7" />
      <span className="text-sm text-[var(--color-text)]">{item.name}</span>
      </div>
      </TableCell>
      <TableCell className="text-[var(--color-text)]">
      <Chip size="sm" className="rounded-md bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{item.category}</Chip>
      </TableCell>
      <TableCell className="text-[var(--color-text)] text-sm">{item.date}</TableCell>
      <TableCell className="text-[var(--color-text)] text-right font-semibold">${item.amount.toFixed(2)}</TableCell>
      </TableRow>
      )}
      </TableBody>
      </Table>
      <div className="flex justify-end pt-3">
      <Pagination total={totalPages} page={page} onChange={setPage} className="text-[var(--color-text)]" />
      </div>
      </div>
      </section>
  <section className="max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Budgets at a glance</h3>
      <Link to="/budgets">
      <Button size="sm" className="rounded-lg bg-[var(--color-primary)] text-[var(--color-text)]">Manage budgets</Button>
      </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[{name: "Groceries", value: 72}, {name: "Transport", value: 45}, {name: "Dining", value: 58}, {name: "Utilities", value: 33}, {name: "Shopping", value: 62}, {name: "Health", value: 28}].map((b) => (
      <Card key={b.name} className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0 flex items-center justify-between">
      <p className="text-[var(--color-text)] font-medium">{b.name}</p>
      <Badge content="" className="bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 rounded-md">
      <span className="text-[var(--color-accent)] text-xs px-2 py-1">Active</span>
      </Badge>
      </CardHeader>
      <CardBody className="p-5 pt-4">
      <BudgetProgress label={`${b.value}% of budget used`} value={b.value} />
      </CardBody>
      </Card>
      ))}
      </div>
      </section>
      </div>
    </div>
  );
}
