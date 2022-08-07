import Head from "next/head";
import { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import PageLoader from "../components/PageLoader";
import { BASE_URL } from "../constants";

export default function Home(props) {
  const [projects, setProjects] = useState([]);
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.projects && props.socials) {
      setProjects(props.projects);
      setSocials(props.socials);
      setLoading(false)
    }
  }, [props.projects, props.socials]);

  return (
    <div>
      <Head>
        <title>Jitendra Giriya</title>
        <meta
          name="description"
          content="this is jitendra giriya official portfolio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#00e1ff4f] w-full relative min-h-screen">
        {!loading ? <Hero socials={socials} projects={projects} /> : <PageLoader/>}
      </main>
    </div>
  );
}

//getting serveside props
export async function getServerSideProps() {
  const dprojects = await fetch(`${BASE_URL}/api/projects`);
  const dsocials = await fetch(`${BASE_URL}/api/socials`);

  const projects = await dprojects.json();
  const socials = await dsocials.json();

  return {
    props: { projects, socials },
  };
}
