import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const transactions = [
    {
      id: 1,
      title: "Salary",
      amount: 5000,
      type: "income",
    },
    {
      id: 2,
      title: "Groceries",
      amount: 500,
      type: "expense",
    },
    {
      id: 3,
      title: "Freelance Work",
      amount: 1000,
      type: "income",
    },
    {
      id: 4,
      title: "Internet Bill",
      amount: 300,
      type: "expense",
    },
    {
      id: 5,
      title: "Pocket Money",
      amount: 200,
      type: "income",
    },
  ];

  return (
    <div className="border rounded-lg p-5 shadow">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>

      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}
