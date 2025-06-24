import addressController from "../controller/address-controller.js";
import express from "express";
import contactController from "../controller/contact-controller.js";
import userController from "../controller/user-controller.js";
import { authMiddleWare } from "../middleware/auth-middleware.js";


const userRoute = new express.Router();
userRoute.use(authMiddleWare);

// User API
userRoute.get('/api/users/current', userController.get);
userRoute.patch('/api/users/current', userController.update);
userRoute.delete('/api/users/logout', userController.logout);

// Contact API
userRoute.post('/api/contacts', contactController.create);
userRoute.get('/api/contacts/:contactId', contactController.get);
userRoute.put('/api/contacts/:contactId', contactController.update);
userRoute.delete('/api/contacts/:contactId', contactController.remove);
userRoute.get('/api/contacts', contactController.search);

// Addresses API
userRoute.post('/api/contacts/:contactId/addresses', addressController.create);
userRoute.get('/api/contacts/:contactId/addresses/:addressId', addressController.get);
userRoute.put('/api/contacts/:contactId/addresses/:addressId', addressController.update);
userRoute.delete('/api/contacts/:contactId/addresses/:addressId', addressController.remove);
userRoute.get('/api/contacts/:contactId/addresses', addressController.list);

export {
    userRoute
}