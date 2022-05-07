import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getOptionsForVote } from "../utils/getRandomPokemon";

interface IOptions {
  firstId: number;
  secondId: number;
}

const Home: NextPage = () => {
  const [options, setOptions] = useState<IOptions>();

  useEffect(() => {
    const [firstId, secondId] = getOptionsForVote();
    setOptions({ firstId, secondId });
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center">
      <div className="text2xl text-center">Which Pokemon is the roundest?</div>
      <div className="max-w-2xl mt-4 mx-auto p-8 border rounded flex justify-between items-center gap-2">
        <div className="p-2 px-4 border">{options?.firstId}</div>
        <p>vs</p>
        <div className="p-2 px-4 border">{options?.secondId}</div>
      </div>
    </div>
  );
};

export default Home;
