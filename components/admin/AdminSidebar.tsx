import { Home, Users, CreditCard, Landmark, Wallet, Gift } from "lucide-react";
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-white shadow-md border-r min-h-screen p-6 space-y-8">
      <h1 className="text-2xl font-bold text-blue-600">BharatPay Admin</h1>

      <nav className="space-y-4 text-gray-700 font-medium">
        <Link
          href="/admin"
          className="flex items-center gap-3 hover:text-blue-600"
        >
          <Home size={20} /> Dashboard
        </Link>

        <Link
          href="/admin/users"
          className="flex items-center gap-3 hover:text-blue-600"
        >
          <Users size={20} /> Users
        </Link>

        <Link
          href="/admin/transactions"
          className="flex items-center gap-3 hover:text-blue-600"
        >
          <CreditCard size={20} /> Transactions
        </Link>

        <Link
          href="/admin/withdrawals"
          className="flex items-center gap-3 hover:text-blue-600"
        >
          <Wallet size={20} /> Withdrawals
        </Link>

        <Link
          href="/admin/manual"
          className="flex items-center gap-3 hover:text-blue-600"
        >
          <Landmark size={20} /> Manual Adjustments
        </Link>

        <Link
          href="/admin/referrals"
          className="flex items-center gap-3 hover:text-blue-600"
        >
          <Gift size={20} /> Referrals
        </Link>
      </nav>
    </div>
  );
}
