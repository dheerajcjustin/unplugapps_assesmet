import { Model, Table, Column, DataType, NotNull } from "sequelize-typescript";

@Table({
      tableName: "headers",
})
export default class Header extends Model {
      @Column({
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "vr_no",
      })
      vr_no?: number;

      @Column({
            type: DataType.DATE,
            field: "vr_date",

            defaultValue: DataType.NOW,
      })
      vr_date?: Date;

      @Column({
            type: DataType.STRING(200),
            field: "ac_name",
      })
      ac_name?: string;

      @Column({
            type: DataType.DECIMAL(18, 2),
            field: "ac_amt",
            defaultValue: "0",
      })
      ac_amt?: number;

      @Column({
            type: DataType.STRING(1),
            field: "status",
            allowNull: false,
            defaultValue: "A",
            validate: {
                  isIn: [["A", "I"]],
            },
      })
      status?: string;
}
