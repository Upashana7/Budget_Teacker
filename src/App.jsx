import BalanceSummary from "./components/BalanceSummary";
import TransactionList from "./components/TransactionList";
import TransMission from "./components/TransMission";

export default function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Budget Tracker</h1>

      <BalanceSummary />

      <TransactionList />

      <TransMission />
    </div>
  );
}
