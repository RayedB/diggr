import { Container } from 'typedi';
import { EventSubscriber, On } from 'event-dispatch';
import events from './events';
// import { IUser } from '@/interfaces/IUser';
import { Logger } from 'winston';

@EventSubscriber()
export default class ListingEventSubscriber {

  @On(events.products.add)
  public onProductRegistration() {
    const Logger: Logger = Container.get('logger');
    try {
      console.log("caught in event")
      /**
       * @TODO implement this
       */
      // Call the tracker tool so your investor knows that there is a new signup
      // and leave you alone for another hour.
      // TrackerService.track('user.signup', { email, _id })
      // Start your email sequence or whatever
      // MailService.startSequence('user.welcome', { email, name })
    } catch (e) {
      Logger.error(`🔥 Error on event ${events.products.add}: %o`, e);

      // Throw the error so the process dies (check src/app.ts)
      throw e;
    }
  }

  @On(events.products.list)
  public onProductsLists() {
    const Logger: Logger = Container.get('logger');
    try {
      console.log("caught in event")
      /**
       * @TODO implement this
       */
      // Call the tracker tool so your investor knows that there is a new signup
      // and leave you alone for another hour.
      // TrackerService.track('user.signup', { email, _id })
      // Start your email sequence or whatever
      // MailService.startSequence('user.welcome', { email, name })
    } catch (e) {
      Logger.error(`🔥 Error on event ${events.products.list}: %o`, e);

      // Throw the error so the process dies (check src/app.ts)
      throw e;
    }
  }
}
