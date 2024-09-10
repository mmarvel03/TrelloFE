import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorkspaceUser1725957052247 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "workspace_users",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "role", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "user_id", type: "int" },
                    { name: "workspace_id", type: "int" },
                ],
            })
        );
        await queryRunner.createTable(
            new Table({
                name: "workspace_users",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "role", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "user_id", type: "int" },
                    { name: "workspace_id", type: "int" },
                ],
            })
        );
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("workspace_users");
    }

}
