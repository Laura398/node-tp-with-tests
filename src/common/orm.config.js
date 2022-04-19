import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'mysql',
    host: 'mysql-laura398.alwaysdata.net',
    database: 'laura398_node',
    username: 'laura398_tp2',
    password: 'motDePasse&123'
});

sequelize.authenticate()
  .then(() => console.log('Connection to database OK'))
  .then(() => sequelize.sync({ alter: true }))
  .then(() => console.log('Database sync OK'))
  .catch(error => console.error('Connection to database KO', error));

