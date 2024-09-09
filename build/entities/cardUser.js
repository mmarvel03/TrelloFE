"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardUser = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const cards_1 = require("./cards");
let CardUser = class CardUser {
};
exports.CardUser = CardUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CardUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CardUser.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CardUser.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CardUser.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, user => user.cardUser),
    __metadata("design:type", user_1.User)
], CardUser.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cards_1.Card, card => card.cardUser),
    __metadata("design:type", cards_1.Card)
], CardUser.prototype, "card", void 0);
exports.CardUser = CardUser = __decorate([
    (0, typeorm_1.Entity)()
], CardUser);
//# sourceMappingURL=cardUser.js.map