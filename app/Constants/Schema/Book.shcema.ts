import { Joi, Segments } from 'celebrate';
export default {
    add: {
        [Segments.BODY]: {
            title: Joi.string().required(),
            author: Joi.string().required(),
            summary: Joi.string().optional(),
           
        },
       
    },
    edit: {
        [Segments.BODY]: {
            id : Joi.string().required(),
            title: Joi.string().required(),
            author: Joi.string().required(),
            summary: Joi.string().optional(),
           
        }
       
    },
    id: {
        [Segments.QUERY]:
         {
            id : Joi.string().required(),
           
        }
       
    },
    
};
