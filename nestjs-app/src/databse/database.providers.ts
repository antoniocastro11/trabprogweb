import { Sequelize } from 'sequelize-typescript';
import { Artigo } from '../artigo/entities/artigo.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'db',
      });
      sequelize.addModels([Artigo]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
