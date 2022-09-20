import mongoose from "mongoose";
const {Schema, model} = mongoose
const urlSchema = new Schema({
    url: {
        type: String,
        required: true,
        trim: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
    uid : {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,

    }
});

export const Url = model("url", urlSchema)