import { Router } from 'express';
import multer from 'multer';
import OrphanangeController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router()
const upload = multer(uploadConfig)

routes.post('/orphanages', upload.array('images'), OrphanangeController.create)
routes.get('/orphanages', OrphanangeController.index)
routes.get('/orphanages/:id', OrphanangeController.show)



export default routes;