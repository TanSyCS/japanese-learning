
import Link from "next/link";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Japanese skills with Nihongo Learning</h1>
        <div className="max-w-md mx-auto space-y-24 mt-32 mb-32"> {/* Increased space-y to 24, mt/mb to 32 */}
          <Link href="/skills/vocabulary">
            <div className="bg-blue-50 hover:bg-blue-100 transition-colors py-6 px-10 rounded-md text-center text-lg font-medium cursor-pointer my-8"> {/* Increased my to 8 */}
              Vocabulary
            </div>
          </Link>

          <Link href="/skills/grammar">
            <div className="bg-blue-50 hover:bg-blue-100 transition-colors py-6 px-10 rounded-md text-center text-lg font-medium cursor-pointer my-8"> {/* Increased my to 8 */}
              Grammar
            </div>
          </Link>

          <Link href="/skills/reading">
            <div className="bg-blue-50 hover:bg-blue-100 transition-colors py-6 px-10 rounded-md text-center text-lg font-medium cursor-pointer my-8"> {/* Increased my to 8 */}
              Reading
            </div>
          </Link>

          <Link href="/skills/listening">
            <div className="bg-blue-50 hover:bg-blue-100 transition-colors py-6 px-10 rounded-md text-center text-lg font-medium cursor-pointer my-8"> {/* Increased my to 8 */}
              Listening
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}