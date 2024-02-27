import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewTable1709024608548 implements MigrationInterface {
  name = 'NewTable1709024608548';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "animals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "animalType" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_6154c334bbb19186788468bce5c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "animals"`);
  }
}
