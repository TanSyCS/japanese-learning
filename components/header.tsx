"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function LoginButton() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <Button
      variant="default"
      className="bg-black text-white hover:bg-gray-800"
      onClick={handleLoginClick}
    >
      Login
    </Button>
  );
}

export default function Header() {
  return (
    <header className="bg-sky-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Nihongo Learning
        </Link>

        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/free-lessons" className="hover:underline">
                Free Lessons
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:underline">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/test" className="hover:underline">
                Test
              </Link>
            </li>
            <li>
              <Link href="/attendance" className="hover:underline">
                <Image
                  src="/Date_range.svg"
                  alt="Calendar"
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li>
              <LoginButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}