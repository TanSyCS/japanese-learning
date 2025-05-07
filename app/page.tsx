import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-6">Learn Japanese with Nihongo Learning</h1>

        <p className="mb-4 text-lg">
          Nihongo Learning is a Japanese language website, designed for beginners and intermediate learners. This website
          provides many resources for Japanese learners including vocabulary, grammar, reading comprehension, writing,
          listening, and more. Nihongo Learning will accompany you throughout your Japanese learning journey with many
          useful Japanese learning tools.
        </p>

        <div className="flex justify-center my-8">
          <Image
            src="/mascot.png"
            alt="Nihongo Learning Mascot"
            width={500}
            height={300}
            style={{ width: '100%', height:'auto'}} // Responsive image
            className="rounded-lg"
          />
        </div>

        <p className="mb-4 text-lg">This website also provides many learning resources including:</p>

        <div className="space-y-6 my-8">


        <div>
          <h2 className="text-2xl font-semibold mb-2">Lessons: </h2>
          <p className="text-lg">
            Night Owl provides Japanese lessons by topic, ranging from the basic alphabet and grammar to more complex subjects such as business and Japanese culture. The lessons are divided into smaller, easy-to-understand parts, accompanied by practice exercises to help you consolidate your knowledge.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Study: </h2>
          <p className="text-lg">
            Nihongo Learning provides Japanese learning materials at various levels, helping you build vocabulary and
            grammar skills to achieve your goals in studying and working with the Japanese language.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Vocabulary: </h2>
          <p className="text-lg">
            Nihongo Learning is a vocabulary learning tool with a phonetic system. You can learn vocabulary through
            flashcards, games, and practice with various exercises.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Grammar: </h2>
          <p className="text-lg">
            Nihongo Learning also provides Japanese grammar lessons at all levels and explains grammar points through
            examples and exercises.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Reading: </h2>
          <p className="text-lg">
            Nihongo Learning offers Japanese reading materials at different levels, from simple articles to stories
            and news articles for advanced learners.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Listening: </h2>
          <p className="text-lg">
            Nihongo Learning provides Japanese listening materials at various levels, including conversations,
            podcasts, songs, and videos.
          </p>
        </div>
        </div>

        <div className="flex justify-center my-8">
      <Image
        src="/japanese-book.png"
        alt="Japanese Learning Materials"
        width={500}
        height={200} 
        style={{ width: '100%', height: 'auto' }}

      />
    </div>
      </div>
    </main>
  )
}