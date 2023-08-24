import { Joi, Segments } from 'celebrate';
export default {
    crete: {
        [Segments.BODY]: {
            mobile: Joi.string().required(),
           
        },
       
    },
    
};
