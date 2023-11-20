/*Se desea crear una webapp para llevar la agenda de contactos de una empresa.

Esta agenda maneja información de personas (con, al menos, los siguientes datos: Nombres, Apellidos, e-mail, teléfono, empresa a la cual pertenece y notas adicionales) y empresas (con, al menos, la siguiente información: Nombre, sitio web y notas adicionales).*/

import mongoose from "mongoose";

interface IPersona{
    nombre:String,
        apellido:String,
        email:String,
        telefono:String,
        empresa:String,
        notas:String

}



const personaSchema= new mongoose.Schema(
    {
        nombre:String,
        apellido:String,
        email:String,
        telefono:String,
        empresa:String,
        notas:String

    }
)

const PersonaModel= mongoose.model("PersonaModel",personaSchema);


export {PersonaModel,IPersona};