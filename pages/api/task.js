import { getQueryData } from "@/common/db/connection";

async function handler(req, res){
    try{
        const querySql = "SELECT * FROM Tasks"
        const values = []
        const results  = await getQueryData({query: querySql, values });
        res.status(200).json({ results: results })
    }catch(error){
        res.status(500).json({error: error.message});
    }

}

export default handler