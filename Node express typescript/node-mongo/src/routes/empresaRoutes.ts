import express, { Request, Response } from 'express';
import { IEmpresa } from '../models/empresas';

const empresaRouter = express.Router();

let listaEmpresas:IEmpresa[]=[];

// Post Method
empresaRouter.post('/post', async (req: Request, res: Response) => {
  try {
    const data: IEmpresa=({
      nombre:req.body.nombre,
      sitioWeb:req.body.sitioWeb,
      notas:req.body.notas
    });

    //const dataToSave = await data.save();
    //res.status(200).json(dataToSave);
    listaEmpresas.push(data);
    res.status(200).json(data);
    console.log("funca");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

empresaRouter.get('/getAll', async (req: Request, res: Response) => {
    try {
      res.json(listaEmpresas);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

export default empresaRouter;