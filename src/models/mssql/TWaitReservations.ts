import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TWaitReservationsAttributes {
  idWaitReservation: number;
  idUser: number;
  idBook: number;
  varUserName: string;
  varBookName: string;
  varPriority: string;
  dtimeDateReservation: Date;
  dtimeDateReservationEnd: Date;
  intStatus?: number;
  bitIsActive?: boolean;
  dtimeCreatedAt: Date;
  dtimeUpdatedAt: Date;
  bitIsDeleted?: boolean;
}

export type TWaitReservationsPk = "idWaitReservation";
export type TWaitReservationsId = TWaitReservations[TWaitReservationsPk];
export type TWaitReservationsOptionalAttributes = "idWaitReservation" | "intStatus" | "bitIsActive" | "dtimeCreatedAt" | "dtimeUpdatedAt" | "bitIsDeleted";
export type TWaitReservationsCreationAttributes = Optional<TWaitReservationsAttributes, TWaitReservationsOptionalAttributes>;

export class TWaitReservations extends Model<TWaitReservationsAttributes, TWaitReservationsCreationAttributes> implements TWaitReservationsAttributes {
  idWaitReservation!: number;
  idUser!: number;
  idBook!: number;
  varUserName!: string;
  varBookName!: string;
  varPriority!: string;
  dtimeDateReservation!: Date;
  dtimeDateReservationEnd!: Date;
  intStatus?: number;
  bitIsActive?: boolean;
  dtimeCreatedAt!: Date;
  dtimeUpdatedAt!: Date;
  bitIsDeleted?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof TWaitReservations {
    return TWaitReservations.init({
    idWaitReservation: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idBook: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    varUserName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    varBookName: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    varPriority: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    dtimeDateReservation: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dtimeDateReservationEnd: {
      type: DataTypes.DATE,
      allowNull: false
    },
    intStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    bitIsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    dtimeCreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('sysdatetime')
    },
    dtimeUpdatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('sysdatetime')
    },
    bitIsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'TWaitReservations',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__TWaitRes__A0EA3512CDD79E28",
        unique: true,
        fields: [
          { name: "idWaitReservation" },
        ]
      },
    ]
  });
  }
}
