import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JapaneseAlphabets() {
  return (
    <main className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="border-2 border-dashed border-blue-300 p-6 mb-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Japanese Writing Systems</h1>

          <p className="mb-4">
            The Japanese writing system consists of Hiragana, Katakana, and Kanji, which are all important and commonly
            used in Japanese language learning and usage. Hiragana and Katakana are phonetic alphabets where each
            character represents a sound, while Kanji characters represent meanings.
          </p>

          <p className="mb-4">
            Words in Japanese are typically written using a combination of Hiragana, Katakana, and Kanji. Personal names,
            country names, or foreign words are usually written in Katakana.
          </p>

          <p className="mb-4">
            Latin characters (Romaji) are also used to write Japanese for international audiences.
          </p>

          <p className="mb-4">
            For beginners learning Japanese, the Hiragana and Katakana alphabets are most important. Therefore, in the
            Free Lessons section, Nihongo Learning will help you master these two alphabets first.
          </p>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">THE ALPHABET OF JAPAN</h2>
          
          <Image 
            src="/japan-alphabets.png" 
            alt="Japanese Alphabets" 
            width={500} 
            height={300}
            style={{ width: '100%', height: 'auto' }} 
            className="mx-auto mb-4"
          />
          
          {/* <div className="grid grid-cols-2 max-w-md mx-auto border-2 border-blue-300">
            <div className="border p-4 bg-blue-50">ひらがな</div>
            <div className="border p-4 bg-blue-50">カタカナ</div>
            <div className="border p-4 bg-blue-50">漢字</div>
            <div className="border p-4 bg-blue-50">Romaji</div>
          </div> */}
        </div>

        <div className="border-2 border-dashed border-blue-300 p-6 mb-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Methods to learn Japanese alphabets quickly and effectively</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Learn Japanese alphabets using Flashcards</li>
            <li>Learn Japanese alphabets by singing songs</li>
            <li>Learn Japanese alphabets through illustrated pictures</li>
            <li>Practice writing repeatedly</li>
            <li>Practice writing characters</li>
          </ol>
        </div>

        <div className="border-2 border-dashed border-blue-300 p-6 mb-8 rounded-lg">
          <p className="mb-4">
            Next, with Nihongo Learning, you will learn the Hiragana and Katakana alphabets, and then take a small test
            to check your actual progress.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Link href='/free-lessons/hiragana'>
            <Button className="bg-blue-100 text-blue-800 hover:bg-blue-200 border border-blue-300 px-8 py-2 rounded-lg">
              → Learn Hiragana & Katakana
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
