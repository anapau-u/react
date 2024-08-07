import { Card } from '@tremor/react';

export function CardKPI() {
  return (
    <Card
      className="mx-auto max-w-xs bg-white rounded border-purple-200 shadow-lg"
      decoration="top"
      decorationColor="white"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Sales</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
    </Card>
  );
}