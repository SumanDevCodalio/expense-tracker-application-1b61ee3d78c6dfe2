import { Badge, Button, Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Progress, Select, SelectItem } from "@heroui/react";
import React from "react";

export default function Reports() {
    const [period, setPeriod] = React.useState('This month');
    const [group, setGroup] = React.useState('Monthly');
    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-4 grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
      <Select aria-label="Period" selectedKeys={period ? [period] : []} onSelectionChange={(keys)=>setPeriod(Array.from(keys)[0]||"")} classNames={{trigger:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent:"bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl"}}>
      {['Last 7 days','Last 30 days','This month','Last month','This year'].map((opt)=>(
      <SelectItem key={opt}>{opt}</SelectItem>
      ))}
      </Select>
      <Select aria-label="Grouping" selectedKeys={group ? [group] : []} onSelectionChange={(keys)=>setGroup(Array.from(keys)[0]||"")} classNames={{trigger:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent:"bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl"}}>
      {['Daily','Weekly','Monthly','Quarterly'].map((opt)=>(
      <SelectItem key={opt}>{opt}</SelectItem>
      ))}
      </Select>
      <Input aria-label="From" type="date" value={from} onValueChange={setFrom} classNames={{inputWrapper:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input:"text-[var(--color-text)]"}} />
      <Input aria-label="To" type="date" value={to} onValueChange={setTo} classNames={{inputWrapper:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input:"text-[var(--color-text)]"}} />
      <div className="flex gap-2">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Apply</Button>
      <Dropdown>
      <DropdownTrigger>
      <Button className="rounded-xl bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)]">More</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="More" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
      <DropdownItem key="compare" className="text-[var(--color-text)]">Compare to last period</DropdownItem>
      <DropdownItem key="reset" className="text-[var(--color-text)]">Reset</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </div>
      </CardBody>
      </Card>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h4 className="text-[var(--color-text)] text-base font-semibold">Spending over time</h4>
      </CardHeader>
      <CardBody className="p-5">
      <div className="h-64 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-border)]" aria-label="Chart placeholder"></div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h4 className="text-[var(--color-text)] text-base font-semibold">Category breakdown</h4>
      </CardHeader>
      <CardBody className="p-5">
      <div className="h-64 rounded-xl bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-border)]" aria-label="Chart placeholder"></div>
      </CardBody>
      </Card>

      <Card className="lg:col-span-3 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h4 className="text-[var(--color-text)] text-base font-semibold">Budget adherence</h4>
      </CardHeader>
      <CardBody className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
      {[{name:'Groceries', pct:72},{name:'Dining', pct:58},{name:'Transport', pct:44}].map((b, i)=>(
      <div key={i} className="p-4 rounded-xl border border-[var(--color-border)]">
      <div className="flex items-center justify-between mb-2">
      <span className="text-[var(--color-text)] text-sm">{b.name}</span>
      <span className="text-[var(--color-text)]/80 text-xs">{b.pct}%</span>
      </div>
      <Progress value={b.pct} className="max-w-full" classNames={{indicator:"bg-[var(--color-primary)] rounded-lg", track:"bg-[var(--color-border)] rounded-lg"}} />
      </div>
      ))}
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h4 className="text-[var(--color-text)] text-base font-semibold">Insights</h4>
      </CardHeader>
      <CardBody className="p-5 space-y-3">
      {[
      {text:'Dining is up 18% vs last month', type:'warning'},
      {text:'Groceries trending down 6%', type:'success'},
      {text:'Transport spikes on Fridays', type:'info'}
      ].map((ins, i)=> (
      <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-[var(--color-border)]">
      <span className="text-[var(--color-text)] text-sm">{ins.text}</span>
      <Badge className={`rounded-full px-2 py-0.5 ${ins.type==='warning' ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]' : ins.type==='success' ? 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]' : 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'}`}>{ins.type}</Badge>
      </div>
      ))}
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h4 className="text-[var(--color-text)] text-base font-semibold">Export</h4>
      </CardHeader>
      <CardBody className="p-5 flex flex-col gap-3">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Export CSV</Button>
      <Dropdown>
      <DropdownTrigger>
      <Button className="rounded-xl bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)]">More formats</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Export formats" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
      <DropdownItem key="xlsx" className="text-[var(--color-text)]">Excel (.xlsx)</DropdownItem>
      <DropdownItem key="pdf" className="text-[var(--color-text)]">PDF</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </CardBody>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
