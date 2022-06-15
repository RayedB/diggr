import expressLoader from './express';
import mongoLoader from './database';
import dependencyInjectorLoader from './dependencyInjector';
import Logger from './logger';
import './events';
//We have to import at least all the events once so they can be triggered

export default async ({ expressApp }) => {
  await mongoLoader();
  Logger.info('✌️ DB loaded and connected!');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');

  await dependencyInjectorLoader()
  Logger.info('✌️ Dependency Injector loaded');
};
