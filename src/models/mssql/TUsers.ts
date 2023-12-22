import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TReservations, TReservationsId } from './TReservations';

export interface TUsersAttributes {
  idUser: number;
  varFirstName: string;
  varLastName: string;
  varEmail: string;
  varPassword: string;
  intStatus?: number;
  dtimeCreatedAt: Date;
  dtimeUpdatedAt: Date;
  bitIsDeleted?: boolean;
}

export type TUsersPk = "idUser";
export type TUsersId = TUsers[TUsersPk];
export type TUsersOptionalAttributes = "idUser" | "intStatus" | "dtimeCreatedAt" | "dtimeUpdatedAt" | "bitIsDeleted";
export type TUsersCreationAttributes = Optional<TUsersAttributes, TUsersOptionalAttributes>;

export class TUsers extends Model<TUsersAttributes, TUsersCreationAttributes> implements TUsersAttributes {
  idUser!: number;
  varFirstName!: string;
  varLastName!: string;
  varEmail!: string;
  varPassword!: string;
  intStatus?: number;
  dtimeCreatedAt!: Date;
  dtimeUpdatedAt!: Date;
  bitIsDeleted?: boolean;

  // TUsers hasMany TReservations via idUser
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TUsers {
    return TUsers.init({
    idUser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    varFirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    varLastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    varEmail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    varPassword: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    intStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
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
    tableName: 'TUsers',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__TUsers__3717C98237962AD3",
        unique: true,
        fields: [
          { name: "idUser" },
        ]
      },
    ]
  });
  }
}
