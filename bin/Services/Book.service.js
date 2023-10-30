"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Book = require('../Models/Book.model');
var addBook = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var newBook, result, error_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                newBook = new Book({
                    title: req.body.title,
                    author: req.body.author,
                    summary: req.body.summary || ''
                });
                result = void 0;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, newBook.save()];
            case 2:
                result = _a.sent(); // Use await to wait for the save operation to complete
                console.log('Data inserted successfully');
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("Error inserting data: ".concat(error_1));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, result];
            case 5:
                err_1 = _a.sent();
                // Handle errors and return an error message if necessary
                throw new Error(err_1.message || "An error occurred.");
            case 6: return [2 /*return*/];
        }
    });
}); };
var editBook = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var result, id, dataToUpdate, error_2, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                result = void 0;
                id = req.body.id;
                dataToUpdate = {};
                if (req.body.title) {
                    dataToUpdate.title = req.body.title;
                }
                if (req.body.author) {
                    dataToUpdate.author = req.body.author;
                }
                if (req.body.summary) {
                    dataToUpdate.summary = req.body.summary;
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Book.findByIdAndUpdate(id, dataToUpdate, {
                        new: true
                    })];
            case 2:
                result = _a.sent();
                if (!result) {
                    return [2 /*return*/, new Error("Cannot find the book.")];
                }
                console.log('Retrieved data :', result);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error("Error retrieving data: ".concat(error_2));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, result];
            case 5:
                err_2 = _a.sent();
                // Handle errors and return an error message if necessary
                throw new Error(err_2.message || "An error occurred.");
            case 6: return [2 /*return*/];
        }
    });
}); };
var getAllBook = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_3, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                result = void 0;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Book.find()];
            case 2:
                result = _a.sent(); // Use the find method to retrieve data
                console.log('Retrieved data :', result);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error("Error retrieving data: ".concat(error_3));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, result];
            case 5:
                err_3 = _a.sent();
                // Handle errors and return an error message if necessary
                throw new Error(err_3.message || "An error occurred.");
            case 6: return [2 /*return*/];
        }
    });
}); };
var getBookById = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var result, id, error_4, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                result = void 0;
                id = req.query.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Book.findById(id)];
            case 2:
                result = _a.sent();
                if (!result) {
                    return [2 /*return*/, new Error("Cannot find the book.")];
                } // Use the find method to retrieve data
                console.log('Retrieved data :', result);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error("Error retrieving data: ".concat(error_4));
                return [2 /*return*/, new Error("Cannot find the book.")];
            case 4: return [2 /*return*/, result];
            case 5:
                err_4 = _a.sent();
                // Handle errors and return an error message if necessary
                throw new Error(err_4.message || "An error occurred.");
            case 6: return [2 /*return*/];
        }
    });
}); };
var deleteBookById = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var result, id, error_5, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                result = void 0;
                id = req.query.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Book.findByIdAndRemove(id)];
            case 2:
                result = _a.sent();
                if (!result) {
                    return [2 /*return*/, new Error("Cannot find the book.")];
                } // Use the find method to retrieve data
                console.log('Retrieved data :', result);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.error("Error retrieving data: ".concat(error_5));
                throw new Error("Cannot find the book.");
            case 4: return [2 /*return*/, result];
            case 5:
                err_5 = _a.sent();
                // Handle errors and return an error message if necessary
                throw new Error(err_5.message || "An error occurred.");
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    addBook: addBook,
    editBook: editBook,
    getAllBook: getAllBook,
    getBookById: getBookById,
    deleteBookById: deleteBookById
};
