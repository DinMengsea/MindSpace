"use client";

import Link from "next/link";
import { Mail, Lock, Eye, Brain, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const result = await login({
        email,
        password,
      });

      // Save the token
      localStorage.setItem("token", result.token);

      alert("Login successful!");

      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pb-30">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl border border-slate-200 p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
            <Brain className="text-indigo-600" size={32} />
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-800">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500 text-center">
            Continue your journey with MindSpace.
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>

          <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
            <Mail className="text-slate-400" size={20} />
            <input
              type="email"
              placeholder="youremail@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ml-3 w-full outline-none placeholder:text-slate-400 text-slate-400"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>

          <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
            <Lock className="text-slate-400" size={20} />

            <input
              type={showPassword ? "text" : "password"}
              value= {password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="ml-3 w-full outline-none placeholder:text-slate-400 text-slate-400 placeholder:text-xl"
            />

            <button type="button"
                    onClick={()=> setShowPassword(!showPassword)}
                    className="text-slate-400"
            >
              {showPassword ? <Eye size={20}/>: <EyeClosed size={20}/>}
            </button>
          </div>
        </div>

        {/* Remember */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <label className="flex items-center gap-2 block text-sm font-medium text-slate-700 mb-2">
            <input type="checkbox" />
            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="text-indigo-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}