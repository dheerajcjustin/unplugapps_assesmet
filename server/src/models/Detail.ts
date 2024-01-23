import {
      Model,
      Table,
      Column,
      DataType,
      ForeignKey,
} from "sequelize-typescript";
import { ItemMaster } from "./ItemMaster"; // Import the ItemMaster model
import Header from "./Header";

@Table({
      tableName: "detail_table",
})
export class DetailTable extends Model {
      @ForeignKey(() => Header)
      @Column({
            type: DataType.INTEGER,
            field: "vr_no",
      })
      vr_no!: number;

      @Column({
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "sr_no",
      })
      sr_no!: number;

      @ForeignKey(() => ItemMaster)
      @Column({
            type: DataType.STRING(20),
            field: "item_code",
      })
      item_code!: string;

      @Column({
            type: DataType.STRING(200),
            field: "item_name",
      })
      item_name!: string;

      @Column({
            type: DataType.STRING(3000),
            field: "description",
      })
      description!: string;

      @Column({
            type: DataType.INTEGER({ precision: 18, scale: 3 }),
            field: "qty",
      })
      qty!: number;

      @Column({
            type: DataType.DECIMAL({ precision: 18, scale: 2 }),
            field: "rate",
      })
      rate!: number;
}
