import pool from "@/common/db/connection";
import { v4 as uuidV4 } from "uuid";

async function handler(req, res) {
  try {
    const query = {
      text: "SELECT * FROM movies",
    };
    const resp = await pool.query(query);
    res.status(200).json({ hasError: false, data: resp?.rows });
  } catch (error) {
    res.status(500).json({ hasError: true, msg: error });
  }
}

export default handler;
