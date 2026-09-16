"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    if (dateParts[1] === undefined || dateParts[2] === undefined) {
        return new Date();
    }
    return new Date(dateParts[2], dateParts[1] - 1);
};
exports.dateStringToDate = dateStringToDate;
//# sourceMappingURL=utils.js.map