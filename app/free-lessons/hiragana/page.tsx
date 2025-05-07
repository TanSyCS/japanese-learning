import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button" 
export default function Hiragana() {
  return (
    <main className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Japanese Alphabets</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Hiragana:</h2>
          <p className="mb-2">
            The Hiragana alphabet is the most basic Japanese writing system that all Japanese language learners must
            know.
          </p>
          <p className="mb-4">
            The Hiragana alphabet consists of 71 characters and has 5 basic vowels: あ (a) - い (i) - う (u) - え (e) -
            お (o). These vowels are used after consonants, and form the basis of the syllabary.
          </p>
        </section>

        <section className="mb-10">
            <Image
                src="/hiragana.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/a.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/k.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/s.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/t.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/n.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/h.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/m.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/y.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/r.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Katakana:</h2>
          <p className="mb-2">
          Katakana is one of the two Japanese alphabets, and it will be the first milestone for your Japanese learning journey.


  </p>
          <p className="mb-4">
          Katakana is made up of straight, curved, and kinked strokes that are somewhat similar to the strokes in Kanji. Therefore, the word Katakana is also called "hard letter" in Vietnamese.
          </p>
          <p className="mb-4">The Katakana alphabet consists of 46 basic tones, and its variations include: Opaque, Compound, Punctuation, and Field.  
                </p>
        </section>

        <section className="mb-10">
            <Image
                src="/katakana.png"
                alt="Katakana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/a1.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/k1.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/s1.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                {/* <Image
                src="/t1.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image> */}
                <Image
                src="/n1.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/h1.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/m1.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/y1.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
                <Image
                src="/r1.png"
                alt="Hiragana Chart"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
                className="mx-auto mb-4">
                </Image>
        </section>
        <div className="flex justify-around mb-8 px-8">
  <Link href="/free-lessons" className="w-1/3"> 
    <Button className="w-full bg-sky-100 text-sky-800 hover:bg-sky-200 border border-sky-300 py-4 rounded-full text-lg font-semibold"> {/* Tăng py và cỡ chữ, thêm font-semibold */}
      ← Back
    </Button>
  </Link>

  <Link href="test" className="w-1/3"> 
    <Button className="w-full bg-sky-100 text-sky-800 hover:bg-sky-200 border border-sky-300 py-4 rounded-full text-lg font-semibold"> {/* Tăng py và cỡ chữ, thêm font-semibold */}
      Let's Practice ! →
    </Button>
  </Link>
</div>

      </div>
    </main>
  )
}
