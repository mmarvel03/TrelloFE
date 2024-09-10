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
exports.CreateCardLabels1725957705913 = void 0;
class CreateCardLabels1725957705913 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new Table({
                name: "card_label",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "order", type: "int" },
                    { name: "content", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
                    { name: "label_id", type: "int" },
                    { name: "card_id", type: "int" },
                ],
            }));
            yield queryRunner.createForeignKey("card_label", new TableForeignKey({
                columnNames: ["label_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "labels",
                onDelete: "CASCADE",
            }));
            yield queryRunner.createForeignKey("card_label", new TableForeignKey({
                columnNames: ["card_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "cards",
                onDelete: "CASCADE",
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("card_label");
        });
    }
}
exports.CreateCardLabels1725957705913 = CreateCardLabels1725957705913;
//# sourceMappingURL=1725957705913-CreateCardLabels.js.map