import { Router, Request, Response } from 'express';
import { logger } from 'nx/src/utils/logger';
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
    } catch (error) {
      logger.error('🔥 error: %o', error);
    }
  });

    app.get('/products',async (req: Request, res: Response) => {
      logger.debug('Calling Sign-up endpoint with body: %o', req.body);
    try {
      const listingServiceInstance = Container.get(ListingService);
      const product= await listingServiceInstance.List();
      return res.status(200).json({ product });
    } catch (error) {
      logger.error(error);
    }
  });

    app.delete('/products/:id', (req, res) => {
      const listingServiceInstance = Container.get(ListingService);
      const id = req.params.id;
      const product= listingServiceInstance.Remove(id);
      return res.status(204).send('ok');
    })
};
