import  {Router} from 'express';
import bookRoute from './Book/Book.route'

const router = Router();

router.use('/book',bookRoute );

export default router;