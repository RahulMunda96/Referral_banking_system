import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  ArrowUpCircle,
  ArrowDownCircle,
  Clock,
  User,
  IndianRupee,
} from "lucide-react";

export default function AdminTransactions() {
  const transactions = [
    {
      id: "TXN1001",
      user: "Aman Kumar",
      userEmail: "aman@example.com",
      amount: 500,
      type: "Debit",
      status: "Success",
      date: "2025-03-10 10:30 AM",
    },
    {
      id: "TXN1002",
      user: "Priya Sharma",
      userEmail: "priya@example.com",
      amount: 2000,
      type: "Credit",
      status: "Pending",
      date: "2025-03-11 08:10 PM",
    },
    {
      id: "TXN1003",
      user: "Rohit Verma",
      userEmail: "rohit@example.com",
      amount: 1200,
      type: "Credit",
      status: "Failed",
      date: "2025-03-11 05:40 PM",
    },
    {
      id: "TXN1004",
      user: "Sneha Patil",
      userEmail: "sneha@example.com",
      amount: 750,
      type: "Debit",
      status: "Success",
      date: "2025-03-12 01:15 PM",
    },
  ];

  const statusColor: any = {
    Success: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Failed: "bg-red-100 text-red-700",
  };

  const typeColor: any = {
    Credit: "text-green-600",
    Debit: "text-red-600",
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold">Transactions</h1>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute top-3 left-3 text-gray-500" />
          <Input
            placeholder="Search by Transaction ID, User or Status..."
            className="pl-10 h-11 rounded-xl"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            All
          </Button>
          <Button
            variant="outline"
            className="rounded-xl border-green-300 text-green-600"
          >
            Success
          </Button>
          <Button
            variant="outline"
            className="rounded-xl border-yellow-300 text-yellow-700"
          >
            Pending
          </Button>
          <Button
            variant="outline"
            className="rounded-xl border-red-300 text-red-600"
          >
            Failed
          </Button>
        </div>
      </div>

      {/* Transactions Table */}
      <Card className="rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            All Transactions
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              {/* TABLE HEAD */}
              <thead>
                <tr className="bg-gray-100 border-b text-gray-700">
                  <th className="p-3">Txn ID</th>
                  <th className="p-3">User</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody>
                {transactions.map((txn, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* ID */}
                    <td className="p-3 font-medium">{txn.id}</td>

                    {/* USER */}
                    <td className="p-3">
                      <div className="flex flex-col">
                        <span className="font-medium">{txn.user}</span>
                        <span className="text-xs text-gray-600">
                          {txn.userEmail}
                        </span>
                      </div>
                    </td>

                    {/* AMOUNT */}
                    <td className="p-3 flex items-center gap-2 font-semibold">
                      <IndianRupee size={16} /> {txn.amount}
                    </td>

                    {/* TYPE */}
                    <td className="p-3 flex items-center gap-2">
                      {txn.type === "Credit" ? (
                        <ArrowDownCircle
                          size={20}
                          className={typeColor[txn.type]}
                        />
                      ) : (
                        <ArrowUpCircle
                          size={20}
                          className={typeColor[txn.type]}
                        />
                      )}
                      {txn.type}
                    </td>

                    {/* STATUS */}
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          statusColor[txn.status]
                        }`}
                      >
                        {txn.status}
                      </span>
                    </td>

                    {/* DATE */}
                    <td className="p-3 flex items-center gap-2 text-gray-600">
                      <Clock size={16} /> {txn.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
