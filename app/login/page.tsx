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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    alert(`Email: ${email}\nPassword: ${password}`);
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDE IMAGE */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/Wavy_Bus-23_Single-04.jpg"
          alt="Login Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60"></div>

        <div className="absolute bottom-12 left-10 text-white">
          <h1 className="text-4xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-gray-200 text-lg mt-2">
            Smart, Secure & Fast Banking for India 🇮🇳
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <Card className="w-full max-w-md shadow-xl border border-gray-100 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Sign In
            </CardTitle>
            <CardDescription className="text-center text-gray-500 text-sm">
              Access your Bank account securely
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            <Input
              type="email"
              placeholder="Email Address"
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

            <div className="flex justify-end text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button
              className="w-full h-12 text-md rounded-lg bg-blue-600 hover:bg-blue-700"
              onClick={handleLogin}
            >
              Login
            </Button>

            <p className="text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-600 font-semibold">
                Create one
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
