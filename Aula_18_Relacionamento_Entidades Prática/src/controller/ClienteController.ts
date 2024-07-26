import { ClienteService } from "../service/ClienteService";
import { Response, Request } from "express";

    const clienteService: ClienteService = new ClienteService();

    export async function cadastrarCliente(req: Request, res: Response){
        
        try{
            const novoCliente = await clienteService.cadastrarCliente(req.body);
            res.status(201).json(
                {
                    mensagem:"Novos dados de um novo cliente criado com sucesso!",
                    conta:novoCliente
                }
            );
        }catch(error: any) {
            res.status(400).json({ message: error.message});

        }
    }