import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardBody, CardHeader, Chip, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@heroui/react";
import { useState } from "react";

export default function ExpenseDetail() {
    const [note, setNote] = useState("");
    const [deleteOpen, setDeleteOpen] = useState(false);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0 flex items-center justify-between">
      <div>
      <h2 className="text-[var(--color-text)] font-semibold text-lg">Groceries - Fresh Mart</h2>
      <p className="text-[var(--color-text)]/70 text-sm">Mar 18, 2026 • 12:45 PM</p>
      </div>
      <Chip className="rounded-md bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Groceries</Chip>
      </CardHeader>
      <CardBody className="p-5 pt-4 space-y-4">
      <div className="flex items-center justify-between">
      <span className="text-sm text-[var(--color-text)]/70">Amount</span>
      <span className="text-xl font-bold text-[var(--color-text)]">$54.12</span>
      </div>
      <div className="flex items-center justify-between">
      <span className="text-sm text-[var(--color-text)]/70">Payment method</span>
      <span className="text-sm text-[var(--color-text)]">Visa **** 1234</span>
      </div>
      <div className="flex items-center justify-between">
      <span className="text-sm text-[var(--color-text)]/70">Status</span>
      <Badge content="" className="bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/30 rounded-md">
      <span className="text-[var(--color-secondary)] text-xs px-2 py-1">Cleared</span>
      </Badge>
      </div>
      <div className="flex items-center gap-2 pt-2">
      {["Work","Reimbursable"].map((t) => (<Chip key={t} className="rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">{t}</Chip>))}
      </div>
      <div className="flex gap-2 pt-2">
      <Button size="sm" className="rounded-lg bg-[var(--color-primary)] text-[var(--color-text)]" startContent={<PencilIcon className="w-4 h-4 text-[var(--color-text)]" />}>Edit</Button>
      <Button size="sm" variant="bordered" className="rounded-lg border-[var(--color-border)] text-red-500" startContent={<TrashIcon className="w-4 h-4 text-red-500" />} onPress={() => setDeleteOpen(true)}>Delete</Button>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <CardHeader className="p-5 pb-0">
      <p className="text-[var(--color-text)] font-semibold">Receipt</p>
      </CardHeader>
      <CardBody className="p-0">
      <Image removeWrapper alt="Receipt preview" src="https://pixabay.com/get/g9c75a7cd6e3d95babaade45de628dad863b9f18fc6b801eadfa350c3d4bc7446b54b40c9540d5b9562e08b9a34e8c95aea72d139a442957cd8dbf404b2deb6af_640.jpg" className="w-full h-64 object-cover" />
      </CardBody>
      </Card>

      <Card className="lg:col-span-3 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <p className="text-[var(--color-text)] font-semibold">Notes & activity</p>
      </CardHeader>
      <CardBody className="p-5 pt-4 space-y-3">
      <Textarea label="Add a note" value={note} onValueChange={setNote} minRows={3} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <div className="flex justify-end">
      <Button size="sm" className="rounded-lg bg-[var(--color-primary)] text-[var(--color-text)]" onPress={() => setNote("")}>Save note</Button>
      </div>
      </CardBody>
      </Card>

      <Modal isOpen={deleteOpen} onClose={() => setDeleteOpen(false)} classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-2xl" }}>
      <ModalContent>
      <ModalHeader>Delete expense</ModalHeader>
      <ModalBody>
      <p className="text-[var(--color-text)]">Are you sure you want to delete this expense? This action cannot be undone.</p>
      </ModalBody>
      <ModalFooter>
      <Button variant="light" className="rounded-lg text-[var(--color-text)]" onPress={() => setDeleteOpen(false)}>Cancel</Button>
      <Button className="rounded-lg bg-red-500 text-white" onPress={() => { setDeleteOpen(false); }}>Delete</Button>
      </ModalFooter>
      </ModalContent>
      </Modal>
      </div>
      </section>

      </div>
    </div>
  );
}
