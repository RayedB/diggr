import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import { Logger } from 'winston';
import ListingService from '../services/listings';

export default (app: Router): void => {
  app.post('/products', async (req: Request, res: Response) => {
    const logger: Logger = Container.get('logger');
    logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
    try {
      const listingServiceInstance = Container.get(ListingService);
      const product= await listingServiceInstance.Add(req.body);
      return res.status(201).json({ product });
    } catch (e) {
      logger.error('🔥 error: %o', e);
    }
  });

    app.get('/products',async (req, res) => {
//      logger.debug('Calling Sign-up endpoint with body: %o', req.body);
      const listingServiceInstance = Container.get(ListingService);
      const product= await listingServiceInstance.List();
      console.log(product)
        res.json(product);
  });
};
