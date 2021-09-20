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
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var wedding_1 = __importDefault(require("./entities/wedding"));
var expense_1 = __importDefault(require("./entities/expense"));
var wedding_service_impl_1 = __importDefault(require("./services/wedding-service-impl"));
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cors_1["default"]());
var weddingService = new wedding_service_impl_1["default"]();
app.post('/weddings', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, date, location, name, budget, wedding;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = [req.body.date, req.body.location, req.body.name, req.body.budget], date = _a[0], location = _a[1], name = _a[2], budget = _a[3];
                wedding = new wedding_1["default"](0, date, location, name, budget);
                return [4 /*yield*/, weddingService.createWedding(wedding)];
            case 1:
                wedding = _b.sent();
                res.status(201);
                res.send("New Wedding Created");
                return [2 /*return*/];
        }
    });
}); });
app.post('/expenses', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, weddingID, reason, amount, image, expense, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = [req.body.weddingID, req.body.reason, req.body.amount, req.body.image], weddingID = _a[0], reason = _a[1], amount = _a[2], image = _a[3];
                expense = new expense_1["default"](0, weddingID, reason, amount, image);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, weddingService.logExpense(expense)];
            case 2:
                expense = _b.sent();
                res.status(201);
                res.send("New Expense Logged");
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                res.status(404);
                res.send(err_1.name + ": " + err_1.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/weddings', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var weddings, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, weddingService.listAllWeddings()];
            case 1:
                weddings = _a.sent();
                res.status(200);
                res.send(weddings);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(404);
                res.send(err_2.name + ": " + err_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/expenses', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var expenses, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, weddingService.listAllExpenses()];
            case 1:
                expenses = _a.sent();
                res.status(200);
                res.send(expenses);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(404);
                res.send(err_3.name + ": " + err_3.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/weddings/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var wedding, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, weddingService.retrieveWeddingByID(Number(req.params.id))];
            case 1:
                wedding = _a.sent();
                res.status(200);
                res.send(wedding);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(404);
                res.send(err_4.name + ": " + err_4.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/expenses/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var expense, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, weddingService.retrieveExpenseByID(Number(req.params.id))];
            case 1:
                expense = _a.sent();
                res.status(200);
                res.send(expense);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(404);
                res.send(err_5.name + ": " + err_5.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get('/weddings/:id/expenses', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var expenses, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, weddingService.listExpensesByWeddingID(Number(req.params.id))];
            case 1:
                expenses = _a.sent();
                res.status(200);
                res.send(expenses);
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res.status(404);
                res.send(err_6.name + ": " + err_6.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.put('/weddings', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ID, date, location, name, budget, wedding, err_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = [req.body.ID, req.body.date, req.body.location, req.body.name, req.body.budget], ID = _a[0], date = _a[1], location = _a[2], name = _a[3], budget = _a[4];
                wedding = new wedding_1["default"](ID, date, location, name, budget);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, weddingService.updateWeddingInformation(wedding)];
            case 2:
                wedding = _b.sent();
                res.status(200);
                res.send("Wedding with ID " + ID + " has been updated");
                return [3 /*break*/, 4];
            case 3:
                err_7 = _b.sent();
                res.status(404);
                res.send(err_7.name + ": " + err_7.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put('/expenses', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ID, weddingID, reason, amount, image, expense, err_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = [req.body.ID, req.body.weddingID, req.body.reason, req.body.amount, req.body.image], ID = _a[0], weddingID = _a[1], reason = _a[2], amount = _a[3], image = _a[4];
                expense = new expense_1["default"](ID, weddingID, reason, amount, image);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, weddingService.updateExpenseInformation(expense)];
            case 2:
                expense = _b.sent();
                res.status(200);
                res.send("Expense with ID " + ID + " has been updated");
                return [3 /*break*/, 4];
            case 3:
                err_8 = _b.sent();
                res.status(404);
                res.send(err_8.name + ": " + err_8.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app["delete"]('/weddings/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bool, err_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, weddingService.deleteWeddingByID(Number(req.params.id))];
            case 1:
                bool = _a.sent();
                res.status(205);
                res.send("Wedding with ID " + req.params.id + " has been deleted");
                return [3 /*break*/, 3];
            case 2:
                err_9 = _a.sent();
                res.status(404);
                res.send(err_9.name + ": " + err_9.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app["delete"]('/expenses/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bool, err_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, weddingService.deleteExpenseByID(Number(req.params.id))];
            case 1:
                bool = _a.sent();
                res.status(205);
                res.send("Expense with ID " + req.params.id + " has been deleted");
                return [3 /*break*/, 3];
            case 2:
                err_10 = _a.sent();
                res.status(404);
                res.send(err_10.name + ": " + err_10.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () { console.log("Application Started"); });
