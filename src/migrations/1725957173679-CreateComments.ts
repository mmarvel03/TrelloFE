import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateComments1725957173679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "comments",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "activity", type: "varchar" },
                    { name: "content", type: "text" },
                    { name: "visibility", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
                    { name: "user_id", type: "int" },
                    { name: "card_id", type: "int" },
                ],
            })
        );
        await queryRunner.createForeignKey(
            "comments",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "user",
                onDelete: "CASCADE",
            })
        );
        await queryRunner.createForeignKey(
            "comments",
            new TableForeignKey({
                columnNames: ["card_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "cards",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("comments");
    }

}
