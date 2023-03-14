// React Components
import Head from "next/head";

// Custom Components
import EventCard from "@/components/home/EventCard.tsx";
import NewsCard from "@/components/home/NewsCard";
import NewsLandingCard from "@/components/home/NewsLandingCard";
import dylan from "@/../public/images/dylan.png";
import { StandardButton } from "@/components/shared/Button";

const dummyNewsData = [
  {
    title: "Gunn Bat Cave Destroyed",
    date: new Date("Feburary 15, 2023"),
    description:
      "The Bat cave was destroyed! Oh no! That's so sad I'm gonna cry",
    imageURL: "",
  },
  {
    title: "Dylan is actually really cool",
    date: new Date("Feburary 15, 2023"),
    description:
      "Could this actaully be possible? Despite popular opinion, Dylan is ACTUALLY realy cool.",
    imageURL: "",
  },
];

const dummyProgramData = [
  {
    title: "Big Reunion",
    date: new Date("Feburary 15, 2023"),
    url: "",
  },
  {
    title: "Basketball Game",
    date: new Date("Feburary 18, 2023"),
    url: "",
  },
  {
    title: "Homecoming",
    date: new Date("Feburary 18, 2023"),
    url: "",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Gunn Alumni | Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-8 py-10 sm:px-16 lg:px-28">
        <div>
          <NewsLandingCard
            title="Gunn Grad Dylan cures cancer with HTML"
            description="After several years of intense research, recent Gunn graduate Dylan Lu figures out the ultimate cure to cancer: HTML. No one knows how he did it. 💀"
            articleURL=""
            image={"/images/dylan.png"}
          />
        </div>
        <div className="mt-16 xl:flex xl:space-x-16 md:m-24 p-4">
          <div className="xl:flex-1">
            <div className="text-5xl font-bold text-center">
              {"What's New?"}
            </div>
            <div className="mt-16 space-y-8">
              {dummyNewsData.map((data, i) => (
                <NewsCard
                  key={i}
                  title={data.title}
                  description={data.description}
                  date={data.date}
                  imageURL={data.imageURL}
                />
              ))}
            </div>
            <button className="text-lg font-bold mt-4">See More...</button>
          </div>
          <div className="flex-1 mt-16 xl:mt-0">
            <div className="text-5xl font-bold text-center">
              {"Programs & Events"}
            </div>
            <div className="mt-16 space-y-8 flex flex-col items-start">
              {dummyProgramData.map((data, i) => (
                <EventCard
                  key={i}
                  title={data.title}
                  date={data.date}
                  url={data.url}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="text-3xl font-bold">Give back to your community!</div>
          <StandardButton color="bg-primary" className="py-4 px-16 text-xl">
            Donate Now
          </StandardButton>
        </div>
      </div>
    </>
  );
}
