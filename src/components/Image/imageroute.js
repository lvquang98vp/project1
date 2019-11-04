import { Router } from 'express';
import * as controller from './imageController';
import { throwAsNext } from '../../middleware';


const path = '/image';
const router = Router();

// route
// --- Login ---
router.get('/', throwAsNext(controller.getImage));

// registerSubrouter

// export
export default { path, router };
