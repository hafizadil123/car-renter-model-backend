/* eslint-disable max-len */
import { Router } from 'express';
import CarsController from '../controllers/car.controller';
import authenticate from '../middleware/authenticate';
import errorHandler from '../middleware/error-handler';


const users = new Router();

// Users Routes
users.get('/test', (req, res) => {
  res.json({
    message: 'welcome in car rental way',
  });
});
users.post('/add-car', authenticate, CarsController.addCar);
users.get('/delete-car', authenticate, CarsController.deleteCar);
users.get('/find-company-cars', authenticate, CarsController.findAll);
users.get('/find-all-cars', CarsController.findAllCars);

users.use(errorHandler);

export default users;
