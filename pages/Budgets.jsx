import { Button, Card, CardBody, CardHeader, Chip, DatePicker, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Progress, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { useMemo, useState } from "react";

export default function Budgets() {
    const [open, setOpen] = useState(false);
    const [bName, setBName] = useState("");
    const [bAmount, setBAmount] = useState("");
    const [bCategory, setBCategory] = useState("");
    const [bDate, setBDate] = useState(new Date());
    const [page, setPage] = useState(1);
    const pageSize = 8;
    const data = useMemo(() => Array.from({length: 20}).map((_, i) => ({
      id: i + 1,
      name: ["Groceries","Transport","Dining","Utilities","Shopping","Health"][i % 6] + " Budget",
      category: ["Groceries","Transport","Dining","Utilities","Shopping","Health"][i % 6],
      usage: Math.floor(Math.random()*100)
    })), []);
    const totalPages = Math.ceil(data.length / pageSize);
    const pagedData = useMemo(() => data.slice((page - 1) * pageSize, page * pageSize), [data, page]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="max-w-7xl mx-auto w-full">
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0 flex items-center justify-between">
      <div>
      <h2 className="text-[var(--color-text)] font-semibold text-lg">Budgets</h2>
      <p className="text-[var(--color-text)]/70 text-sm">Create and manage spending limits by category</p>
      </div>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onPress={() => setOpen(true)}>New budget</Button>
      </CardHeader>
      <CardBody className="p-5 pt-4">
      <div className="flex flex-wrap gap-2">
      {["On track","Over budget","Needs attention"].map((t, idx) => (
      <Chip key={t} className={`rounded-md ${idx===0? 'bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]': idx===1? 'bg-[var(--color-accent)]/15 text-[var(--color-accent)]':'bg-[var(--color-primary)]/15 text-[var(--color-primary)]'}`}>{t}</Chip>
      ))}
      </div>
      </CardBody>
      </Card>

      <Modal isOpen={open} onClose={() => setOpen(false)} classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-2xl" }}>
      <ModalContent>
      <ModalHeader>Create budget</ModalHeader>
      <ModalBody className="space-y-3">
      <Input label="Name" value={bName} onValueChange={setBName} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <Input label="Amount" type="number" value={bAmount} onValueChange={setBAmount} startContent={<span className="text-[var(--color-text)]">$</span>} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <Select label="Category" selectedKeys={bCategory ? [bCategory] : []} onSelectionChange={(keys) => setBCategory(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", label: "text-[var(--color-text)]" }}>
      {['Groceries','Transport','Dining','Utilities','Shopping','Health','Other'].map((c) => (<SelectItem key={c}>{c}</SelectItem>))}
      </Select>
      <DatePicker label="Reset date" value={bDate} onChange={setBDate} className="rounded-xl" />
      </ModalBody>
      <ModalFooter>
      <Button variant="light" className="rounded-lg text-[var(--color-text)]" onPress={() => setOpen(false)}>Cancel</Button>
      <Button className="rounded-lg bg-[var(--color-primary)] text-[var(--color-text)]" onPress={() => setOpen(false)}>Create</Button>
      </ModalFooter>
      </ModalContent>
      </Modal>
      </section>
  <section className="max-w-7xl mx-auto w-full mt-4">
      <div className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] p-4">
      <Table aria-label="Budgets table" className="bg-transparent">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">NAME</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CATEGORY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">USAGE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody items={pagedData}>
      {(item) => (
      <TableRow key={item.id} className="hover:bg-[var(--color-background)]/60">
      <TableCell className="text-[var(--color-text)] font-medium">{item.name}</TableCell>
      <TableCell className="text-[var(--color-text)]"><Chip size="sm" className="rounded-md bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{item.category}</Chip></TableCell>
      <TableCell className="text-[var(--color-text)]">
      <div className="flex items-center gap-3">
      <Progress value={item.usage} classNames={{ indicator: item.usage>90 ? "bg-[var(--color-accent)]" : "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
      <span className={`text-sm ${item.usage>90? 'text-[var(--color-accent)]': 'text-[var(--color-text)]'}`}>{item.usage}%</span>
      </div>
      </TableCell>
      <TableCell className="text-[var(--color-text)]">
      <Button size="sm" variant="light" className="rounded-lg text-[var(--color-primary)]">View</Button>
      </TableCell>
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
