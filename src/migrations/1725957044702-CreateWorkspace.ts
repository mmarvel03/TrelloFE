import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorkspace1725957044702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "workspace",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "name", type: "varchar" },
                    { name: "background_img_url", type: "varchar", isNullable: true },
                    { name: "visibility", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("workspace");
    }
}

