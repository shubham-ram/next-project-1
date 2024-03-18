import { v4 as uuidV4 } from "uuid";

import pool from "@/common/db/connection";

// const url =
//     "https://global-movies-api-hub.p.rapidapi.com/movies?limit=100&offset=0&filter%5ByearRange%5D%5B0%5D=2018&filter%5ByearRange%5D%5B1%5D=2024";

// const url = 'https://global-movies-api-hub.p.rapidapi.com/movies?limit=120&orderBy=createdAt_DESC&filter%5Blanguage%5D=English&filter%5ByearRange%5D%5B0%5D=2018&filter%5ByearRange%5D%5B1%5D=2024';

const url = 'https://imdb-top-100-movies.p.rapidapi.com/';

const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
};

async function handler(req, res) {
    try {
        const resp = await fetch(url, options);
        const jsonResp = await resp.json();

        const prArr = jsonResp.map((ele) => {
            const { title, description, year, rating, image } = ele;

            const query = {
                text: "INSERT INTO movies(id, title, description, poster_url, release_year, rating, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
                values: [
                    uuidV4(),
                    title,
                    description,
                    image,
                    new Date(`${year}`).getFullYear(),
                    rating,
                    new Date(),
                    new Date(),
                ],
            };

            return pool.query(query);
        });

        const prRes = await Promise.allSettled(prArr);
        // console.log(prRes);

        res.status(200).json({ hasError: false, data: jsonResp });
    } catch (error) {
        res.status(500).json({ hasError: true, msg: error });
    }
}

export default handler;
