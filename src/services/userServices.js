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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleUser = exports.updateUser = exports.deleteUsers = exports.insertUser = exports.getUser = exports.getAllUser = void 0;
const db_1 = __importDefault(require("../lib/db"));
const error_1 = require("../utils/constant/error");
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.users.findMany();
});
exports.getAllUser = getAllUser;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.users.findFirst({
        where: {
            id,
        },
    });
});
exports.getUser = getUser;
const insertUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.users.create({
        data: body,
    });
});
exports.insertUser = insertUser;
const deleteUsers = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield db_1.default.users.findFirst({
        where: {
            id,
        },
    });
    if (!existUser) {
        throw new Error(error_1.ERROR_MESSAGE.DATA_NOT_FOUND);
    }
    yield db_1.default.users.delete({
        where: {
            id,
        },
    });
    return " Sukses delete user dengan id " + id;
});
exports.deleteUsers = deleteUsers;
const updateUser = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield db_1.default.users.findFirst({
        where: {
            id,
        },
    });
    if (!existUser) {
        throw new Error("User not found!!");
    }
    return db_1.default.users.update({
        where: {
            id,
        },
        data: body,
    });
});
exports.updateUser = updateUser;
// update untuk versi function
// export function updateUserFUNC(id: string, body: Users): Promise<Users> {
//     return db.users.update({
//         where: {
//             id
//         },
//         data: body
//     })
// }
const getSingleUser = (condition) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.users.findFirst({
        where: condition,
    });
});
exports.getSingleUser = getSingleUser;
