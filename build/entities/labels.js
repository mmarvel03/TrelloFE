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
exports.Label = void 0;
const typeorm_1 = require("typeorm");
const workspace_1 = require("./workspace");
const cardLabel_1 = require("./cardLabel");
let Label = class Label {
};
exports.Label = Label;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Label.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Label.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Label.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Label.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cardLabel_1.CardLabel, cardLabel => cardLabel.label),
    __metadata("design:type", Array)
], Label.prototype, "cardLabel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => workspace_1.Workspace, workspace => workspace.label),
    __metadata("design:type", workspace_1.Workspace)
], Label.prototype, "workspace", void 0);
exports.Label = Label = __decorate([
    (0, typeorm_1.Entity)()
], Label);
//# sourceMappingURL=labels.js.map