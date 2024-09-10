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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkspaceUser1725957052247 = void 0;
class CreateWorkspaceUser1725957052247 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new Table({
                name: "workspace_users",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "role", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "user_id", type: "int" },
                    { name: "workspace_id", type: "int" },
                ],
            }));
            yield queryRunner.createTable(new Table({
                name: "workspace_users",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "role", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "user_id", type: "int" },
                    { name: "workspace_id", type: "int" },
                ],
            }));
        });
    }
    ;
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("workspace_users");
        });
    }
}
exports.CreateWorkspaceUser1725957052247 = CreateWorkspaceUser1725957052247;
//# sourceMappingURL=1725957052247-CreateWorkspaceUser.js.map