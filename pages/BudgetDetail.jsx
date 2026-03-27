import { Button, Card, CardBody, CardHeader, Chip, Progress, Tab, Tabs } from "@heroui/react";
import { useState } from "react";

export default function BudgetDetail() {
    const [tab, setTab] = useState('w');
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-3 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0 flex items-center justify-between">
      <div>
      <h2 className="text-[var(--color-text)] font-semibold text-lg">Groceries Budget</h2>
      <p className="text-[var(--color-text)]/70 text-sm">Resets monthly on the 1st</p>
      </div>
      <div className="flex items-center gap-2">
      <Chip className="rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">Active</Chip>
      <Button size="sm" className="rounded-lg bg-[var(--color-primary)] text-[var(--color-text)]">Edit</Button>
      </div>
      </CardHeader>
      <CardBody className="p-5 pt-4">
      <div className="flex items-center gap-4">
      <div className="flex-1">
      <Progress value={74} classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
      <div className="flex items-center justify-between mt-2">
      <span className="text-sm text-[var(--color-text)]/70">$740 of $1,000</span>
      <span className="text-sm text-[var(--color-text)]">74% used</span>
      </div>
      </div>
      </div>
      </CardBody>
      </Card>

      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <p className="text-[var(--color-text)] font-semibold">Category spending</p>
      </CardHeader>
      <CardBody className="p-5 pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
      {[{n:'Produce',v:40},{n:'Dairy',v:20},{n:'Snacks',v:10},{n:'Household',v:4}].map((c) => (
      <div key={c.n} className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-[var(--color-text)]">{c.n}</span>
      <span className="text-sm text-[var(--color-text)]/70">{c.v}%</span>
      </div>
      <Progress value={c.v} classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
      </div>
      ))}
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <p className="text-[var(--color-text)] font-semibold">Spending trend</p>
      </CardHeader>
      <CardBody className="p-5 pt-4">
      <Tabs classNames={{ tabList: "bg-[var(--color-background)]/40 rounded-lg p-1", cursor: "bg-[var(--color-primary)] rounded-md", tab: "text-[var(--color-text)] rounded-md" }} selectedKey={tab} onSelectionChange={setTab}>
      <Tab key="w" title="Weekly">
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-[var(--color-text)] text-sm">$120, $140, $110, $160, $130, $180, $150</p>
      </div>
      </Tab>
      <Tab key="m" title="Monthly">
      <div className="rounded-xl p-4 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-[var(--color-text)] text-sm">$820, $760, $940, $880, $990, $1010</p>
      </div>
      </Tab>
      </Tabs>
      </CardBody>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
