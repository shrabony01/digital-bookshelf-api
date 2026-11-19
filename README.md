# Digital Bookshelf API (mongodb-lab-2)

A RESTful backend API built with Node.js, Express, Mongoose, and MongoDB Atlas to manage a digital book collection. Think of it as the backend engine for a library: it enforces rules on how book records are structured and handles creating, reading, updating, and deleting books in the cloud database.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Environment Management:** `dotenv`
- **API Testing:** Postman

# Reflection
# 1. Why use a Mongoose schema instead of inserting raw documents directly into MongoDB?
MongoDB is schemaless by default, which means any structure of data could be saved into a collection without checks. Defining a Mongoose schema acts as a blueprint and gatekeeper for the application—it ensures every book has required fields (title and author), prevents duplicate isbn entries with unique: true, and sets sensible defaults like inStock: true. Catching invalid data before it hits the database keeps the collection consistent and predictable.

# 2. How does separating the database connection, models, and routes improve the application?
Breaking the project into db/connection.js, models/Book.js, and routes/bookRoutes.js keeps each file focused on a single responsibility. Instead of scrolling through one long server.js file to debug a database connection error or a route typo, I know immediately which file handles which job. It also makes the codebase much easier to expand later if I add new models or routes (such as authors or user borrowing records).

# 3. What was a key debugging takeaway while building and testing this API?
Testing every endpoint in Postman showed how important exact naming and status codes are across the stack. Even a single missing character—whether in a MongoDB Atlas cluster hostname, a JSON field name like inStock, or a variable name like deletedBook—can cause an ENOTFOUND, 500, or 404 response. Walking through each CRUD operation step by step made it clear how req.body and req.params.id flow from the client request through Express and Mongoose to MongoDB Atlas.