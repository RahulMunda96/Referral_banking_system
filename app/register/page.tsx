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

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function handleTestRegister() {
    alert("Test Register:\n" + JSON.stringify(form, null, 2));
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDE IMAGE */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/login-bg.jpg"
          alt="Register Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-3xl font-bold">Create Your Account</h1>
          <p className="text-sm text-gray-200 mt-2">
            Join BharatPay — Fast, Secure & Smart Banking
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Register</CardTitle>
            <CardDescription className="text-center">
              Create a new BharatPay account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={form.name}
            />

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={form.email}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
            />

            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={form.confirmPassword}
            />
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button
              className="w-full h-11 text-md"
              onClick={handleTestRegister}
            >
              Register
            </Button>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-medium">
                Login
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
