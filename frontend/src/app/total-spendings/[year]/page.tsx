// src/app/totalSpendings/[year]/page.tsx
import TotalSpendingsClient from '../../../components/TotalSpendingsClient';
import { fetchSummary } from '../../../actions/summary';

export default async function TotalSpendingsPage({
  params,
}: {
  params: { year: string };
}) {
  // Await params before using them, as required by Next.js
  const resolvedParams = await params;
  const { year } = resolvedParams;
  const summary = await fetchSummary(year);

  return <TotalSpendingsClient year={year} initialSummary={summary} />;
}
