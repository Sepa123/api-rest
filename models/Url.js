import { Schema, model } from "mongoose";

const urlSchema = new Schema({
    url: {
        type: String,
        require: true,
    },
    shortUrl: {
        type: String,
        require: true
    }
});

export const Url = model("url", urlSchema)