import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TReservations, TReservationsId } from './TReservations';

export interface TBooksAttributes {
  idBook: number;
  varTitle: string;
  varCode: string;
  intStatus?: number;
  bitIsAvailable?: boolean;
  dtimeCreatedAt: Date;
  dtimeUpdatedAt: Date;
  bitIsDeleted?: boolean;
}

export type TBooksPk = "idBook";
export type TBooksId = TBooks[TBooksPk];
export type TBooksOptionalAttributes = "idBook" | "intStatus" | "bitIsAvailable" | "dtimeCreatedAt" | "dtimeUpdatedAt" | "bitIsDeleted";
export type TBooksCreationAttributes = Optional<TBooksAttributes, TBooksOptionalAttributes>;

export class TBooks extends Model<TBooksAttributes, TBooksCreationAttributes> implements TBooksAttributes {
  idBook!: number;
  varTitle!: string;
  varCode!: string;
  intStatus?: number;
  bitIsAvailable?: boolean;
  dtimeCreatedAt!: Date;
  dtimeUpdatedAt!: Date;
  bitIsDeleted?: boolean;

  // TBooks hasMany TReservations via idBook
  TReservations!: TReservations[];
  getTReservations!: Sequelize.HasManyGetAssociationsMixin<TReservations>;
  setTReservations!: Sequelize.HasManySetAssociationsMixin<TReservations, TReservationsId>;
  addTReservation!: Sequelize.HasManyAddAssociationMixin<TReservations, TReservationsId>;
  addTReservations!: Sequelize.HasManyAddAssociationsMixin<TReservations, TReservationsId>;
  createTReservation!: Sequelize.HasManyCreateAssociationMixin<TReservations>;
  removeTReservation!: Sequelize.HasManyRemoveAssociationMixin<TReservations, TReservationsId>;
  removeTReservations!: Sequelize.HasManyRemoveAssociationsMixin<TReservations, TReservationsId>;
  hasTReservation!: Sequelize.HasManyHasAssociationMixin<TReservations, TReservationsId>;
  hasTReservations!: Sequelize.HasManyHasAssociationsMixin<TReservations, TReservationsId>;
  countTReservations!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TBooks {
    return TBooks.init({
    idBook: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    varTitle: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    varCode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    intStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    bitIsAvailable: {
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
    tableName: 'TBooks',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__TBooks__D80547A1BC1E9587",
        unique: true,
        fields: [
          { name: "idBook" },
        ]
      },
    ]
  });
  }
}
