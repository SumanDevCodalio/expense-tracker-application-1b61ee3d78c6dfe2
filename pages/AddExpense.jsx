import { Button, Card, CardBody, CardFooter, CardHeader, Chip, DatePicker, Input, Select, SelectItem, Switch, Textarea } from "@heroui/react";
import { useState } from "react";

export default function AddExpense() {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const [recurring, setRecurring] = useState(false);
    const [labels, setLabels] = useState([]);
    const [receipt, setReceipt] = useState(null);
    const handleSubmit = () => {
      // stub submit
      console.log({ title, amount, category, date, notes, recurring, labels, receipt });
    };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <h2 className="text-[var(--color-text)] font-semibold text-lg">Expense details</h2>
      </CardHeader>
      <CardBody className="p-5 pt-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Title" value={title} onValueChange={setTitle} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <Input label="Amount" type="number" value={amount} onValueChange={setAmount} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} startContent={<span className="text-[var(--color-text)]">$</span>} />
      <Select label="Category" selectedKeys={category ? [category] : []} onSelectionChange={(keys) => setCategory(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", label: "text-[var(--color-text)]" }}>
      {['Groceries','Transport','Dining','Utilities','Shopping','Health','Other'].map((c) => (<SelectItem key={c}>{c}</SelectItem>))}
      </Select>
      <DatePicker label="Date" value={date} onChange={setDate} className="rounded-xl" />
      </div>
      <Textarea label="Notes" value={notes} onValueChange={setNotes} minRows={3} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <div className="flex items-center justify-between">
      <Switch isSelected={recurring} onValueChange={setRecurring} size="sm" className="text-[var(--color-text)]">Recurring expense</Switch>
      <div className="flex items-center gap-2">
      {labels.map((l) => (<Chip key={l} className="rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">{l}</Chip>))}
      </div>
      </div>
      </CardBody>
      <CardFooter className="p-5 pt-0 flex justify-end gap-2">
      <Button variant="bordered" className="rounded-xl text-[var(--color-text)] border-[var(--color-border)]">Cancel</Button>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onPress={handleSubmit}>Save expense</Button>
      </CardFooter>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <h3 className="text-[var(--color-text)] font-semibold">Attachments</h3>
      </CardHeader>
      <CardBody className="p-5 pt-4 space-y-4">
      <Input type="file" label="Upload receipt" onChange={(e) => setReceipt(e.target.files?.[0] || null)} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", label: "text-[var(--color-text)]" }} />
      <Select label="Labels" selectionMode="multiple" selectedKeys={new Set(labels)} onSelectionChange={(keys) => setLabels(Array.from(keys))} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", label: "text-[var(--color-text)]" }}>
      {['Work','Personal','Reimbursable','Subscription'].map((c) => (<SelectItem key={c}>{c}</SelectItem>))}
      </Select>
      {receipt && (
      <div className="rounded-xl p-3 bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-[var(--color-text)] text-sm">{receipt.name}</p>
      </div>
      )}
      </CardBody>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
