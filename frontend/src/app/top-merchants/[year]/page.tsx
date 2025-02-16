import TopMerchantsClient from '../../../components/TopMerchantsClient';
import { fetchTopMerchants } from '../../../actions/topMerchants';
import NavigationButton from '@/components/ui/NavigationButton';
import  { TopMerchantsResponse }  from '@/types/merchants';
import { bungeeOutline, quicksand } from '@/app/page';

export default async function TrendAnalysisPage({
  params,
}: {
  params: { year: string };
}) {
  
  const resolvedParams = await params;
  const { year } = resolvedParams;
  const initialMerchants = (await fetchTopMerchants(year)) as TopMerchantsResponse
  
  return (
    <div className={`${quicksand.className} relative h-screen w-full flex flex-col items-center justify-center gap-8 p-4`}>
      <TopMerchantsClient year={year} initialMerchants={initialMerchants} />
      <div className='mt-10'>
        <NavigationButton
          nextPage="/biggest-saving/2024"
          size="large"
          isAlreadyAnimated={true}
        />
      </div>
    </div>
  );
}
