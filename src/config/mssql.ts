import "dotenv/config";
import { Sequelize } from "sequelize";
import { initModels } from "../models/mssql/init-models";

const sequelize = new Sequelize(
  <string>process.env.DB,
  <string>process.env.USER,
  <string>process.env.PASSWORD,
  {
    host: <string>process.env.HOST,
    port: Number(process.env.SQL_PORT),
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: false
      }
    }
  }
);

export default initModels(sequelize);

// export default sequelize;