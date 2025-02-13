
import TotalSpendingsClient from "../../../components/TotalSpendingsClient";
import { fetchSummary } from "../../../actions/summary";
import { motion } from "framer-motion";
import NavigationButton from "../../../components/ui/NavigationButton";

export default async function TotalSpendingsPage({
  params,
}: {
  params: { year: string };
}) {
  // Destructure directly, no need for `await` here
  const resolvedParams = await params;
  const { year } = resolvedParams;

  // If fetchSummary is async, await the result
  const summary = await fetchSummary(year);

  return (
    <div>
      {/* Removed the stray semicolon after this component */}
      <TotalSpendingsClient year={year} initialSummary={summary} />
      <NavigationButton
        nextPage="/total-savings/2024"  // Example route
        size="large"
        isAlreadyAnimated = {true}
      />
    </div>
  );
}
