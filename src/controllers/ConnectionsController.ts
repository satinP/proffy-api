import { Request, Response, response } from 'express'
import db from '../database/connection';


export default class ConnectionsController {

  async index(req: Request, res: Response) {

    try {
      const totalConnections = await db('connections').count('* as total');
  
      const { total } = totalConnections[0];

      return res.json({ total });
    } catch (err) {
      return res.status(400).json({message: "Error finding connecetions"});
    }


  }


  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    try {
      await db('connections').insert({ user_id });
  
      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({message: "Error creating connection"});
    }
  }
}