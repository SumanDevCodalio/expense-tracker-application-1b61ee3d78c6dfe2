

import { Progress, Chip } from "@heroui/react";
        export default function BudgetProgress({ label, value }) {
        return (
            <div className="w-full space-y-2">
    <div className="flex items-center justify-between">
    <span className="text-sm text-[var(--color-text)]">{label}</span>
    <Chip size="sm" className="rounded-md bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{value}%</Chip>
    </div>
    <Progress aria-label={label} value={value} classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
    </div>
        );
        }
