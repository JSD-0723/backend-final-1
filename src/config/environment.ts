import dotenv from 'dotenv';

dotenv.config();

interface IEnv {
  port: number;
  nodeEnv: string;
  db: {
    dbDev: string;
    dbProduction: string;
  };
}

const { PORT, NODE_ENV, DB_DEV, DB_PRODUCTION } = process.env;

const environment: IEnv = {
  port: parseInt(PORT || '8080'),
  nodeEnv: NODE_ENV || 'development',
  db: {
    dbDev: DB_DEV || '',
    dbProduction: DB_PRODUCTION || ''
  }
};

export default environment;
