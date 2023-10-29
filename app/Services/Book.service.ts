import * as fs from "fs";
const Book = require('../Models/Book.model');



const addBook = async (req: any) => {
    try {

        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary || ''
        });
        let result: any;
        try {
            result = await newBook.save(); // Use await to wait for the save operation to complete
            console.log('Data inserted successfully');
        } catch (error) {
            console.error(`Error inserting data: ${error}`);
        }

        return result


    } catch (err: any) {
        // Handle errors and return an error message if necessary
        throw new Error(err.message || "An error occurred.");
    }
};

const editBook = async (req: any) => {
    try {
        let result: any;
        let id = req.body.id
        let dataToUpdate: any = {}
        if (req.body.title) {
            dataToUpdate.title = req.body.title
        }
        if (req.body.author) {
            dataToUpdate.author = req.body.author
        }
        if (req.body.summary) {
            dataToUpdate.summary = req.body.summary
        }

        try {
            result = await Book.findByIdAndUpdate(id, dataToUpdate, {
                new: true
            });
            if (!result) {
                return new Error("Cannot find the book.");

            } 
            console.log('Retrieved data :', result);
        } catch (error) {
            console.error(`Error retrieving data: ${error}`);
        }

        return result

    } catch (err: any) {
        // Handle errors and return an error message if necessary
        throw new Error(err.message || "An error occurred.");
    }
};

const getAllBook = async (req: any) => {
    try {
        let result: any;
        try {
            result = await Book.find(); // Use the find method to retrieve data
            console.log('Retrieved data :', result);
        } catch (error) {
            console.error(`Error retrieving data: ${error}`);
        }

        return result

    } catch (err: any) {
        // Handle errors and return an error message if necessary
        throw new Error(err.message || "An error occurred.");
    }
};


const getBookById = async (req: any) => {
    try {
        let result: any;
        let id = req.query.id
        try {
            result = await Book.findById(id);
            if (!result) {
                return new Error("Cannot find the book.");

            }  // Use the find method to retrieve data
            console.log('Retrieved data :', result);
        } catch (error) {
            console.error(`Error retrieving data: ${error}`);
            return new Error("Cannot find the book.");

        }

        return result


    } catch (err: any) {
        // Handle errors and return an error message if necessary
        throw new Error(err.message || "An error occurred.");
    }
};

const deleteBookById = async (req: any) => {
    try {
        let result: any;
        let id = req.query.id
        try {
            result = await Book.findByIdAndRemove(id);
            if (!result) {
                return new Error("Cannot find the book.");

            } // Use the find method to retrieve data
            console.log('Retrieved data :', result);
        } catch (error) {
            console.error(`Error retrieving data: ${error}`);

            throw new Error("Cannot find the book.");

        }

        return result


    } catch (err: any) {
        // Handle errors and return an error message if necessary
        throw new Error(err.message || "An error occurred.");
    }
};
export default {
    addBook,
    editBook,
    getAllBook,
    getBookById,
    deleteBookById
}