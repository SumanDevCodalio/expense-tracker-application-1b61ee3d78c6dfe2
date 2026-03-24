import { AdjustmentsHorizontalIcon, CheckIcon, FireIcon, StarIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Image, Progress } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">Track expenses effortlessly</h1>
      <p className="text-base md:text-lg text-[var(--color-text)]/90">Stay on top of your spending with real-time insights, smart budgets, and beautiful reports. Organize receipts, categorize purchases, and hit your financial goals faster.</p>
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
      <Link to="/add-expense">
      <Button size="md" className="rounded-full bg-[var(--color-background)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-surface)] shadow-primary px-8 transition-all duration-200 hover:scale-105 active:scale-95">Add expense</Button>
      </Link>
      <Link to="/reports">
      <Button size="md" variant="bordered" className="rounded-full border-[var(--color-text)] text-[var(--color-text)] font-semibold hover:bg-[var(--color-background)]/10 px-8 transition-all duration-200 hover:scale-105 active:scale-95">View reports</Button>
      </Link>
      </div>
      <div className="pt-2">
      <p className="text-sm text-[var(--color-text)]/80">No sign-up required. Start logging in seconds.</p>
      </div>
      </div>
      <Card className="bg-[var(--color-background)]/30 border border-[var(--color-border)] rounded-2xl backdrop-blur-xl">
      <CardBody className="p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
      <Image removeWrapper src="https://pixabay.com/get/g5cf9b7218f17721022265a5574f8e10b94aee07bd4ab9e41770aeb55f4c9e55aa41129d1ef380cf90589113afbf366ad_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      <Image removeWrapper src="https://pixabay.com/get/g634dbf8fbc88c4fdffbbe35f5ab1a0b4991ec9f3708722db563749573ca5b7d1e6903e5bedde0d467d0e909722298aff74395493ec29c57f18ad671520f10d3d_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      <Image removeWrapper src="https://pixabay.com/get/g44a14f05ed9650f156023a73af6f5a7dbf75c5f4a2cfa8bcf7a848769b295cafddc6e254ea782654eec660cdf1a09567253a225c26fae61b428ef8b6b5ec8bdf_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      <Image removeWrapper src="https://pixabay.com/get/g947b3882c1ad1dcf4d6129fecd923a285fc6c4ffb077e22d7bc80b7a5e67223d787e11739a2986b711756af06028a2a2_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      <Image removeWrapper src="https://pixabay.com/get/ge184422c3d962d178c6ee2070540d8f6a55ebaefb6b5d9895246e883880d09f6eb78cb66cf0d6ac4402007ef52632b16_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      <Image removeWrapper src="https://pixabay.com/get/g4c5de62eb5802be7b4279ebb694d35407b3e376c0d6e0769b2a948655bf86adface11f0cb683c8d6712fb5dd81966cf8_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      <Image removeWrapper src="https://pixabay.com/get/g45538f9fc9b7d7c5bb114a7b8750e79e8edfcfa1669acbabbf78a9ab952bda74db035a496e469278bb8da5e051fc74c774561003f53aa265a767bb05d1cccae5_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      <Image removeWrapper src="https://pixabay.com/get/g76d5dcc4511f8954a3a9a9ea5d1cfaa2aa304c45dba59cf8ff381468e872426b73426f6759f9b38e3c528791492f1d57f66ceae6dd0426281cbd1871b1097093_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      <Image removeWrapper src="https://pixabay.com/get/gd37ed770c83a892c89c089336d76c1d1ea6889e71a182554e0421bcfcd0cc1ec668a645aa24506e99386fe757d298f5e708c2e418c0d2c32219d9574f2b91f72_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      <Image removeWrapper src="https://pixabay.com/get/g990bb4a6f4dd782e0661b554fdcc7abbc95da900f7676b1eab1388d241657f2485e656b7fba5118e5125fdb409e20c5ac04b73e7ec3c1391b36c9b732fdb8007_640.jpg" alt="finance" className="rounded-xl object-cover h-24 w-full" />
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-4">Key features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-200">
      <CardHeader className="flex items-center gap-3 p-4">
      <CheckIcon className="w-6 h-6 text-[var(--color-primary-light)]" />
      <h3 className="text-[var(--color-text)] text-lg font-semibold">Fast logging</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <p className="text-[var(--color-text)] text-sm">Add expenses in seconds with smart defaults, categories, and receipt capture.</p>
      </CardBody>
      <CardFooter className="p-4 pt-0">
      <Link to="/add-expense">
      <Button className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)] px-5 py-2">Try it</Button>
      </Link>
      </CardFooter>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-200">
      <CardHeader className="flex items-center gap-3 p-4">
      <AdjustmentsHorizontalIcon className="w-6 h-6 text-[var(--color-secondary-light)]" />
      <h3 className="text-[var(--color-text)] text-lg font-semibold">Flexible budgets</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <p className="text-[var(--color-text)] text-sm">Create monthly or custom budgets and track progress automatically.</p>
      </CardBody>
      <CardFooter className="p-4 pt-0">
      <Link to="/budgets">
      <Button variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)] px-5 py-2">Explore</Button>
      </Link>
      </CardFooter>
      </Card>

      <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-200">
      <CardHeader className="flex items-center gap-3 p-4">
      <FireIcon className="w-6 h-6 text-[var(--color-accent-light)]" />
      <h3 className="text-[var(--color-text)] text-lg font-semibold">Insightful reports</h3>
      </CardHeader>
      <CardBody className="p-4 pt-0">
      <p className="text-[var(--color-text)] text-sm">Break down spending by category, time, and vendor to find savings.</p>
      </CardBody>
      <CardFooter className="p-4 pt-0">
      <Link to="/reports">
      <Button className="rounded-full bg-[var(--color-accent)] text-[var(--color-text)] px-5 py-2">View</Button>
      </Link>
      </CardFooter>
      </Card>
      </div>
      </section>
  <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[{label:'This month', value:'$1,240', pct:62, color:'var(--color-primary)'},{label:'Groceries', value:'$320', pct:40, color:'var(--color-secondary)'},{label:'Dining out', value:'$180', pct:30, color:'var(--color-accent)'}].map((s, idx) => (
      <Card key={idx} className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-5 space-y-3">
      <div className="flex items-center justify-between">
      <span className="text-sm text-[var(--color-text)]/80">{s.label}</span>
      <span className="text-xs text-[var(--color-text)]/60">budget</span>
      </div>
      <div className="flex items-center gap-2">
      <StarIcon className="w-5 h-5 text-[var(--color-text)]/60" />
      <p className="text-lg font-semibold text-[var(--color-text)]">{s.value}</p>
      </div>
      <Progress value={s.pct} aria-label={`${s.label} progress`} className="max-w-full" classNames={{indicator:`bg-[${s.color}] rounded-lg`, track:"bg-[var(--color-border)] rounded-lg"}}/>
      <div className="flex items-center justify-between">
      <span className="text-xs text-[var(--color-text)]/70">{s.pct}% used</span>
      <Badge className="rounded-full bg-[var(--color-background)] text-[var(--color-text)] px-2 py-0.5">{100 - s.pct}% left</Badge>
      </div>
      </CardBody>
      </Card>
      ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-2">
      <Link to="/add-expense">
      <Button size="md" className="rounded-full bg-[var(--color-primary)] text-[var(--color-text)] px-8">Log your first expense</Button>
      </Link>
      <Link to="/expenses">
      <Button size="md" variant="bordered" className="rounded-full border-[var(--color-border)] text-[var(--color-text)] px-8">Browse expenses</Button>
      </Link>
      </div>
      </section>
      </div>
    </div>
  );
}
