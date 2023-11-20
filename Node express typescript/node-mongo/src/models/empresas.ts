import mongoose from "mongoose";


const empresaSchema= new mongoose.Schema(
    {
        nombre:String,
        sitioWeb:String,
        notas:String

    }
)

const Empresa= mongoose.model("Empresa",empresaSchema);

interface IEmpresa{
    nombre:String,
        sitioWeb:String,
        notas:String
}

export {Empresa,IEmpresa};