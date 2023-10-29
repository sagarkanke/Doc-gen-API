import express from 'express';
import application from '../Constants/application'
const url = require('url');

/**
 * Route authentication middleware to verify a token
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */

export default async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {

  //@ts-ignore
  const parsedUrl = url.parse(req._parsedUrl.pathname);
  //@ts-ignore
  console.log(" req.originalUrl ", req._parsedUrl.pathname)
  if (application.authorizationIgnorePath.indexOf(
    //@ts-ignore
    `${req._parsedUrl.pathname}`
  ) === -1
  ) {
     
  }
  else {
    console.log(" This route is whitelisted ")
  }

  next();


};
