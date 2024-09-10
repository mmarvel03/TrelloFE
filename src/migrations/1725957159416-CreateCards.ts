import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCards1725957159416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cards",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "description", type: "text", isNullable: true },
                    { name: "due_date", type: "timestamp", isNullable: true },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
                    { name: "list_id", type: "int" },
                ],
            })
        );
        await queryRunner.createForeignKey(
            "cards",
            new TableForeignKey({
                columnNames: ["list_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "lists",
                onDelete: "CASCADE",
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cards");
    }
}
