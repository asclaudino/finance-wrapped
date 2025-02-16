import BiggestSavingClient from '../../../components/BiggestSavingClient';
import { fetchSummary } from '../../../actions/summary';
import NavigationButton from '@/components/ui/NavigationButton';
import { fetchTrends } from '@/actions/trends';
import { TrendResponse } from '@/types/trends';

export default async function BiggestSavingPage({
  params,
}: {
  params: { year: string };
}) {

  const resolvedParams = await params;
  const { year } = resolvedParams;
  const trends = (await fetchTrends(year)) as TrendResponse

  return (
    <div>
      <BiggestSavingClient year={year} initialTrends={trends} />
      <NavigationButton
        nextPage="/monthly-breakdown/2024"  
        size="large"
        isAlreadyAnimated = {true}
      />
    </div>
  );

  
}
