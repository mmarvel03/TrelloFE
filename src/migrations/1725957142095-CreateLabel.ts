import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLabel1725957142095 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "labels",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "name", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
                    { name: "workspace_id", type: "int" },
                ],
            })
        );
        await queryRunner.createForeignKey(
            "labels",
            new TableForeignKey({
                columnNames: ["workspace_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "workspace",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("labels");
    }

}
