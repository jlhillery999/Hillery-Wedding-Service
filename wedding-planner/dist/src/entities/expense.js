"use strict";
exports.__esModule = true;
var Expense = /** @class */ (function () {
    function Expense(ID, weddingID, reason, amount, image) {
        this.ID = ID;
        this.weddingID = weddingID;
        this.reason = reason;
        this.amount = amount;
        this.image = image;
    }
    return Expense;
}());
exports["default"] = Expense;
