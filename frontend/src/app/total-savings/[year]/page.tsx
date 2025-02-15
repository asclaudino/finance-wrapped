import TotalSavingsClient from '../../../components/TotalSavingsClient';
import { fetchSummary } from '../../../actions/summary';
import NavigationButton from '@/components/ui/NavigationButton';

export default async function TotalSavingsPage({
  params,
}: {
  params: { year: string };
}) {

  const resolvedParams = await params;
  const { year } = resolvedParams;
  const summary = await fetchSummary(year);

  return (
    <div>
      <TotalSavingsClient year={year} initialSummary={summary} />
      <NavigationButton
        nextPage="/total-savings/2024"  
        size="large"
        isAlreadyAnimated = {true}
      />
    </div>
  );

  
}
