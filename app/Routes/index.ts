import  {Router} from 'express';
import pdfRoute from './Pdf/Pdf.route';

const router = Router();

router.use('/internal/pdf', pdfRoute );

export default router;