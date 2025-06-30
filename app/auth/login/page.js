"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", { email, password });
    router.push("/views/dashboard/products");
  };

  return (
    <main className="login-page">
      <Card className="login-card">
        <CardHeader className="text-center pb-0">
          <CardTitle className="card-title">Sign In</CardTitle>
          <p className="subtitle">Access your dashboard</p>
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

          <Button onClick={handleLogin} className="login-btn">
            Sign In
          </Button>

          <div className="links">
            <Link href="/">Forgot password?</Link>
            <Link href="/auth/register">Create account</Link>
          </div>

          <div className="terms">
            By signing in, you agree to our <a href="#">Terms</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
