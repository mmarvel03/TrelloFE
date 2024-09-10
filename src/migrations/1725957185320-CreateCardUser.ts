import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCardUser1725957185320 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "card_user",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "order", type: "int" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
                    { name: "user_id", type: "int" },
                    { name: "card_id", type: "int" },
                ],
            })
        );
        await queryRunner.createForeignKey(
            "card_user",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "user",
                onDelete: "CASCADE",
            })
        );
        await queryRunner.createForeignKey(
            "card_user",
            new TableForeignKey({
                columnNames: ["card_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "cards",
                onDelete: "CASCADE",
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("card_user");
    }

}
