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
var wedding_dao_impl_1 = __importDefault(require("../daos/wedding-dao-impl"));
var expense_dao_impl_1 = __importDefault(require("../daos/expense-dao-impl"));
var WeddingServiceImpl = /** @class */ (function () {
    function WeddingServiceImpl() {
        this.weddingDAO = new wedding_dao_impl_1["default"]();
        this.expenseDAO = new expense_dao_impl_1["default"]();
    }
    WeddingServiceImpl.prototype.createWedding = function (wedding) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weddingDAO.createWedding(wedding)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.logExpense = function (expense) {
        return __awaiter(this, void 0, void 0, function () {
            var wedding;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weddingDAO.getWeddingByID(expense.weddingID)];
                    case 1:
                        wedding = _a.sent();
                        if (!(wedding.ID === 0)) return [3 /*break*/, 2];
                        throw new ReferenceError("Wedding with ID of " + expense.ID + " not found");
                    case 2: return [4 /*yield*/, this.expenseDAO.createExpense(expense)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.listAllWeddings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var weddings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weddingDAO.getAllWeddings()];
                    case 1:
                        weddings = _a.sent();
                        if (weddings[0].ID === 0)
                            throw new ReferenceError("No weddings found");
                        else
                            return [2 /*return*/, weddings];
                        return [2 /*return*/];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.listAllExpenses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expenses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.expenseDAO.getAllExpenses()];
                    case 1:
                        expenses = _a.sent();
                        if (expenses[0].ID === 0)
                            throw new ReferenceError("No expenses found");
                        else
                            return [2 /*return*/, expenses];
                        return [2 /*return*/];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.retrieveWeddingByID = function (weddingID) {
        return __awaiter(this, void 0, void 0, function () {
            var wedding;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weddingDAO.getWeddingByID(weddingID)];
                    case 1:
                        wedding = _a.sent();
                        if (wedding.ID === 0)
                            throw new ReferenceError("Wedding with ID " + weddingID + " not found");
                        else
                            return [2 /*return*/, wedding];
                        return [2 /*return*/];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.retrieveExpenseByID = function (expenseID) {
        return __awaiter(this, void 0, void 0, function () {
            var expense;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.expenseDAO.getExpenseByID(expenseID)];
                    case 1:
                        expense = _a.sent();
                        if (expense.ID === 0)
                            throw new ReferenceError("Expense with ID " + expenseID + " not found");
                        else
                            return [2 /*return*/, expense];
                        return [2 /*return*/];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.listExpensesByWeddingID = function (weddingID) {
        return __awaiter(this, void 0, void 0, function () {
            var wedding, expenses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weddingDAO.getWeddingByID(weddingID)];
                    case 1:
                        wedding = _a.sent();
                        return [4 /*yield*/, this.expenseDAO.getExpensesByWeddingID(weddingID)];
                    case 2:
                        expenses = _a.sent();
                        if (wedding.ID === 0)
                            throw new ReferenceError("Wedding with ID " + weddingID + " not found");
                        else if (expenses[0].ID === 0)
                            throw new ReferenceError("No expenses found for wedding with ID " + weddingID);
                        else
                            return [2 /*return*/, expenses];
                        return [2 /*return*/];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.updateWeddingInformation = function (wedding) {
        return __awaiter(this, void 0, void 0, function () {
            var newWedding;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weddingDAO.updateWeddingByID(wedding)];
                    case 1:
                        newWedding = _a.sent();
                        if (newWedding.ID === 0)
                            throw new ReferenceError("Wedding with ID " + wedding.ID + " not found");
                        else
                            return [2 /*return*/, newWedding];
                        return [2 /*return*/];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.updateExpenseInformation = function (expense) {
        return __awaiter(this, void 0, void 0, function () {
            var wedding, newExpense;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weddingDAO.getWeddingByID(expense.weddingID)];
                    case 1:
                        wedding = _a.sent();
                        return [4 /*yield*/, this.expenseDAO.updateExpenseByID(expense)];
                    case 2:
                        newExpense = _a.sent();
                        if (wedding.ID === 0)
                            throw new ReferenceError("Wedding with ID " + expense.weddingID + " not found");
                        if (newExpense.ID === 0)
                            throw new ReferenceError("Expense with ID " + expense.ID + " not found");
                        else
                            return [2 /*return*/, newExpense];
                        return [2 /*return*/];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.deleteWeddingByID = function (weddingID) {
        return __awaiter(this, void 0, void 0, function () {
            var bool;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weddingDAO.deleteWeddingByID(weddingID)];
                    case 1:
                        bool = _a.sent();
                        if (!bool)
                            throw new ReferenceError("Wedding with ID " + weddingID + " not found");
                        return [2 /*return*/, bool];
                }
            });
        });
    };
    WeddingServiceImpl.prototype.deleteExpenseByID = function (expenseID) {
        return __awaiter(this, void 0, void 0, function () {
            var bool;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.expenseDAO.deleteExpenseByID(expenseID)];
                    case 1:
                        bool = _a.sent();
                        if (!bool)
                            throw new ReferenceError("Expense with ID " + expenseID + " not found");
                        return [2 /*return*/, bool];
                }
            });
        });
    };
    return WeddingServiceImpl;
}());
exports["default"] = WeddingServiceImpl;
