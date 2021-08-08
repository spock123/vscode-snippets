import { Request, Response } from 'express';
import { send, sendError } from '@lib';

export const testEndpoint = async (req:Request, res:Response) => { 
  try {
     send('ok', req, res);
  }
  catch(err) {
    sendError(err, req, res);
  }
}