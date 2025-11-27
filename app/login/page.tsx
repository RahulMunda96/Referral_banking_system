"use client";

import { useState } from "react";
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

  function handleTestLogin() {
    alert("Login clicked!\nEmail: " + email + "\nPassword: " + password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Test login page (no backend yet)
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full" onClick={handleTestLogin}>
            Login
          </Button>

          <p className="text-sm text-center text-gray-500">
            Dont have an account?{" "}
            <a href="/register" className="text-blue-600 underline">
              Register
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
