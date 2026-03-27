import { AdjustmentsHorizontalIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Card, CardBody, Chip, DateRangePicker, Input, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@heroui/react";
import { useMemo, useState } from "react";

export default function Expenses() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [range, setRange] = useState({ start: null, end: null });
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const data = useMemo(() => Array.from({length: 36}).map((_, i) => ({
      id: i + 1,
      name: ["Groceries","Uber Ride","Coffee","Electricity","Book","Lunch","Gas","Pharmacy"][i % 8] + ` #${i+1}`,
      category: ["Groceries","Transport","Dining","Utilities","Other","Dining","Transport","Health"][i % 8],
      date: "2026-03-1" + (i % 9),
      amount: Math.random() * 100 + 5
    })), []);
    const totalPages = Math.ceil(data.length / pageSize);
    const pagedData = useMemo(() => data.slice((page - 1) * pageSize, page * pageSize), [data, page]);
    const onAction = (type, item) => {
      console.log(type, item);
    };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="max-w-7xl mx-auto w-full">
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-5 grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
      <Input label="Search" value={search} onValueChange={setSearch} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} startContent={<AdjustmentsHorizontalIcon className="w-4 h-4 text-[var(--color-text)]" />} />
      <Select label="Category" selectedKeys={category ? [category] : []} onSelectionChange={(keys) => setCategory(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", label: "text-[var(--color-text)]" }}>
      {['All','Groceries','Transport','Dining','Utilities','Shopping','Health','Other'].map((c) => (<SelectItem key={c}>{c}</SelectItem>))}
      </Select>
      <DateRangePicker label="Date range" value={range} onChange={setRange} className="rounded-xl" />
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Apply</Button>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]" onPress={() => { setSearch(""); setCategory(""); setRange({ start: null, end: null }); }}>Clear</Button>
      <div className="md:col-span-5 flex flex-wrap gap-2 mt-1">
      {search && <Chip className="rounded-md bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Search: {search}</Chip>}
      {category && <Chip className="rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">Category: {category}</Chip>}
      </div>
      </CardBody>
      </Card>
      </section>
  <section className="max-w-7xl mx-auto w-full">
      <div className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] p-4">
      <Table aria-label="All expenses table" className="bg-transparent">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">ITEM</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CATEGORY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">DATE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
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
      <TableCell className="text-[var(--color-text)]">
      <div className="flex items-center gap-2">
      <Tooltip content="Edit" className="rounded-md bg-[var(--color-surface)] text-[var(--color-text)]">
      <Button isIconOnly size="sm" variant="light" className="rounded-lg" onPress={() => onAction("edit", item)}>
      <PencilIcon className="w-4 h-4 text-[var(--color-text)]" />
      </Button>
      </Tooltip>
      <Tooltip content="Delete" className="rounded-md bg-[var(--color-surface)] text-[var(--color-text)]">
      <Button isIconOnly size="sm" variant="light" className="rounded-lg" onPress={() => onAction("delete", item)}>
      <TrashIcon className="w-4 h-4 text-red-500" />
      </Button>
      </Tooltip>
      </div>
      </TableCell>
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
      </div>
    </div>
  );
}
