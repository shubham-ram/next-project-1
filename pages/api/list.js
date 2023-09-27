function handler(req, res){
    console.log(req.method,'req.method');
    console.log(req,'req')
    // res.status(200).json({message: "Hello from next js"})
    res.send({name: "asd"})
}

export default handler;