import { Application } from 'express';

// Controllers (route handlers)
import * as apiController from '../controllers/api';

const setRoutes = (app: Application) => {
  app.post('/role/create', apiController.postCreateRole);
};

export default setRoutes;
