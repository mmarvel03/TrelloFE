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
exports.Card = void 0;
const typeorm_1 = require("typeorm");
const lists_1 = require("./lists");
const cardUser_1 = require("./cardUser");
const comments_1 = require("./comments");
const cardLabel_1 = require("./cardLabel");
let Card = class Card {
};
exports.Card = Card;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Card.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Card.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Card.prototype, "due_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Card.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Card.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lists_1.List, list => list.card),
    __metadata("design:type", lists_1.List)
], Card.prototype, "list", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cardUser_1.CardUser, cardUser => cardUser.card),
    __metadata("design:type", Array)
], Card.prototype, "cardUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_1.Comments, comments => comments.card),
    __metadata("design:type", Array)
], Card.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cardLabel_1.CardLabel, cardLabel => cardLabel.card),
    __metadata("design:type", Array)
], Card.prototype, "cardLabel", void 0);
exports.Card = Card = __decorate([
    (0, typeorm_1.Entity)()
], Card);
//# sourceMappingURL=cards.js.map