import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Chip, Image, Textarea } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ExpenseDetail() {
    const [localNotes, setLocalNotes] = React.useState("");
    const [labels, setLabels] = React.useState(["coffee","team"]);
    const addLabel = (l) => setLabels((prev) => Array.from(new Set([...prev, l])));
    const clearLabels = () => setLabels([]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section className="flex items-center gap-2 text-sm">
      <Link to="/" className="flex items-center gap-1 text-[var(--color-text)] hover:text-[var(--color-primary-light)] transition-colors">
      <HomeIcon className="w-4 h-4 text-[inherit]" />
      <span className="text-[inherit]">Home</span>
      </Link>
      <ChevronRightIcon className="w-4 h-4 text-[var(--color-text)]/60" />
      <Link to="/expenses" className="text-[var(--color-text)] hover:text-[var(--color-primary-light)] transition-colors">Expenses</Link>
      <ChevronRightIcon className="w-4 h-4 text-[var(--color-text)]/60" />
      <span className="text-[var(--color-text)]/80">Detail</span>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)] flex items-center justify-between">
      <div>
      <h3 className="text-[var(--color-text)] text-xl font-semibold">$84.37</h3>
      <p className="text-[var(--color-text)]/80 text-sm">Starbucks • 2026-03-05</p>
      </div>
      <Badge className="rounded-full bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] px-2 py-0.5">cleared</Badge>
      </CardHeader>
      <CardBody className="p-5 space-y-4">
      <div className="flex flex-wrap gap-2">
      <Chip className="rounded-full bg-[var(--color-background)] text-[var(--color-text)]">Dining</Chip>
      <Chip className="rounded-full bg-[var(--color-background)] text-[var(--color-text)]">Card • **** 4242</Chip>
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div>
      <p className="text-[var(--color-text)]/70 text-xs">Subtotal</p>
      <p className="text-[var(--color-text)] text-sm font-medium">$79.00</p>
      </div>
      <div>
      <p className="text-[var(--color-text)]/70 text-xs">Tax</p>
      <p className="text-[var(--color-text)] text-sm font-medium">$5.37</p>
      </div>
      </div>
      </CardBody>
      <CardFooter className="p-5 border-t border-[var(--color-border)] flex gap-3">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Edit</Button>
      <Button className="rounded-xl" color="danger">Delete</Button>
      </CardFooter>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h4 className="text-[var(--color-text)] text-base font-semibold">Receipt</h4>
      </CardHeader>
      <CardBody className="p-4">
      <Image removeWrapper src="https://pixabay.com/get/g32cd3de4076b640b3d73173eb414590394e8b17dda99a0219f34aef4d77259cb8b6a5c2eab649b48514a760374469d4e4c9b2c8ba864096d7a0934bbce946289_640.jpg" alt="receipt" className="rounded-xl object-cover w-full" />
      </CardBody>
      </Card>
      </div>
      </section>

  <section>
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h4 className="text-[var(--color-text)] text-base font-semibold">Notes & labels</h4>
      </CardHeader>
      <CardBody className="p-5 space-y-4">
      <Textarea
      label="Notes"
      value={localNotes}
      onValueChange={setLocalNotes}
      placeholder="Add notes..."
      labelPlacement="outside"
      classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60", label:"text-[var(--color-text)]" }}
      />
      <div className="flex flex-wrap gap-2">
      {labels.map((l, i) => (
      <Chip key={`${l}-${i}`} className="rounded-full bg-[var(--color-background)] text-[var(--color-text)]">{l}</Chip>
      ))}
      </div>
      <div className="flex gap-2">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onPress={() => addLabel('review')}>Add "review"</Button>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]" onPress={clearLabels}>Clear labels</Button>
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
