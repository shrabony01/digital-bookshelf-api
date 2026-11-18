import express from "express";
import Book from "../models/Book.js";

const router=express.Router();

//create:post
router.post("/",async(req,res)=>{
    try{
        //create and save new bookusing json data
        const newBook=await Book.create(req.body);
        res.status(201).json(newBook);

    }catch(error){
        res.status(400).json({ message: error.message });
    }
});
//Read all:get the list of book
router.get("/",async(req,res)=>{
    try{
        const books=await Book.find();
        res.status(200).json(books);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});
//Read one:get specific book
router.get("/:id",async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id);

        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).json(book);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});
export default router;