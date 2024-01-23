import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
      tableName: "item_master",
})
export class ItemMaster extends Model {
      @Column({
            type: DataType.STRING(20),
            primaryKey: true,
            field: "item_code",
      })
      item_code!: string;

      @Column({
            type: DataType.STRING(200),
            field: "item_name",
      })
      item_name!: string;
}
