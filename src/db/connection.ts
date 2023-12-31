import { Sequelize } from "sequelize"
import environment from "../config/environment"

const {
  db: { dbDev, dbProduction },
  nodeEnv,
} = environment

let connectionString: string | undefined = ""
let ssl: boolean | object = false

if (nodeEnv === "development") {
  connectionString = dbDev
} else if (nodeEnv === "production") {
  connectionString = dbProduction
  ssl = {
    rejectAuthorization: false,
  }
} else {
  throw new Error("Invalid NODE_ENV variable or not given at all.")
}

if (!connectionString) {
  throw new Error("Database url is not a valid postgres connection url.")
}

const sequelize = new Sequelize(connectionString, {
  dialectOptions: { ssl },
  logging: false,
})

export default sequelize
