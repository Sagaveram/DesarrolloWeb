import express, { Request, Response } from 'express';
import { IPersona } from '../models/persona';


const personaRouter = express.Router();

let listaPersonas:IPersona[]=[];

// Post Method
personaRouter.post('/post', async (req: Request, res: Response) => {
  try {
    const data: IPersona=({
      nombre:req.body.nombre,
      apellido:req.body.apellido,
        email:req.body.email,
        telefono:req.body.telefono,
        empresa:req.body.empresa,
        notas:req.body.notas
    });

    //const dataToSave = await data.save();
    //res.status(200).json(dataToSave);
    listaPersonas.push(data);
    res.status(200).json(data);
    console.log("funca");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

personaRouter.get('/getAll', async (req: Request, res: Response) => {
    try {
      res.json(listaPersonas);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

personaRouter.delete('/delete/:email',async (req: Request, res:Response)=>{
    try {
        let busquedaEmail= listaPersonas.findIndex(persona=>persona.email==req.params.email);
        if(busquedaEmail==-1){
            res.status(404).json({message: "email not found"})
        }else{
            listaPersonas.splice(busquedaEmail,1);
            res.status(200).json({message: "Elemento eliminado correctamente"})
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }

});

personaRouter.get('/getPersona/:nombre',async (req:Request,res:Response)=>{

  try{
    let busquedaPersona=listaPersonas.findIndex(persona=>persona.nombre==req.params.nombre);
    if(busquedaPersona==-1){
      res.status(404).json({message: "persona not found"})
    }else{
      res.json(listaPersonas[busquedaPersona]);
    }
  }catch (error) {
    res.status(500).json({ message: error });
  }
});

personaRouter.get('/getPersona/:email',async (req:Request,res:Response)=>{

  try{
    let busquedaPersona=listaPersonas.findIndex(persona=>persona.email==req.params.email);
    if(busquedaPersona==-1){
      res.status(404).json({message: "persona not found"})
    }else{
      res.json(listaPersonas[busquedaPersona]);
    }
  }catch (error) {
    res.status(500).json({ message: error });
  }
});

export default personaRouter;

/*{
    "nombre":"Juan",
    "apellido":"Rodriguez",
    "email":"sagaveram@gmail.com",
    "telefono":"091361368",
    "empresa":"empresaINC",
    "notas":"hola"

}*/