import MonthlyBreakdownClient from '../../../components/MonthlyBreakdownClient';
import { fetchTrends } from '../../../actions/trends';
import NavigationButton from '@/components/ui/NavigationButton';
import  { TrendResponse }  from '@/types/trends';
import { bungeeOutline } from '@/app/page';

export default async function TrendAnalysisPage({
  params,
}: {
  params: { year: string };
}) {
  
  const resolvedParams = await params;
  const { year } = resolvedParams;
  const trends = (await fetchTrends(year)) as TrendResponse
  
  return (
    <div className={`${bungeeOutline.className} relative h-screen w-full flex flex-col items-center justify-center gap-8 p-4`}>
      <MonthlyBreakdownClient year={year} initialTrends={trends} />
      <NavigationButton
        nextPage="/trend-analysis/2024"
        size="large"
        isAlreadyAnimated={true}
      />
    </div>
  );
}
