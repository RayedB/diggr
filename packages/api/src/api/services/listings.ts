import { Service, Inject } from 'typedi';
import events from '@/subscribers/events';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';
import { db } from '../../loaders/database'
import { Collection, ObjectId } from 'mongodb';

type MyDoc = {
  _id?: ObjectId
  title: string,
  image: string,
  description: string
}

@Service()
export default class ListingService {
    constructor(
        @Inject('logger') private logger,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
      ) {}

    public async Add(userInputDTO): Promise<any> {
        try {
            // Create Data Object
            console.log("in listing service")
            const sampleDoc = {
              title: "test",
              image: "test",
              description: "test"
            }
            console.log(db)
            await db().collection('listings').insertOne(userInputDTO)
            const ids: object[] = await db().collection('listings').find().toArray()
            // 401 Error handling

           // Dispatch Events
          this.eventDispatcher.dispatch(events.products.add);

          return ids;
        } catch (e) {
          this.logger.error(e);
          throw e;
        }
      }
}
