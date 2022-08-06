import Head from "next/head";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your food is here</title>
        <meta name="description" content="this is food delivery app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#00eeff] w-full relative min-h-screen">
        <Hero />
      </main>
    </div>
  );
}
