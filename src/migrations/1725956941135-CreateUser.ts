import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1725956941135 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "first_name", type: "varchar" },
                    { name: "last_name", type: "varchar" },
                    { name: "date_of_birth", type: "date" },
                    { name: "email", type: "varchar", isUnique: true },
                    { name: "password", type: "varchar" },
                    { name: "avatar_url", type: "varchar", isNullable: true },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()" },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }
}
