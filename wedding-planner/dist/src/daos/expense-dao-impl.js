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
var connection_1 = require("../utils/connection");
var expense_1 = __importDefault(require("../entities/expense"));
var ExpenseDAOImpl = /** @class */ (function () {
    function ExpenseDAOImpl() {
    }
    ExpenseDAOImpl.prototype.createExpense = function (expense) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "insert into expense(wedding_id, reason, amount, image) values ($1,$2,$3,$4) returning id";
                        values = [expense.weddingID, expense.reason, expense.amount, expense.image];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, connection_1.client.query(sql, values)];
                    case 2:
                        result = _a.sent();
                        expense.ID = result.rows[0].id;
                        return [2 /*return*/, expense];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1.name + ": " + err_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExpenseDAOImpl.prototype.getAllExpenses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, result, expenses, _i, _a, row, expense_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sql = "select * from expense";
                        return [4 /*yield*/, connection_1.client.query(sql)];
                    case 1:
                        result = _b.sent();
                        expenses = [];
                        if (result.rowCount === 0)
                            expenses.push(new expense_1["default"](0, 0, '', -1, ''));
                        else {
                            for (_i = 0, _a = result.rows; _i < _a.length; _i++) {
                                row = _a[_i];
                                expense_2 = new expense_1["default"](row.id, row.wedding_id, row.reason, Number(row.amount), row.image);
                                expenses.push(expense_2);
                            }
                        }
                        return [2 /*return*/, expenses];
                }
            });
        });
    };
    ExpenseDAOImpl.prototype.getExpenseByID = function (expenseID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result, row, expense;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select * from expense where id = $1";
                        values = [expenseID];
                        return [4 /*yield*/, connection_1.client.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0)
                            return [2 /*return*/, new expense_1["default"](0, 0, '', -1, '')];
                        row = result.rows[0];
                        expense = new expense_1["default"](row.id, row.wedding_id, row.reason, Number(row.amount), row.image);
                        return [2 /*return*/, expense];
                }
            });
        });
    };
    ExpenseDAOImpl.prototype.getExpensesByWeddingID = function (weddingID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result, expenses, _i, _a, row, expense_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sql = "select * from expense where wedding_id = $1";
                        values = [weddingID];
                        return [4 /*yield*/, connection_1.client.query(sql, values)];
                    case 1:
                        result = _b.sent();
                        expenses = [];
                        if (result.rowCount === 0)
                            expenses.push(new expense_1["default"](0, 0, '', -1, ''));
                        else {
                            for (_i = 0, _a = result.rows; _i < _a.length; _i++) {
                                row = _a[_i];
                                expense_3 = new expense_1["default"](row.id, row.wedding_id, row.reason, Number(row.amount), row.image);
                                expenses.push(expense_3);
                            }
                        }
                        return [2 /*return*/, expenses];
                }
            });
        });
    };
    ExpenseDAOImpl.prototype.updateExpenseByID = function (expense) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result, row, newExpense;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'update expense set wedding_id = $1, reason = $2, amount = $3, image = $4 where id = $5 returning *';
                        values = [expense.weddingID, expense.reason, expense.amount, expense.image, expense.ID];
                        return [4 /*yield*/, connection_1.client.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0)
                            return [2 /*return*/, new expense_1["default"](0, 0, '', -1, '')];
                        row = result.rows[0];
                        newExpense = new expense_1["default"](row.id, row.wedding_id, row.reason, Number(row.amount), row.image);
                        return [2 /*return*/, newExpense];
                }
            });
        });
    };
    ExpenseDAOImpl.prototype.deleteExpenseByID = function (expenseID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'delete from expense where id = $1';
                        values = [expenseID];
                        return [4 /*yield*/, connection_1.client.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0)
                            return [2 /*return*/, false];
                        else
                            return [2 /*return*/, true];
                        return [2 /*return*/];
                }
            });
        });
    };
    return ExpenseDAOImpl;
}());
exports["default"] = ExpenseDAOImpl;
