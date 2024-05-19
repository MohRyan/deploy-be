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
exports.updateProfile = exports.deleteProfile = exports.getProfile = void 0;
const db_1 = __importDefault(require("../lib/db"));
const getProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.profile.findFirst({
        where: {
            id,
        },
    });
});
exports.getProfile = getProfile;
const deleteProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.profile.delete({
        where: {
            id,
        },
    });
});
exports.deleteProfile = deleteProfile;
const updateProfile = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    return db_1.default.profile.update({
        where: {
            id,
        },
        data: body,
    });
});
exports.updateProfile = updateProfile;
