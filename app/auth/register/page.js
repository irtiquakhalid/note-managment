"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = () => {
    console.log("Registering:", { email, password, confirm });
    // TODO: Add real register logic
  };

  return (
    <main className="register-page">
      <Card className="register-card">
        <CardHeader className="text-center pb-0">
          <CardTitle className="card-title">Create Account</CardTitle>
          <p className="subtitle">Join us and manage your products</p>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="input-group">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input
              id="confirm"
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <Button onClick={handleRegister} className="register-btn">
            Create Account
          </Button>

          <div className="links mt-4">
            <span className="text-sm text-gray-500">
              Already have an account?
            </span>
            <Link
              href="/auth/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login here
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
