"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Book_controller_1 = __importDefault(require("../../Controllers/Book.controller"));
var Book_shcema_1 = __importDefault(require("../../Constants/Schema/Book.shcema"));
var router = express_1.default.Router();
var celebrate_1 = require("celebrate");
router.post('/add', (0, celebrate_1.celebrate)(Book_shcema_1.default.add), Book_controller_1.default.addBook);
router.put('/edit', (0, celebrate_1.celebrate)(Book_shcema_1.default.edit), Book_controller_1.default.editBook);
router.get('/all', Book_controller_1.default.getAllBook);
router.get('/', (0, celebrate_1.celebrate)(Book_shcema_1.default.id), Book_controller_1.default.getBookById);
router.delete('/delete', (0, celebrate_1.celebrate)(Book_shcema_1.default.id), Book_controller_1.default.deleteBookById);
exports.default = router;
