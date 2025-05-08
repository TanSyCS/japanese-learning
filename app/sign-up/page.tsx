// SignupPage.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          {/* Left side - Mascot image */}
          <div className="md:w-1/2 p-8">
            <Image
              src="/mascot.png"
              alt="Nihongo Learning Mascot"
              width={400}
              height={400}
              className="object-contain rounded-lg"
            />
          </div>

          {/* Right side - Sign up form */}
          <div className="md:w-1/2 py-8 px-12">
            <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">SIGN UP</h1>

            <form className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your user name"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="********"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <Button className="w-full bg-blue-700 text-white font-semibold rounded-md py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Sign up
              </Button>

              <div className="text-center text-sm text-gray-600">
                <p>Already have an account?</p>
                <Link href="/login" className="text-blue-700 hover:underline font-semibold">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}