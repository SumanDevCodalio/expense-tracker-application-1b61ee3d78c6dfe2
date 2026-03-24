import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardBody, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Pagination, Progress, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React from "react";

export default function Expenses() {
    const [search, setSearch] = React.useState("");
    const [category, setCategory] = React.useState("All");
    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;
    const data = React.useMemo(() => (
      Array.from({length: 36}).map((_, i) => ({
        id: i+1,
        date: `2026-03-${String(((i%28)+1)).padStart(2,'0')}`,
        merchant: ['Whole Foods','Target','Amazon','Uber','Starbucks'][i%5],
        category: ['Groceries','Shopping','Transport','Dining','Utilities'][i%5],
        amount: Math.round((Math.random()*95+5)*100)/100
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
          <section>
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-4 grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
      <Input
      aria-label="Search"
      value={search}
      onValueChange={setSearch}
      placeholder="Search..."
      classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60" }}
      startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
      />
      <Select
      aria-label="Category"
      selectedKeys={category ? [category] : []}
      onSelectionChange={(keys) => setCategory(Array.from(keys)[0] || "")}
      classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}
      >
      {['All','Groceries','Transport','Dining','Utilities','Shopping','Other'].map((opt) => (
      <SelectItem key={opt}>{opt}</SelectItem>
      ))}
      </Select>
      <Input
      aria-label="From"
      type="date"
      value={from}
      onValueChange={setFrom}
      classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]" }}
      />
      <Input
      aria-label="To"
      type="date"
      value={to}
      onValueChange={setTo}
      classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]" }}
      />
      <div className="flex gap-2">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Apply</Button>
      <Dropdown>
      <DropdownTrigger>
      <Button className="rounded-xl bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)]">
      <AdjustmentsHorizontalIcon className="w-4 h-4 text-[var(--color-text)] mr-2" />More
      </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="More filters" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
      <DropdownItem key="amount-asc" className="text-[var(--color-text)]">Amount: Low to High</DropdownItem>
      <DropdownItem key="amount-desc" className="text-[var(--color-text)]">Amount: High to Low</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </div>
      </CardBody>
      </Card>
      </section>
  <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[{title:'Total spent', value:'$2,310', pct:58},{title:'Transactions', value:'124', pct:62},{title:'Avg/Day', value:'$74', pct:48}].map((s, idx) => (
      <Card key={idx} className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-5 space-y-3">
      <div className="flex items-center justify-between">
      <h4 className="text-[var(--color-text)] text-base font-semibold">{s.title}</h4>
      <Badge className="rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-0.5">{s.pct}%</Badge>
      </div>
      <p className="text-[var(--color-text)] text-xl font-bold">{s.value}</p>
      <Progress value={s.pct} aria-label={`${s.title} progress`} className="max-w-full" classNames={{indicator:"bg-[var(--color-primary)] rounded-lg", track:"bg-[var(--color-border)] rounded-lg"}} />
      </CardBody>
      </Card>
      ))}
      </div>
      </section>
  <section>
      <Table aria-label="All expenses" className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">DATE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">MERCHANT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CATEGORY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">AMOUNT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {paged.map((item) => (
      <TableRow key={item.id}>
      <TableCell className="text-[var(--color-text)]">{item.date}</TableCell>
      <TableCell className="text-[var(--color-text)]">{item.merchant}</TableCell>
      <TableCell className="text-[var(--color-text)]">
      <Chip size="sm" className="rounded-full bg-[var(--color-background)] text-[var(--color-text)]">{item.category}</Chip>
      </TableCell>
      <TableCell className="text-[var(--color-text)]">{`$${item.amount.toFixed(2)}`}</TableCell>
      <TableCell className="text-[var(--color-text)]">
      <Dropdown>
      <DropdownTrigger>
      <Button size="sm" className="rounded-xl bg-[var(--color-background)] border border-[var(--color-border)]">Actions</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
      <DropdownItem key="view" className="text-[var(--color-text)]">View</DropdownItem>
      <DropdownItem key="edit" className="text-[var(--color-text)]">Edit</DropdownItem>
      <DropdownItem key="delete" className="text-[var(--color-text)]" color="danger">Delete</DropdownItem>
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
