import pool from "@/common/db/connection"
import { isEmpty } from "lodash";
import { v4 as uuidV4 } from "uuid";

async function executeLogic({ data, res }){
    try {
        const { name, email, password } = data || {};

        const uuid = uuidV4();

        const query = {
            text : "INSERT INTO users (id, name, email, password) VALUES($1, $2, $3, $4)",
            values : [uuid, name, email, password]
        }

        await pool.query(query);
        res.status(200).json({ hasError: false, msg: "User Created"})
        return;
       
    } catch (error) {
        res.status(500).json({ hasError: true, error });
        return;
    }
}

async function handler(req, res){
    const data = req.body;
    const parsedData = JSON.parse(data);

    const { email } = parsedData || {};

    if(!email){
        res.status(400).json({ hasError: true, error: "Email Id is mandatory"});
        return;
    }

    const isUserPresent = await pool.query('SELECT * FROM users where email = $1', [email]);

    if(!isEmpty(isUserPresent.rows)){
        res.status(400).json({ hasError: true, error: "Users already present" });
        return;
    }

    executeLogic({ data: parsedData, res })
}

export default handler