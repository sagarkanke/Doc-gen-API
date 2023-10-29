import IController from '../Types/IController';
import apiResponse from '../utilities/ApiResponse';
import bookService from '../Services/Book.service';


const addBook: IController = async (req: any, res: any) => {
    let book: any;
    try {
        // Create a book using the bookService
        book = await bookService.addBook(req);
        console.log(book)
        // Check if the result is an Error object
        if (book instanceof Error) {
            console.log(book)
            // Return a bad request response using the apiResponse helper function
            apiResponse.error(res, 400, book.message);
        } else {
            apiResponse.result(res, book , " book created Successfully ", 200, );

        }
    } catch (e: any) {

        // Return a bad request response with the error message from the caught exception
        apiResponse.error(
            res,
            400,
            e.message
        );
    }
    return;
}

const editBook: IController = async (req: any, res: any) => {
    let book: any;
    try {
        // edit a book using the bookService
        book = await bookService.editBook(req);
        console.log(book)
        // Check if the result is an Error object
        if (book instanceof Error) {
            console.log(book)
            // Return a bad request response using the apiResponse helper function
            apiResponse.error(res, 400, book.message);
        } else {
            apiResponse.result(res, book , " book updated successfully ",  200);

        }
    } catch (e: any) {

        // Return a bad request response with the error message from the caught exception
        apiResponse.error(
            res,
            400,
            e.message
        );
    }
    return;
}

const getAllBook: IController = async (req: any, res: any) => {
    let book: any;
    try {
        // getall a book using the bookService
        book = await bookService.getAllBook(req);
        console.log(book)
        // Check if the result is an Error object
        if (book instanceof Error) {
            console.log(book)
            // Return a bad request response using the apiResponse helper function
            apiResponse.error(res, 400, book.message);
        } else {
            apiResponse.result(res, book , " books fetched successfully ", 200);

        }
    } catch (e: any) {

        // Return a bad request response with the error message from the caught exception
        apiResponse.error(
            res,
            400,
            e.message
        );
    }
    return;
}

const getBookById: IController = async (req: any, res: any) => {
    let book: any;
    try {
        // get book by id using the bookService
        book = await bookService.getBookById(req);
        console.log(book)
        // Check if the result is an Error object
        if (book instanceof Error) {
            console.log(book)
            // Return a bad request response using the apiResponse helper function
            apiResponse.error(res, 400, book.message);
        } else {
            apiResponse.result(res, book , " book fetch successfully ", 200);

        }
    } catch (e: any) {

        // Return a bad request response with the error message from the caught exception
        apiResponse.error(
            res,
            400,
            e.message
        );
    }
    return;
}

const deleteBookById: IController = async (req: any, res: any) => {
    let book: any;
    try {
        // get book by id using the bookService
        book = await bookService.deleteBookById(req);
        console.log(book)
        // Check if the result is an Error object
        if (book instanceof Error) {
            console.log(book)
            // Return a bad request response using the apiResponse helper function
            apiResponse.error(res, 400, book.message);
        } else {
            apiResponse.result(res, book , " book deleted successfully ", 200);

        }
    } catch (e: any) {

        // Return a bad request response with the error message from the caught exception
        apiResponse.error(
            res,
            400,
            e.message
        );
    }
    return;
}

export default {
    addBook,
    editBook,
    getAllBook,
    getBookById,
    deleteBookById
};