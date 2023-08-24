import express from 'express';
import httpStatusCodes from 'http-status-codes';
import apiResponse from '../utilities/ApiResponse';
import HttpClient from "../utilities/HttpClient";
import { extractCookieFromRequest } from '../utilities/ApiUtilities';
import application from '../Constants/application'
const { EXTERNALAPIURLS } = require('../../app/config.ts');
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
      // For internal api call
      let tokenFromRequest: any = req.headers['authorization']
      console.log( " tokenFromRequest ", tokenFromRequest )
      if (tokenFromRequest) {
        tokenFromRequest = tokenFromRequest.split(' ')[1];
        try {
          const decoded = Buffer.from(tokenFromRequest, "base64").toString("utf-8");
          if (decoded) {
            const [username, password] = decoded.split(':');
            if (username != 'ximkart' || password != "ximkart123#") {
              return res.status(401).json({
                message: "Unauthorized",
                success: false,
                data: []
              });
            }
          }
        } catch (error) {
          return res.status(401).json({
            message: "Invalid token",
            success: false,
            data: []
          });
        }
       
      }
      else {
        return res.status(401).json({
          message: " Authorization token is missing ",
          success: false,
          data: []
        });
      }
  }
  else {
    console.log(" This route is whitelisted ")
  }

  next();


};