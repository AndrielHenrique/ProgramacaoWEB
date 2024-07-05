import { Request, Response } from "express";
import { EstoqueService } from "../service/EstoqueService";
import { globalData } from "../global/globalData";
import { ModalidadeService } from "../service/ProductService";

const estoqueService = new EstoqueService();

const modalidadeService = new ModalidadeService();

export function todosEstoques(req: Request, res: Response) {
    try {
        const modalidadeEncontrada = modalidadeService.obterModalidades();
        if (modalidadeEncontrada.length > 0) {
            res.status(200).json(estoqueService.obterEstoques());
        } else {
            res.status(404).json({ mensagem: "Não existe nenhuma modalidade cadastrada." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function addItem(req: Request, res: Response) {
    try {
        const novoEstoque = estoqueService.adicionarItem(req.body);
        res.status(201).json(
            {
                mensagem: "O item foi adicionado ao estoque com sucesso!",
                Estoque: novoEstoque
            }
        )

    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export function atualizarEstoque(req: Request, res: Response) {
    try {
        const id = parseInt(req.body.id);
        console.log("ID: ", id);
        const item = estoqueService.buscarEstoquePorID(id);
        if (item) {
            const novoEstoque = estoqueService.atualizarEstoque(req.body);
            res.status(200).json(
                {
                    mensagem: "Estoque atualizado com sucesso!",
                    Estoque: novoEstoque,
                }
            );
        } else {
            res.status(400).json({ mensagem: "Estoque não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function buscarEstoqueID(req: Request, res: Response) {
    try {
        const Estoque = estoqueService.buscarEstoquePorID(req.params.id);
        if (Estoque) {
            res.status(200).json(
                {
                    mensagem: "Estoque encontrado!",
                    Estoque: Estoque
                }
            );
        } else {
            res.status(404).json({ mensagem: "Estoque não encontrado." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function deletarQuantidade(req: Request, res: Response) {
    try {
        const id = parseInt(req.body.id);
        console.log("ID: ", id);
        const estoque = estoqueService.buscarEstoquePorID(id);
        if (estoque) {
            const resultado = estoqueService.deletarEstoque(req.body);
            if (resultado) {
                res.status(200).json({
                    message: "Quantidade do estoque removida: ",
                    quantidaRemovida: req.body.quantidadeRemover
                });
            } else {
                res.status(400).json({ mensagem: "Não é possível deletar essa quantidade pois iria ficar negativo no estoque" });
            }
        } else {
            res.status(400).json({ mensagem: "Estoque não encontrado. " });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
};

