import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center">
      <div className="text2xl text-center">Which Pokemon is the roundest?</div>
      <div className="max-w-2xl mt-4 mx-auto p-8 border rounded flex justify-between items-center gap-2">
        <div className="p-2 px-4 border">1</div>
        <p>vs</p>
        <div className="p-2 px-4 border">2</div>
      </div>
    </div>
  );
};

export default Home;
