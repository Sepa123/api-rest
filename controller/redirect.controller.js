import { Url } from "../models/Url.js";

export const redirectUrl = async(req,res) => {
    try {
        const {shortUrl} = req.params;
        const url = await Url.findOne({shortUrl : shortUrl});

        if (!url) return res.status(404).json({error:"No existe esta url"});

        return res.redirect(url.url)
        // return res.json({shortUrl: url.shortUrl });
    } catch (error) {
        console.log(error.message);
        if(error.kind === "ObjectId"){
            return res.status(500).json({error:"error de formato de id "})
        }
        return res.status(500).json({error:"error de servidor"})
    } 
}