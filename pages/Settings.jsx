import { Avatar, Badge, Button, Card, CardBody, CardHeader, Input, Select, SelectItem, Switch } from "@heroui/react";
import React from "react";

export default function Settings() {
    const [fullName, setFullName] = React.useState("Alex Jordan");
    const [email, setEmail] = React.useState("alex@example.com");
    const [password, setPassword] = React.useState("");
    const [currency, setCurrency] = React.useState('USD');
    const [weeklyDigest, setWeeklyDigest] = React.useState(true);
    const [autoCategorize, setAutoCategorize] = React.useState(true);
    const saveProfile = () => {};
    const savePreferences = () => {};
    const [pushEnabled, setPushEnabled] = React.useState(true);
    const [emailEnabled, setEmailEnabled] = React.useState(false);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)] flex items-center gap-4">
      <Avatar src="https://i.pravatar.cc/150?img=12" className="w-12 h-12" />
      <div>
      <h3 className="text-[var(--color-text)] text-base font-semibold">Profile</h3>
      <p className="text-[var(--color-text)]/80 text-xs">Update your info</p>
      </div>
      </CardHeader>
      <CardBody className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Full name" value={fullName} onValueChange={setFullName} labelPlacement="outside" classNames={{inputWrapper:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input:"text-[var(--color-text)]", label:"text-[var(--color-text)]"}} />
      <Input label="Email" type="email" value={email} onValueChange={setEmail} labelPlacement="outside" classNames={{inputWrapper:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input:"text-[var(--color-text)]", label:"text-[var(--color-text)]"}} />
      <Input label="Password" type="password" value={password} onValueChange={setPassword} labelPlacement="outside" classNames={{inputWrapper:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input:"text-[var(--color-text)]", label:"text-[var(--color-text)]"}} />
      <div className="flex items-end">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] w-full" onPress={saveProfile}>Save changes</Button>
      </div>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h3 className="text-[var(--color-text)] text-base font-semibold">Preferences</h3>
      </CardHeader>
      <CardBody className="p-5 space-y-4">
      <Select label="Currency" selectedKeys={currency ? [currency] : []} onSelectionChange={(keys)=>setCurrency(Array.from(keys)[0]||"")} labelPlacement="outside" classNames={{trigger:"bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12", popoverContent:"bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label:"text-[var(--color-text)]"}}>
      {['USD','EUR','GBP','JPY'].map((opt)=> (<SelectItem key={opt}>{opt}</SelectItem>))}
      </Select>
      <Switch isSelected={weeklyDigest} onValueChange={setWeeklyDigest} size="sm">
      <span className="text-sm text-[var(--color-text)]">Weekly email digest</span>
      </Switch>
      <Switch isSelected={autoCategorize} onValueChange={setAutoCategorize} size="sm">
      <span className="text-sm text-[var(--color-text)]">Auto-categorize expenses</span>
      </Switch>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] w-full" onPress={savePreferences}>Save preferences</Button>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)]">
      <h3 className="text-[var(--color-text)] text-base font-semibold">Notifications</h3>
      </CardHeader>
      <CardBody className="p-5 space-y-4">
      <Switch isSelected={pushEnabled} onValueChange={setPushEnabled} size="sm">
      <span className="text-sm text-[var(--color-text)]">Push notifications</span>
      </Switch>
      <Switch isSelected={emailEnabled} onValueChange={setEmailEnabled} size="sm">
      <span className="text-sm text-[var(--color-text)]">Email notifications</span>
      </Switch>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] w-fit">Save</Button>
      </CardBody>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardHeader className="p-5 border-b border-[var(--color-border)] flex items-center justify-between">
      <h3 className="text-[var(--color-text)] text-base font-semibold">Subscription</h3>
      <Badge className="rounded-full bg-[var(--color-background)] text-[var(--color-text)] px-2 py-0.5">Free</Badge>
      </CardHeader>
      <CardBody className="p-5 space-y-3">
      <p className="text-[var(--color-text)] text-sm">Upgrade to Pro for unlimited exports, custom reports, and priority support.</p>
      <Button className="rounded-xl bg-[var(--color-accent)] text-[var(--color-text)] w-full">Upgrade</Button>
      </CardBody>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
