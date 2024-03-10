import pool from "@/common/db/connection";
import { v4 as uuidV4 } from "uuid";

async function handler(req, res) {
    try {
        const { page } = req.query;

        const query = {
            //   text: "SELECT * FROM movies",
            text: `SELECT * FROM movies ORDER BY release_year DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`
        };
        const resp = await pool.query(query);
        res.status(200).json({ hasError: false, data: resp?.rows });
    } catch (error) {
        res.status(500).json({ hasError: true, msg: error });
    }
}

export default handler;
