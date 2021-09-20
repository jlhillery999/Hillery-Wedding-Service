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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var wedding_1 = __importDefault(require("../src/entities/wedding"));
var wedding_dao_test_impl_1 = __importDefault(require("./src/wedding-dao-test-impl"));
var weddingDAO = new wedding_dao_test_impl_1["default"]();
test("Create a wedding", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date(new Date().toDateString()).toISOString(), 'Atlanta', "Jarrick", 10000.00))];
            case 1:
                result = _a.sent();
                expect(result.ID).not.toBe(0);
                return [2 /*return*/];
        }
    });
}); });
test("Get all weddings", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date(new Date().toDateString()).toISOString(), 'Decatur', "Aaron", 20000.00))];
            case 1:
                _a.sent();
                return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date(new Date().toDateString()).toISOString(), 'Jonesboro', "Jada", 15000.00))];
            case 2:
                _a.sent();
                return [4 /*yield*/, weddingDAO.getAllWeddings()];
            case 3:
                result = _a.sent();
                expect(result.length).toBeGreaterThanOrEqual(2);
                return [2 /*return*/];
        }
    });
}); });
test("Get a wedding by its ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date(new Date().toDateString()).toISOString(), 'Macon', "Lloryn", 25000.00))];
            case 1:
                wedding = _a.sent();
                return [4 /*yield*/, weddingDAO.getWeddingByID(wedding.ID)];
            case 2:
                result = _a.sent();
                expect(result).toStrictEqual(wedding);
                return [2 /*return*/];
        }
    });
}); });
test("Update a wedding by its ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, newWedding, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date(new Date().toDateString()).toISOString(), 'Savannah', "Zabian", 30000.00))];
            case 1:
                wedding = _a.sent();
                newWedding = new wedding_1["default"](wedding.ID, new Date(new Date().toDateString()).toISOString(), "Brunswick", "Zabian", 22500.00);
                return [4 /*yield*/, weddingDAO.updateWeddingByID(newWedding)];
            case 2:
                result = _a.sent();
                expect(result).toStrictEqual(newWedding);
                return [2 /*return*/];
        }
    });
}); });
test("Delete a wedding by its ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date(new Date().toDateString()).toISOString(), 'Ellijay', "Kathryn", 30000.00))];
            case 1:
                wedding = _a.sent();
                return [4 /*yield*/, weddingDAO.deleteWeddingByID(wedding.ID)];
            case 2:
                result = _a.sent();
                expect(result).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
