import "dotenv/config";

import express from "express";
import connectDB from "./db/connection.js";
import bookRoutes from "./routes/bookRoutes.js";

//Initialize the Express app and set the port
const app= express();
const port = process.env.PORT||3001;

//connect to atlas
connectDB();

//middleware: Allows Express to read incoming JSON data in req.body
app.use(express.json());

//Mount the book routes at /api/books
app.use ("/api/books",bookRoutes);

//start server and listen for request
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
