import { Badge, Button, Card, CardBody, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Pagination, Progress, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React from "react";

export default function Budgets() {
    const [newOpen, setNewOpen] = React.useState(false);
    const [bName, setBName] = React.useState("");
    const [bLimit, setBLimit] = React.useState("");
    const [bCategory, setBCategory] = React.useState("");
    const [budgets, setBudgets] = React.useState([
      {id:1, name:'Groceries', category:'Groceries', limit:400, spent:260},
      {id:2, name:'Dining out', category:'Dining', limit:200, spent:140},
      {id:3, name:'Transport', category:'Transport', limit:120, spent:66}
    ]);
    const createBudget = () => {
      if(!bName || !bLimit || !bCategory) return;
      setBudgets((prev)=>[
        ...prev,
        {id: prev.length+1, name:bName, category:bCategory, limit: parseFloat(bLimit||0), spent: 0}
      ]);
      setBName("");
      setBLimit("");
      setBCategory("");
      setNewOpen(false);
    };
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 6;
    const data = React.useMemo(() => (
      Array.from({length: 14}).map((_, i) => ({
        id: i+1,
        name: ['Groceries','Dining','Transport','Utilities','Shopping','Healthcare','Travel'][i%7],
        category: ['Groceries','Dining','Transport','Utilities','Shopping','Healthcare','Travel'][i%7],
        limit: [400,200,120,180,250,150,500][i%7],
        spent: Math.round(Math.random()*0.9 * [400,200,120,180,250,150,500][i%7])
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
      <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">Budgets overview</h3>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onPress={() => setNewOpen(true)}>New budget</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {budgets.map((b) => (
      <Card key={b.id} className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 flex items-center justify-between">
      <span className="text-[var(--color-text)] font-medium">{b.name}</span>
      <Badge className="rounded-full bg-[var(--color-background)] text-[var(--color-text)] px-2 py-0.5">{b.category}</Badge>
      </CardHeader>
      <CardBody className="p-5 space-y-2">
      <div className="flex items-center justify-between">
      <span className="text-[var(--color-text)]/70 text-sm">{`$${b.spent.toFixed(2)} of $${b.limit.toFixed(2)}`}</span>
      <span className="text-[var(--color-text)] text-sm font-semibold">{Math.round((b.spent/b.limit)*100)}%</span>
      </div>
      <Progress value={(b.spent/b.limit)*100} className="max-w-full" classNames={{indicator:"bg-[var(--color-secondary)] rounded-lg", track:"bg-[var(--color-border)] rounded-lg"}} />
      </CardBody>
      </Card>
      ))}
      </div>

      <Modal isOpen={newOpen} onClose={() => setNewOpen(false)} classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-2xl" }}>
      <ModalContent>
      <ModalHeader className="text-[var(--color-text)]">Create budget</ModalHeader>
      <ModalBody className="space-y-3">
      <Input label="Name" value={bName} onValueChange={setBName} labelPlacement="outside" classNames={{inputWrapper:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input:"text-[var(--color-text)]", label:"text-[var(--color-text)]"}} />
      <Input label="Limit" type="number" value={bLimit} onValueChange={setBLimit} labelPlacement="outside" classNames={{inputWrapper:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input:"text-[var(--color-text)]", label:"text-[var(--color-text)]"}} />
      <Select label="Category" selectedKeys={bCategory ? [bCategory] : []} onSelectionChange={(keys)=>setBCategory(Array.from(keys)[0]||"")} labelPlacement="outside" classNames={{trigger:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent:"bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label:"text-[var(--color-text)]"}}>
      {['Groceries','Transport','Dining','Utilities','Shopping','Other'].map((opt)=> (
      <SelectItem key={opt}>{opt}</SelectItem>
      ))}
      </Select>
      </ModalBody>
      <ModalFooter>
      <Button variant="bordered" className="rounded-xl border-[var(--color-border)] text-[var(--color-text)]" onPress={()=>setNewOpen(false)}>Cancel</Button>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onPress={createBudget}>Create</Button>
      </ModalFooter>
      </ModalContent>
      </Modal>
      </section>
  <section>
      <Table aria-label="All budgets" className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl overflow-hidden">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">NAME</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CATEGORY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">USED</TableColumn>
      <TableColumn className="text-[var(--color-text)]">REMAINING</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {paged.map((b) => {
      const pct = Math.round((b.spent/b.limit)*100);
      return (
      <TableRow key={b.id}>
      <TableCell className="text-[var(--color-text)]">{b.name}</TableCell>
      <TableCell className="text-[var(--color-text)]">{b.category}</TableCell>
      <TableCell className="text-[var(--color-text)]">
      <div className="flex items-center gap-3 w-56">
      <Progress value={pct} className="flex-1" classNames={{indicator:"bg-[var(--color-secondary)] rounded-lg", track:"bg-[var(--color-border)] rounded-lg"}} />
      <span className="text-xs text-[var(--color-text)]/80 w-10 text-right">{pct}%</span>
      </div>
      </TableCell>
      <TableCell className="text-[var(--color-text)]">{`$${(b.limit - b.spent).toFixed(2)}`}</TableCell>
      <TableCell className="text-[var(--color-text)]">
      <Dropdown>
      <DropdownTrigger>
      <Button size="sm" className="rounded-xl bg-[var(--color-background)] border border-[var(--color-border)]">Actions</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl" }}>
      <DropdownItem key="view" className="text-[var(--color-text)]">View</DropdownItem>
      <DropdownItem key="edit" className="text-[var(--color-text)]">Edit</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </TableCell>
      </TableRow>
      );
      })}
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
