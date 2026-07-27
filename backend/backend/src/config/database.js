import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
  define: {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  },
});

export default sequelize;
