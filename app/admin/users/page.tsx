import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoreVertical, User, Search } from "lucide-react";

export default function AdminUsersPage() {
  const dummyUsers = [
    {
      name: "Aman Kumar",
      email: "aman@example.com",
      balance: "₹12,500",
      status: "Active",
      joined: "2024-01-12",
    },
    {
      name: "Priya Sharma",
      email: "priya@example.com",
      balance: "₹8,900",
      status: "Blocked",
      joined: "2024-02-01",
    },
    {
      name: "Rohit Verma",
      email: "rohit@example.com",
      balance: "₹3,200",
      status: "Active",
      joined: "2024-03-10",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold">Users</h1>

      {/* Search + Add User (optional) */}
      <div className="flex justify-between items-center">
        <div className="relative w-72">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <Input
            placeholder="Search users..."
            className="pl-10 h-11 rounded-lg"
          />
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 rounded-lg">
          + Add User
        </Button>
      </div>

      {/* Users Table */}
      <Card className="shadow-md rounded-xl border">
        <CardHeader>
          <CardTitle className="text-xl">All Users</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b bg-gray-100 text-gray-700">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Balance</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Joined</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {dummyUsers.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3 flex items-center gap-2">
                      <User size={18} className="text-gray-500" />
                      {user.name}
                    </td>

                    <td className="p-3">{user.email}</td>

                    <td className="p-3 font-medium">{user.balance}</td>

                    <td className="p-3">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="p-3">{user.joined}</td>

                    <td className="p-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-gray-200 rounded-lg"
                      >
                        <MoreVertical size={18} />
                      </Button>
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
