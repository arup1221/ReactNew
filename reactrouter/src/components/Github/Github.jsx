import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/arup1221")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="flex justify-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers: {data.followers}
      </div>
      <div className="flex justify-center ">
        <img
          className="rounded-[170rem]"
          width={100}
          height={100}
          src={data.avatar_url}
          alt="arup"
        />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/arup1221");
  return response.json();
};
