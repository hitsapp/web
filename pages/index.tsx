import { useState } from "react";
import { GetServerSideProps } from "next";
import { Footer } from "@/components/Footer";
import { Hit } from "@/components/Hit";
import { Input } from "@/components/Input";
import { API_URL, FRONTEND_URL } from "@/lib/constants";
import { Hit as HitType } from "@/types/hit";
import { HitResponse } from "@/types/hit-response";
import Head from "next/head";

interface HomeProps {
  leaderboard: HitType[];
}

export default function Home({ leaderboard }: HomeProps) {
  const [url, setUrl] = useState("");

  return (
    <>
      <Head>
        <title>Hits</title>
      </Head>

      <div className="pl-4 pr-4 md:pl-0 md:pr-0 mt-24 md:w-[900px] max-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-5xl mb-2">hits</h1>
          <p className="text-center text-lightGray">
            A customizable and super fast badge for displaying hits for any link
          </p>

          <div className="mt-5 w-full">
            <Input
              placeholder="https://github.com/john"
              onChange={(e) => setUrl(e.target.value)}
            />

            <div className="flex flex-row gap-2 w-full mt-2">
              {["HTML", "Markdown"].map((type) => (
                <div
                  key={type}
                  className="w-full bg-primary border border-secondary p-5 rounded-lg"
                >
                  <h1 className="mb-2">{type}</h1>
                  <Input
                    value={
                      type === "HTML"
                        ? `<img src="${FRONTEND_URL}/hits?url=${url}" />`
                        : `![Hits](${FRONTEND_URL}/hits?url=${url})`
                    }
                    disabled
                    copyable
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-6 p-10 w-full gap-4 border border-secondary bg-primary rounded-lg">
            {leaderboard.map((hit, i) => (
              <Hit key={i} index={i} hit={hit} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const leaderboard: HitResponse = await fetch(`${API_URL}/v1/leaderboard`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  return {
    props: { leaderboard: leaderboard.data },
  };
};
