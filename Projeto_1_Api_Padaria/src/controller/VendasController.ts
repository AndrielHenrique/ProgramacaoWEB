import { Request, Response } from 'express';
import { VendaService } from '../service/VendasService';
const vendaService = new VendaService();

export function realizarVenda(req: Request, res: Response) {
    try {
        const novaVenda = vendaService.inserirVenda(req.body);
        return res.status(200).json({ novaVenda });
    } catch (error: any) {
        return res.status(400).json({ erro: error.message });
    }
}

export function pesquisarVenda(req: Request, res: Response) {
    try {
        const venda = vendaService.recuperarVenda(req.params.id);
        if (venda) {
            res.status(200).json(
                {
                    mensagem: "Venda encontrada: ",
                    venda: venda
                }
            );
        } else {
            res.status(404).json({ mensagem: "Venda não encontrada." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};