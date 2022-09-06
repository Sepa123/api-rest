import bcryptjs from "bcryptjs";
import {Schema,model} from "mongoose";

const userSchema = new Schema ({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    }
});

export const User = model("user", userSchema);
