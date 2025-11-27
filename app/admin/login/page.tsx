"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleAdminLogin() {
    alert(`Admin Login:\n${email}\n${password}`);
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/admin-bg.jpg"
          alt="Admin Portal Background"
          fill
          className="object-cover"
        />

        {/* Strong Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/70"></div>

        <div className="absolute bottom-14 left-10 text-white">
          <h1 className="text-4xl font-bold drop-shadow-md">
            BharatPay Admin Portal
          </h1>
          <p className="text-gray-200 text-lg mt-2">
            Secure access for authorized personnel only
          </p>
        </div>
      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <Card className="w-full max-w-md shadow-xl border border-gray-100 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Admin Login
            </CardTitle>
            <CardDescription className="text-center text-gray-500 text-sm">
              Enter your admin credentials to continue
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <Input
              type="email"
              placeholder="Admin Email"
              className="h-12 text-md rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Input
              type="password"
              placeholder="Password"
              className="h-12 text-md rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button
              className="w-full h-12 text-md rounded-lg bg-blue-600 hover:bg-blue-700"
              onClick={handleAdminLogin}
            >
              Login as Admin
            </Button>

            <p className="text-center text-sm text-gray-500">
              This portal is restricted. Unauthorized access is prohibited.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
