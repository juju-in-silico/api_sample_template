import { NextApiRequest, NextApiResponse } from "next";
import JsonDataStyled from "./components/JsonDataStyled";

let currentPage = 1;

interface Pokemon {
  name: string;
  url: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const fetchNextPage = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        (currentPage - 1) * 20
      }&limit=20`
    );
    const data = await response.json();

    const formattedData: Pokemon[] = data.results.map(
      (pokemon: { name: string; url: string }) => ({
        name: pokemon.name,
        url: pokemon.url,
      })
    );

    if (res) {
      res.status(200).json(formattedData);
    }

    return <JsonDataStyled data={formattedData} />;
  };

  if (req.method === "GET") {
    return (
      <div>
        <form action={fetchNextPage}></form>
      </div>
    );
  }

  return fetchNextPage();
};

export default handler;
