import { nanoid } from "nanoid";
import { Url } from "../models/Url.js";

export const getUrls = async(req,res) => {
    try {
        const urls = await Url.find({uid: req.uid})
        return res.json({urls});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"error de servidor"})
    }   
};

export const getUrlByID = async(req,res) => {
    try {
        const {id} = req.params;
        const url = await Url.findById(id);

        if (!url) return res.status(404).json({error:"No existe esta url"});

        if (!url.uid.equals(req.uid)) return res.status(401).json({error:"No le pertenece esa id" });

        return res.json({url});
    } catch (error) {
        console.log(error);
        if(error.kind === "ObjectId"){
            return res.status(500).json({error:"error de formato de id "})
        }
        return res.status(500).json({error:"error de servidor"})
    }  
}

export const createUrl = async(req,res) => {
    try {
        let {url} = req.body;

        const nUrl = new Url({ url, shortUrl: nanoid(6), uid: req.uid });

        await nUrl.save();
        return res.status(201).json({ url });
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"error de servidor"})
    }
};

export const deleteUrlByID = async(req,res) => {
    try {
        const {id} = req.params;
        const url = await Url.findById(id);

        if (!url) return res.status(404).json({error:"No existe esta url"});

        if (!url.uid.equals(req.uid)) return res.status(401).json({error:"No le pertenece esa id" });
        
        await url.remove();
        
        return res.json({url});
    } catch (error) {
        console.log(error);
        if(error.kind === "ObjectId"){
            return res.status(500).json({error:"error de formato de id "});
        }
        return res.status(500).json({error:"error de servidor"});
    }  
}

export const updateUrlByID = async(req,res) => {
    try {
        const {id} = req.params;
        const {url} = req.body;

        const urlRegistered = await Url.findById(id);

        if (!urlRegistered) return res.status(404).json({error:"No existe esta url"});

        if (!urlRegistered.uid.equals(req.uid)) return res.status(401).json({error:"No le pertenece esa id" });

        //Actualizar

        urlRegistered.url = url;

        await urlRegistered.save();

        return res.json({urlRegistered})
        
    } catch (error) {
        console.log(error);
        if(error.kind === "ObjectId"){
            return res.status(500).json({error:"error de formato de id "});
        }
        return res.status(500).json({error:"error de servidor"});
    }
}