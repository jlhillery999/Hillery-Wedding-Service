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
var expense_1 = __importDefault(require("../src/entities/expense"));
var wedding_1 = __importDefault(require("../src/entities/wedding"));
var wedding_dao_test_impl_1 = __importDefault(require("./src/wedding-dao-test-impl"));
var expense_dao_test_impl_1 = __importDefault(require("./src/expense-dao-test-impl"));
var weddingDAO = new wedding_dao_test_impl_1["default"]();
var expenseDAO = new expense_dao_test_impl_1["default"]();
test("Create new expense", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date().toISOString(), 'Lawrenceville', "Nick", 10000.00))];
            case 1:
                wedding = _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(new expense_1["default"](0, wedding.ID, "Cake Order", 350.00, ''))];
            case 2:
                result = _a.sent();
                expect(result.ID).not.toBe(0);
                return [2 /*return*/];
        }
    });
}); });
test("Get all expenses", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date().toISOString(), 'Augusta', "Joe", 10000.00))];
            case 1:
                wedding = _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(new expense_1["default"](0, wedding.ID, "Catering", 1500.00, ''))];
            case 2:
                _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(new expense_1["default"](0, wedding.ID, "Venue", 5000.00, ''))];
            case 3:
                _a.sent();
                return [4 /*yield*/, expenseDAO.getAllExpenses()];
            case 4:
                result = _a.sent();
                expect(result.length).toBeGreaterThanOrEqual(2);
                return [2 /*return*/];
        }
    });
}); });
test("Get expense by ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, expense, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date().toISOString(), 'Dublin', "Celinna", 10000.00))];
            case 1:
                wedding = _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(new expense_1["default"](0, wedding.ID, "Dress", 3000.00, ''))];
            case 2:
                expense = _a.sent();
                return [4 /*yield*/, expenseDAO.getExpenseByID(expense.ID)];
            case 3:
                result = _a.sent();
                expect(result).toStrictEqual(expense);
                return [2 /*return*/];
        }
    });
}); });
test("Get all expenses for wedding by wedding ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date().toISOString(), 'Dalton', "Charlie", 10000.00))];
            case 1:
                wedding = _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(new expense_1["default"](0, wedding.ID, "Open Bar", 800.00, ''))];
            case 2:
                _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(new expense_1["default"](0, wedding.ID, "Security", 300.00, ''))];
            case 3:
                _a.sent();
                return [4 /*yield*/, expenseDAO.getExpensesByWeddingID(wedding.ID)];
            case 4:
                result = _a.sent();
                expect(result[0].weddingID).toBe(wedding.ID);
                return [2 /*return*/];
        }
    });
}); });
test("Update expense", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, expense, newExpense, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date().toISOString(), 'Hampton', "Willow", 10000.00))];
            case 1:
                wedding = _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(new expense_1["default"](0, wedding.ID, "Tuxedo", 1200.00, ''))];
            case 2:
                expense = _a.sent();
                newExpense = new expense_1["default"](expense.ID, wedding.ID, "Tuxedo", 1000.00, '');
                return [4 /*yield*/, expenseDAO.updateExpenseByID(newExpense)];
            case 3:
                result = _a.sent();
                expect(result).toStrictEqual(newExpense);
                return [2 /*return*/];
        }
    });
}); });
test("Delete expense by ID", function () { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, expense, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, weddingDAO.createWedding(new wedding_1["default"](0, new Date().toISOString(), 'Savannah', "Da'Joun", 10000.00))];
            case 1:
                wedding = _a.sent();
                return [4 /*yield*/, expenseDAO.createExpense(new expense_1["default"](0, wedding.ID, "Band", 600.00, ''))];
            case 2:
                expense = _a.sent();
                return [4 /*yield*/, expenseDAO.deleteExpenseByID(expense.ID)];
            case 3:
                result = _a.sent();
                expect(result).toBeTruthy();
                return [2 /*return*/];
        }
    });
}); });
