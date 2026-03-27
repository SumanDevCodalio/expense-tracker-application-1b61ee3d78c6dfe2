import { Button, Card, CardBody, CardHeader, Chip, DateRangePicker, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Progress, Select, SelectItem, Tab, Tabs } from "@heroui/react";
import { useState } from "react";

export default function Reports() {
    const [period, setPeriod] = useState('m');
    const [range, setRange] = useState({ start: null, end: null });
    const [category, setCategory] = useState("");
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("csv");
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="max-w-7xl mx-auto w-full">
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-5 space-y-4">
      <Tabs classNames={{ tabList: "bg-[var(--color-background)]/40 rounded-lg p-1", cursor: "bg-[var(--color-primary)] rounded-md", tab: "text-[var(--color-text)] rounded-md" }} selectedKey={period} onSelectionChange={setPeriod}>
      <Tab key="m" title="Monthly" />
      <Tab key="q" title="Quarterly" />
      <Tab key="y" title="Yearly" />
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      <DateRangePicker label="Date range" value={range} onChange={setRange} className="rounded-xl" />
      <Select label="Category" selectedKeys={category ? [category] : []} onSelectionChange={(keys) => setCategory(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", label: "text-[var(--color-text)]" }}>
      {['All','Groceries','Transport','Dining','Utilities','Shopping','Health','Other'].map((c) => (<SelectItem key={c}>{c}</SelectItem>))}
      </Select>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Apply</Button>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]" onPress={() => { setRange({ start: null, end: null }); setCategory(""); }}>Reset</Button>
      </div>
      </CardBody>
      </Card>
      </section>
  <section className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0 flex items-center justify-between">
      <p className="text-[var(--color-text)] font-semibold">Spending over time</p>
      <Chip size="sm" className="rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">Monthly</Chip>
      </CardHeader>
      <CardBody className="p-5 pt-4">
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-[var(--color-text)] text-sm">$820 → $1010 (trend up)</p>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <p className="text-[var(--color-text)] font-semibold">Category breakdown</p>
      </CardHeader>
      <CardBody className="p-5 pt-4 space-y-3">
      {[{n:'Groceries',v:38},{n:'Transport',v:16},{n:'Dining',v:22},{n:'Utilities',v:12}].map((c) => (
      <div key={c.n} className="flex items-center gap-3">
      <span className="text-sm text-[var(--color-text)] w-24">{c.n}</span>
      <Progress value={c.v} classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
      <span className="text-sm text-[var(--color-text)]/70 w-10 text-right">{c.v}%</span>
      </div>
      ))}
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <p className="text-[var(--color-text)] font-semibold">Budget adherence</p>
      </CardHeader>
      <CardBody className="p-5 pt-4">
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-[var(--color-text)] text-sm">4/6 budgets on track</p>
      </div>
      <div className="mt-3 flex gap-2">
      <Button size="sm" className="rounded-lg bg-[var(--color-primary)] text-[var(--color-text)]">View details</Button>
      <Button size="sm" variant="bordered" className="rounded-lg border-[var(--color-border)] text-[var(--color-text)]">Adjust budgets</Button>
      </div>
      </CardBody>
      </Card>
      </div>
      </section>

  <section className="max-w-7xl mx-auto w-full">
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-5 flex flex-wrap items-center justify-between gap-3">
      <p className="text-[var(--color-text)]">Export your data or share a report with your accountant.</p>
      <div className="flex items-center gap-2">
      <Dropdown isOpen={open} onOpenChange={setOpen}>
      <DropdownTrigger>
      <Button className="rounded-lg bg-[var(--color-primary)] text-[var(--color-text)]">Export</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Export options" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }} onAction={(key) => setSelected(key)}>
      <DropdownItem key="csv">CSV</DropdownItem>
      <DropdownItem key="pdf">PDF</DropdownItem>
      <DropdownItem key="xlsx">Excel</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      <Button variant="bordered" className="rounded-lg border-[var(--color-border)] text-[var(--color-text)]">Share</Button>
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
