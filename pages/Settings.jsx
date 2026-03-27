import { Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader, Input, Select, SelectItem, Switch } from "@heroui/react";
import { useState } from "react";

export default function Settings() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailNotifs, setEmailNotifs] = useState(true);
    const [pushNotifs, setPushNotifs] = useState(false);
    const [digest, setDigest] = useState("Weekly");
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <p className="text-[var(--color-text)] font-semibold">Profile</p>
      </CardHeader>
      <CardBody className="p-5 pt-4 space-y-4">
      <div className="flex items-center gap-4">
      <Avatar name="You" className="w-14 h-14" />
      <Button size="sm" variant="bordered" className="rounded-lg border-[var(--color-border)] text-[var(--color-text)]">Upload avatar</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Full name" value={name} onValueChange={setName} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      <Input label="Email" type="email" value={email} onValueChange={setEmail} classNames={{ inputWrapper: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }} />
      </div>
      </CardBody>
      <CardFooter className="p-5 pt-0 flex justify-end">
      <Button className="rounded-lg bg-[var(--color-primary)] text-[var(--color-text)]">Save profile</Button>
      </CardFooter>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0">
      <p className="text-[var(--color-text)] font-semibold">Notifications</p>
      </CardHeader>
      <CardBody className="p-5 pt-4 space-y-3">
      <Switch isSelected={emailNotifs} onValueChange={setEmailNotifs} size="sm" className="text-[var(--color-text)]">Email notifications</Switch>
      <Switch isSelected={pushNotifs} onValueChange={setPushNotifs} size="sm" className="text-[var(--color-text)]">Push notifications</Switch>
      <Select label="Digest frequency" selectedKeys={digest ? [digest] : []} onSelectionChange={(keys) => setDigest(Array.from(keys)[0] || "")} classNames={{ trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", label: "text-[var(--color-text)]" }}>
      {['Immediate','Daily','Weekly','Monthly'].map((c) => (<SelectItem key={c}>{c}</SelectItem>))}
      </Select>
      </CardBody>
      </Card>

      <Card className="lg:col-span-3 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 pb-0 flex items-center justify-between">
      <div>
      <p className="text-[var(--color-text)] font-semibold">Subscription</p>
      <p className="text-[var(--color-text)]/70 text-sm">Manage your plan and billing</p>
      </div>
      <Badge content="" className="bg-[var(--color-secondary)]/20 border border-[var(--color-secondary)]/30 rounded-md">
      <span className="text-[var(--color-secondary)] text-xs px-2 py-1">Pro</span>
      </Badge>
      </CardHeader>
      <CardBody className="p-5 pt-4">
      <p className="text-[var(--color-text)] text-sm">You are on the Pro plan. Next billing date: Apr 15, 2026.</p>
      </CardBody>
      <CardFooter className="p-5 pt-0 flex gap-2">
      <Button variant="bordered" className="rounded-lg border-[var(--color-border)] text-[var(--color-text)]">Manage billing</Button>
      <Button className="rounded-lg bg-[var(--color-primary)] text-[var(--color-text)]">Upgrade</Button>
      </CardFooter>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
