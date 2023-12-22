import type { Sequelize } from "sequelize";
import { TBooks as _TBooks } from "./TBooks";
import type { TBooksAttributes, TBooksCreationAttributes } from "./TBooks";
import { TReservations as _TReservations } from "./TReservations";
import type { TReservationsAttributes, TReservationsCreationAttributes } from "./TReservations";
import { TUsers as _TUsers } from "./TUsers";
import type { TUsersAttributes, TUsersCreationAttributes } from "./TUsers";
import { TWaitReservations as _TWaitReservations } from "./TWaitReservations";
import type { TWaitReservationsAttributes, TWaitReservationsCreationAttributes } from "./TWaitReservations";

export {
  _TBooks as TBooks,
  _TReservations as TReservations,
  _TUsers as TUsers,
  _TWaitReservations as TWaitReservations,
};

export type {
  TBooksAttributes,
  TBooksCreationAttributes,
  TReservationsAttributes,
  TReservationsCreationAttributes,
  TUsersAttributes,
  TUsersCreationAttributes,
  TWaitReservationsAttributes,
  TWaitReservationsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const TBooks = _TBooks.initModel(sequelize);
  const TReservations = _TReservations.initModel(sequelize);
  const TUsers = _TUsers.initModel(sequelize);
  const TWaitReservations = _TWaitReservations.initModel(sequelize);

  TReservations.belongsTo(TBooks, { as: "idBook_TBook", foreignKey: "idBook"});
  TBooks.hasMany(TReservations, { as: "TReservations", foreignKey: "idBook"});
  TReservations.belongsTo(TUsers, { as: "idUser_TUser", foreignKey: "idUser"});
  TUsers.hasMany(TReservations, { as: "TReservations", foreignKey: "idUser"});

  return {
    TBooks: TBooks,
    TReservations: TReservations,
    TUsers: TUsers,
    TWaitReservations: TWaitReservations,
  };
}
