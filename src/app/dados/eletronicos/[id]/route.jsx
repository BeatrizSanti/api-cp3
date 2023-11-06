import { NextResponse } from "next/server"
import fs from "fs/promises";

        
    export async function GET(request, {params}) {
        const file = await fs.readFile(process.cwd() + '/src/app/dados/base/db.json', 'utf8');
        const arquivo = JSON.parse(file);
        const eletros = arquivo.eletros;         

        const nome = params.id;

        if(nome != null){
            return NextResponse.json(eletros.find((eletro=> eletro.nome == nome)));
        } else {
            return nome == null ? NextResponse.json(eletros) : NextResponse.redirect("http://localhost:3000/error") 
        }


}
