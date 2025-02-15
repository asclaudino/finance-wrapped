
import TotalSpendingsClient from "../../../components/TotalSpendingsClient";
import { fetchSummary } from "../../../actions/summary";
import { motion } from "framer-motion";
import NavigationButton from "../../../components/ui/NavigationButton";

export default async function TotalSpendingsPage({
  params,
}: {
  params: { year: string };
}) {
  
  const resolvedParams = await params;
  const { year } = resolvedParams;

  
  const summary = await fetchSummary(year);

  return (
    <div>
      <TotalSpendingsClient year={year} initialSummary={summary} />
      <NavigationButton
        nextPage="/total-savings/2024"  
        size="large"
        isAlreadyAnimated = {true}
      />
    </div>
  );
}
