import Sequelize from 'sequelize';

import configDatabase from '../config/database';
import User from '../app/models/User';
import File from '../app/models/File';
import Meetup from '../app/models/Meetup';
import Subscription from '../app/models/Subscription';

const models = [User, File, Subscription, Meetup];

class Database {
  constructor() {
    this.connection = new Sequelize(configDatabase);

    this.init();
  }

  init() {
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
