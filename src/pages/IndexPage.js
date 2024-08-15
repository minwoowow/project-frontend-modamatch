import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh bg-black text-white">
      <div className="h-2/3 pt-72 text-7xl font-TheJamsilExtraBold">
        ModaMatch
      </div>
      <div className="flex flex-col h-1/3 justify-center items-center pb-32 text-3xl font-semibold">
        <Link to = {'/main'}>시작하기</Link>
      </div>
    </div>
  );
}

export default IndexPage;