import { Badge, Button, Card, CardBody, CardHeader, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Select, SelectItem, Switch, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Textarea } from "@heroui/react";
import React from "react";

export default function AddExpense() {
    const [amount, setAmount] = React.useState("");
    const [date, setDate] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [merchant, setMerchant] = React.useState("");
    const [notes, setNotes] = React.useState("");
    const [recurring, setRecurring] = React.useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
    const resetForm = () => {
      setAmount("");
      setDate("");
      setCategory("");
      setMerchant("");
      setNotes("");
      setRecurring(false);
    };
    const openConfirm = () => setIsConfirmOpen(true);
    const closeConfirm = () => setIsConfirmOpen(false);
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5;
    const data = React.useMemo(() => (
      [
        {id:1,date:'2026-03-01',merchant:'Whole Foods',category:'Groceries',amount:54.23,status:'cleared'},
        {id:2,date:'2026-03-02',merchant:'Lyft',category:'Transport',amount:18.40,status:'pending'},
        {id:3,date:'2026-03-03',merchant:'Starbucks',category:'Dining',amount:6.75,status:'cleared'},
        {id:4,date:'2026-03-03',merchant:'Amazon',category:'Shopping',amount:32.10,status:'cleared'},
        {id:5,date:'2026-03-04',merchant:'Netflix',category:'Utilities',amount:15.99,status:'cleared'},
        {id:6,date:'2026-03-05',merchant:'Trader Joe\'s',category:'Groceries',amount:27.11,status:'pending'},
        {id:7,date:'2026-03-06',merchant:'Chipotle',category:'Dining',amount:11.25,status:'cleared'}
      ]
    ), []);
    const pages = Math.ceil(data.length / rowsPerPage);
    const paged = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      return data.slice(start, start + rowsPerPage);
    }, [page, rowsPerPage, data]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section className="max-w-3xl mx-auto">
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h2 className="text-[var(--color-text)] text-xl font-semibold">Quick add</h2>
      </CardHeader>
      <CardBody className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
      label="Amount"
      type="number"
      value={amount}
      onValueChange={setAmount}
      placeholder="0.00"
      labelPlacement="outside"
      classNames={{
      inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl",
      input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/50",
      label: "text-[var(--color-text)]"
      }}
      />
      <Input
      label="Date"
      type="date"
      value={date}
      onValueChange={setDate}
      labelPlacement="outside"
      classNames={{
      inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl",
      input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/50",
      label: "text-[var(--color-text)]"
      }}
      />
      <Select
      label="Category"
      selectedKeys={category ? [category] : []}
      onSelectionChange={(keys) => setCategory(Array.from(keys)[0] || "")}
      labelPlacement="outside"
      classNames={{
      trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12",
      popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl",
      label: "text-[var(--color-text)]"
      }}
      >
      {['Groceries','Transport','Dining','Utilities','Shopping','Other'].map((opt) => (
      <SelectItem key={opt}>{opt}</SelectItem>
      ))}
      </Select>
      <Input
      label="Merchant"
      value={merchant}
      onValueChange={setMerchant}
      placeholder="Store or vendor"
      labelPlacement="outside"
      classNames={{
      inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl",
      input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/50",
      label: "text-[var(--color-text)]"
      }}
      />
      <div className="md:col-span-2">
      <Textarea
      label="Notes"
      value={notes}
      onValueChange={setNotes}
      placeholder="Add context..."
      labelPlacement="outside"
      classNames={{
      inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl",
      input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/50",
      label: "text-[var(--color-text)]"
      }}
      />
      </div>
      <div className="flex items-center justify-between md:col-span-2">
      <div className="flex items-center gap-3">
      <Switch isSelected={recurring} onValueChange={setRecurring} size="sm">
      <span className="text-sm text-[var(--color-text)]">Recurring</span>
      </Switch>
      </div>
      <div className="flex gap-3">
      <Button onPress={openConfirm} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] px-6">Save expense</Button>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)] px-6" onPress={resetForm}>Reset</Button>
      </div>
      </div>
      </CardBody>
      </Card>

      <Modal isOpen={isConfirmOpen} onClose={closeConfirm} classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-2xl" }}>
      <ModalContent>
      <ModalHeader className="text-[var(--color-text)]">Expense saved</ModalHeader>
      <ModalBody>
      <p className="text-[var(--color-text)] text-sm">Your expense has been saved successfully.</p>
      </ModalBody>
      <ModalFooter>
      <Button onPress={closeConfirm} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Close</Button>
      </ModalFooter>
      </ModalContent>
      </Modal>
      </section>
  <section className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Recent activity</h3>
      <Button className="rounded-xl bg-[var(--color-secondary)] text-[var(--color-text)]">View all</Button>
      </div>
      <Table aria-label="Recent expenses" className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">DATE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">MERCHANT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CATEGORY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">AMOUNT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">STATUS</TableColumn>
      </TableHeader>
      <TableBody>
      {paged.map((item) => (
      <TableRow key={item.id}>
      <TableCell className="text-[var(--color-text)]">{item.date}</TableCell>
      <TableCell className="text-[var(--color-text)]">{item.merchant}</TableCell>
      <TableCell className="text-[var(--color-text)]">{item.category}</TableCell>
      <TableCell className="text-[var(--color-text)]">{`$${item.amount.toFixed(2)}`}</TableCell>
      <TableCell className="text-[var(--color-text)]">
      <Badge className={`rounded-full px-2 py-0.5 ${item.status === 'cleared' ? 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]' : 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'}`}>{item.status}</Badge>
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
