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
var wedding_1 = __importDefault(require("../../src/entities/wedding"));
var test_connection_1 = require("./test_connection");
var WeddingDAOTestImpl = /** @class */ (function () {
    function WeddingDAOTestImpl() {
    }
    WeddingDAOTestImpl.prototype.createWedding = function (wedding) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "insert into wedding(wedding_date, wedding_location, person_name, budget) values ($1, $2, $3, $4) returning id";
                        values = [wedding.date, wedding.location, wedding.name, wedding.budget];
                        return [4 /*yield*/, test_connection_1.client.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        wedding.ID = result.rows[0].id;
                        return [2 /*return*/, wedding];
                }
            });
        });
    };
    WeddingDAOTestImpl.prototype.getAllWeddings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, result, weddings, _i, _a, row, wedding;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sql = "select * from wedding";
                        return [4 /*yield*/, test_connection_1.client.query(sql)];
                    case 1:
                        result = _b.sent();
                        weddings = [];
                        if (result.rowCount === 0)
                            weddings.push(new wedding_1["default"](0, '01-01-1900', '', '', -1));
                        else {
                            for (_i = 0, _a = result.rows; _i < _a.length; _i++) {
                                row = _a[_i];
                                wedding = new wedding_1["default"](row.id, row.wedding_date, row.wedding_location, row.person_name, Number(row.budget));
                                weddings.push(wedding);
                            }
                            return [2 /*return*/, weddings];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WeddingDAOTestImpl.prototype.getWeddingByID = function (weddingID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result, row, wedding;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select * from wedding where id = $1";
                        values = [weddingID];
                        return [4 /*yield*/, test_connection_1.client.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0)
                            return [2 /*return*/, new wedding_1["default"](0, '01-01-1900', '', '', -1)];
                        row = result.rows[0];
                        wedding = new wedding_1["default"](row.id, row.wedding_date, row.wedding_location, row.person_name, Number(row.budget));
                        return [2 /*return*/, wedding];
                }
            });
        });
    };
    WeddingDAOTestImpl.prototype.updateWeddingByID = function (wedding) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result, row, newWedding;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "update wedding set wedding_date = $1, wedding_location = $2, person_name = $3, budget = $4 where id = $5 returning *";
                        values = [wedding.date, wedding.location, wedding.name, wedding.budget, wedding.ID];
                        return [4 /*yield*/, test_connection_1.client.query(sql, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rowCount === 0)
                            return [2 /*return*/, new wedding_1["default"](0, '01-01-1900', '', '', -1)];
                        row = result.rows[0];
                        newWedding = new wedding_1["default"](row.id, row.wedding_date, row.wedding_location, row.person_name, Number(row.budget));
                        return [2 /*return*/, newWedding];
                }
            });
        });
    };
    WeddingDAOTestImpl.prototype.deleteWeddingByID = function (weddingID) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "delete from wedding where id = $1";
                        values = [weddingID];
                        return [4 /*yield*/, test_connection_1.client.query(sql, values)];
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
    return WeddingDAOTestImpl;
}());
exports["default"] = WeddingDAOTestImpl;
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        test_connection_1.client.end(); // should close connections once test is over;
        return [2 /*return*/];
    });
}); });
