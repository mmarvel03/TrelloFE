import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCardLabels1725957705913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })
        );
        await queryRunner.createForeignKey(
            "card_label",
            new TableForeignKey({
                columnNames: ["label_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "labels",
                onDelete: "CASCADE",
            })
        );
        await queryRunner.createForeignKey(
            "card_label",
            new TableForeignKey({
                columnNames: ["card_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "cards",
                onDelete: "CASCADE",
            })
        );


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("card_label");
    }

}
