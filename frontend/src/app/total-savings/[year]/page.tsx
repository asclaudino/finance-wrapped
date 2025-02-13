import TotalSavingsClient from '../../../components/TotalSavingsClient';
import { fetchSummary } from '../../../actions/summary';

export default async function TotalSavingsPage({
  params,
}: {
  params: { year: string };
}) {

  const resolvedParams = await params;
  const { year } = resolvedParams;
  const summary = await fetchSummary(year);

  return <TotalSavingsClient year={year} initialSummary={summary} />;
}
