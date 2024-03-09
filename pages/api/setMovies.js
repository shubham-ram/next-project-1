import pool from "@/common/db/connection";

const url =
  "https://global-movies-api-hub.p.rapidapi.com/movies?limit=100&offset=0&filter%5ByearRange%5D%5B0%5D=2018&filter%5ByearRange%5D%5B1%5D=2024";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c46653efacmsh2cc4a84301b3da0p185dcajsn91e28211be2c",
    "X-RapidAPI-Host": "global-movies-api-hub.p.rapidapi.com",
  },
};

async function handler(req, res) {
  try {
    const resp = await fetch(url, options);
    const jsonResp = await resp.json();

    const { rows } = jsonResp || {};

    const prArr = rows.map((ele) => {
      const { id, title, description, release, rating, images = [] } = ele;

      const query = {
        text: "INSERT INTO movies(id, title, description, poster_url, release_date, rating, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
        values: [
          id,
          title,
          description,
          images[0]?.publicUrl,
          release,
          rating,
          new Date(),
          new Date(),
        ],
      };

      return pool.query(query);
    });

    const prRes = await Promise.allSettled(prArr);

    res.status(200).json({ hasError: false, data: jsonResp });
  } catch (error) {
    res.status(500).json({ hasError: true, msg: error });
  }
}

export default handler;
