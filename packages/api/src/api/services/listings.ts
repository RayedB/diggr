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
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }

      public async List(): Promise<any> {
        try {
          const products: object[] = await db().collection('listings').find().toArray()
          this.eventDispatcher.dispatch(events.products.list);
          return products;
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }

      public async Remove(id: string): Promise<void> {
        try {
          const objectId = new ObjectId(id)
          await db().collection('listings').deleteOne({_id:objectId})
          return
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }

      public async Find(id: string): Promise<any> {
        try {
          const objectId = new ObjectId(id)
          const product: object[] = await db().collection('listings').findOne({_id:objectId})
          this.eventDispatcher.dispatch(events.products.list);
          return product;
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }

      public async Replace(id: string, replacement): Promise<any> {
        try {
          const objectId = new ObjectId(id)
          const product = await db().collection('listings').replaceOne({_id:objectId}, replacement)
          return product;
        } catch (error) {
          this.logger.error(error);
          throw error;
        }
      }
    }
