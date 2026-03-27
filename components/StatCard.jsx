

import { Card, CardHeader, CardBody, Progress, Badge } from "@heroui/react";
        export default function StatCard({ title, subtitle, value, target, progress, badge }) {
        return (
            <Card className="bg-[var(--color-surface)]/80 border border-[var(--color-border)] rounded-2xl shadow-md hover:shadow-primary transition-shadow duration-200">
    <CardHeader className="flex items-center justify-between p-4">
    <div className="flex flex-col">
    <span className="text-sm text-[var(--color-text)]/70">{subtitle}</span>
    <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
    </div>
    {badge && (
    <Badge color="warning" content="" className="bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-xl">
    <span className="text-xs text-[var(--color-accent)] px-2 py-1">{badge}</span>
    </Badge>
    )}
    </CardHeader>
    <CardBody className="p-4 pt-0">
    <div className="flex items-end justify-between mb-3">
    <span className="text-2xl font-bold text-[var(--color-text)]">{value}</span>
    {target && (
    <span className="text-xs text-[var(--color-text)]/60">Target: {target}</span>
    )}
    </div>
    {progress !== undefined && (
    <Progress 
    aria-label="progress"
    value={progress}
    classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }}
    />
    )}
    </CardBody>
    </Card>
        );
        }
