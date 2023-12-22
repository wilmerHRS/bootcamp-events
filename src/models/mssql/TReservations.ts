import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TBooks, TBooksId } from './TBooks';
import type { TUsers, TUsersId } from './TUsers';

export interface TReservationsAttributes {
  idResevation: number;
  idUser: number;
  idBook: number;
  varUserName: string;
  varBookName: string;
  dtimeDateReservation: Date;
  dtimeDateReservationEnd: Date;
  intStatus?: number;
  bitIsActive?: boolean;
  dtimeCreatedAt: Date;
  dtimeUpdatedAt: Date;
  bitIsDeleted?: boolean;
}

export type TReservationsPk = "idResevation";
export type TReservationsId = TReservations[TReservationsPk];
export type TReservationsOptionalAttributes = "idResevation" | "intStatus" | "bitIsActive" | "dtimeCreatedAt" | "dtimeUpdatedAt" | "bitIsDeleted";
export type TReservationsCreationAttributes = Optional<TReservationsAttributes, TReservationsOptionalAttributes>;

export class TReservations extends Model<TReservationsAttributes, TReservationsCreationAttributes> implements TReservationsAttributes {
  idResevation!: number;
  idUser!: number;
  idBook!: number;
  varUserName!: string;
  varBookName!: string;
  dtimeDateReservation!: Date;
  dtimeDateReservationEnd!: Date;
  intStatus?: number;
  bitIsActive?: boolean;
  dtimeCreatedAt!: Date;
  dtimeUpdatedAt!: Date;
  bitIsDeleted?: boolean;

  // TReservations belongsTo TBooks via idBook
  idBook_TBook!: TBooks;
  getIdBook_TBook!: Sequelize.BelongsToGetAssociationMixin<TBooks>;
  setIdBook_TBook!: Sequelize.BelongsToSetAssociationMixin<TBooks, TBooksId>;
  createIdBook_TBook!: Sequelize.BelongsToCreateAssociationMixin<TBooks>;
  // TReservations belongsTo TUsers via idUser
  idUser_TUser!: TUsers;
  getIdUser_TUser!: Sequelize.BelongsToGetAssociationMixin<TUsers>;
  setIdUser_TUser!: Sequelize.BelongsToSetAssociationMixin<TUsers, TUsersId>;
  createIdUser_TUser!: Sequelize.BelongsToCreateAssociationMixin<TUsers>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TReservations {
    return TReservations.init({
    idResevation: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TUsers',
        key: 'idUser'
      }
    },
    idBook: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TBooks',
        key: 'idBook'
      }
    },
    varUserName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    varBookName: {
      type: DataTypes.STRING(150),
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
    tableName: 'TReservations',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__TReserva__9B182A3657822E61",
        unique: true,
        fields: [
          { name: "idResevation" },
        ]
      },
    ]
  });
  }
}
