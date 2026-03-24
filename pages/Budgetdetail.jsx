import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Pagination, Progress, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function BudgetDetail() {
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 8;
    const data = React.useMemo(() => (
      Array.from({length: 20}).map((_, i) => ({
        id: i+1,
        date: `2026-03-${String(((i%28)+1)).padStart(2,'0')}`,
        merchant: ['Whole Foods','Trader Joe\'s','Safeway','Instacart'][i%4],
        amount: Math.round((Math.random()*45+5)*100)/100
      }))
    ), []);
    const pages = Math.ceil(data.length / rowsPerPage);
    const paged = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return data.slice(start, start + rowsPerPage);
    }, [page, rowsPerPage, data]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section className="flex items-center gap-2 text-sm">
      <Link to="/budgets" className="text-[var(--color-text)] hover:text-[var(--color-primary-light)] transition-colors">Budgets</Link>
      <ChevronRightIcon className="w-4 h-4 text-[var(--color-text)]/60" />
      <span className="text-[var(--color-text)]/80">Detail</span>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)] flex items-center justify-between">
      <div>
      <h3 className="text-[var(--color-text)] text-xl font-semibold">Groceries</h3>
      <p className="text-[var(--color-text)]/80 text-sm">Monthly budget</p>
      </div>
      <Badge className="rounded-full bg-[var(--color-background)] text-[var(--color-text)] px-2 py-0.5">$400 limit</Badge>
      </CardHeader>
      <CardBody className="p-5 space-y-3">
      <div className="flex items-center justify-between">
      <span className="text-[var(--color-text)]/80 text-sm">$260 spent</span>
      <span className="text-[var(--color-text)] text-sm font-semibold">65%</span>
      </div>
      <Progress value={65} className="max-w-full" classNames={{indicator:"bg-[var(--color-secondary)] rounded-lg", track:"bg-[var(--color-border)] rounded-lg"}} />
      <div className="flex gap-3 pt-2">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Edit budget</Button>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]">Export</Button>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h4 className="text-[var(--color-text)] text-base font-semibold">Spending over time</h4>
      </CardHeader>
      <CardBody className="p-5">
      <div className="h-48 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-border)]" aria-label="Chart placeholder"></div>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <Table aria-label="Related expenses" className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">DATE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">MERCHANT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">AMOUNT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {paged.map((e) => (
      <TableRow key={e.id}>
      <TableCell className="text-[var(--color-text)]">{e.date}</TableCell>
      <TableCell className="text-[var(--color-text)]">{e.merchant}</TableCell>
      <TableCell className="text-[var(--color-text)]">{`$${e.amount.toFixed(2)}`}</TableCell>
      <TableCell className="text-[var(--color-text)]">
      <Dropdown>
      <DropdownTrigger>
      <Button size="sm" className="rounded-xl bg-[var(--color-background)] border border-[var(--color-border)]">Actions</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
      <DropdownItem key="view" className="text-[var(--color-text)]">View</DropdownItem>
      <DropdownItem key="edit" className="text-[var(--color-text)]">Edit</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
      <Pagination page={page} total={pages} onChange={setPage} className="text-[var(--color-text)]" />
      </div>
      </section>
      </div>
    </div>
  );
}
