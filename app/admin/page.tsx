import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, CreditCard, Wallet, Clock } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-md border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Users</CardTitle>
            <Users className="text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,242</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Transactions</CardTitle>
            <CreditCard className="text-green-600" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5,430</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Withdrawals</CardTitle>
            <Wallet className="text-orange-600" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>

        <Card className="shadow-md border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Today’s Activity</CardTitle>
            <Clock className="text-purple-600" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">328</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-sm">
          <div className="flex justify-between border-b pb-3">
            <span>User Aman created account</span>
            <span className="text-gray-500">2 mins ago</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>₹500 withdrawal request</span>
            <span className="text-gray-500">10 mins ago</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Transaction of ₹2,500 approved</span>
            <span className="text-gray-500">30 mins ago</span>
          </div>

          <div className="flex justify-between">
            <span>New referral joined</span>
            <span className="text-gray-500">1 hour ago</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
