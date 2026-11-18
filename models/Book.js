import mongoose from "mongoose";

//the blueprint (schema) for every book in our database
const bookSchema = new mongoose.Schema(
    {
        // Book title must be text and cannot be left blank
        title:{
            type: String,
            required: [true, "Book title is required"],
            trim: true,
        },
        author: {
            type: String,
            required: [true, "Author name is required"],
            trim: true,
        },
        isbn: {
            type: String,
            unique: true,
            trim: true,
        },
        publishdDate:{
            type: Date,
        },
        inStock:{
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);
const Book=mongoose.model("Book",bookSchema);
export default Book;