// LoginPage.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden md:max-w-3xl lg:max-w-4xl">
        <div className="md:flex">
          {/* Left side - Mascot image */}
          <div className="md:w-1/2 p-10"> {/* Increased padding */}
            <Image
              src="/mascot.png"
              alt="Nihongo Learning Mascot"
              width={500} 
              height={500} 
              className="object-contain rounded-lg"
            />
          </div>

          {/* Right side - Login form */}
          <div className="md:w-1/2 py-10 px-16"> {/* Increased padding */}
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">SIGN IN</h1> {/* Larger heading and margin */}

            <form className="space-y-6"> {/* Increased spacing */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700"> {/* Larger label */}
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4 text-lg" 
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="block text-lg font-medium text-gray-700"> {/* Larger label */}
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 py-3 px-4 text-lg"
                />
              </div>

              <Button className="w-full bg-blue-700 text-white font-semibold rounded-md py-4 text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"> {/* Increased padding and text size */}
                Sign in
              </Button>

              <div className="text-center text-lg text-gray-600 mt-8"> {/* Larger text and margin */}
                <p>Don't have an account?</p>
                <Link href="/sign-up" className="text-blue-700 hover:underline font-semibold">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}