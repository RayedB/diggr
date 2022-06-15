import { Service, Inject } from 'typedi';
import events from '@/subscribers/events';
import { EventDispatcher, EventDispatcherInterface } from '@/decorators/eventDispatcher';

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
            // 401 Error handling

           // Dispatch Events
          this.eventDispatcher.dispatch(events.products.add);
    
          return { product:"product" };
        } catch (e) {
          this.logger.error(e);
          throw e;
        }
      }
}