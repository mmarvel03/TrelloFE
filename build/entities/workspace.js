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
exports.Workspace = void 0;
const typeorm_1 = require("typeorm");
const labels_1 = require("./labels");
const lists_1 = require("./lists");
const workspaceUsers_1 = require("./workspaceUsers");
let Workspace = class Workspace {
};
exports.Workspace = Workspace;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Workspace.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Workspace.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Workspace.prototype, "background_img_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Workspace.prototype, "visibility", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Workspace.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Workspace.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => labels_1.Label, label => label.workspace),
    __metadata("design:type", Array)
], Workspace.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lists_1.List, list => list.workspace),
    __metadata("design:type", Array)
], Workspace.prototype, "list", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => workspaceUsers_1.WorkspaceUsers, workspaceUsers => workspaceUsers.workspace),
    __metadata("design:type", Array)
], Workspace.prototype, "workspaceUsers", void 0);
exports.Workspace = Workspace = __decorate([
    (0, typeorm_1.Entity)()
], Workspace);
//# sourceMappingURL=workspace.js.map