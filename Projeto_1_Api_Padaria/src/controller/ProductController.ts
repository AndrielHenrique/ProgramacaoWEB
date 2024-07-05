import { Request, Response } from "express";
import { ModalidadeService } from "../service/ProductService";
const modalidadeService = new ModalidadeService();

export function todasModalidades(req: Request, res: Response) {
    try {
        res.status(200).json(modalidadeService.obterModalidades(),);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function adicionarModalidade(req: Request, res: Response) {
    try {
        const novaModalidade = modalidadeService.inserirModalidade(req.body);
        res.status(200).json(
            {
                mensagem: "Nova modalidade foi adicionada com sucesso!",
                produto: novaModalidade
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function atualizarModalidade(req: Request, res: Response) {
    try {
        const modalidade = modalidadeService.atualizarModalidade(req.body);
        res.status(201).json(
            {
                mensagem: "Moddalidade foi atualizada com sucesso!",
                produto: modalidade
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function buscarModalidadeID(req: Request, res: Response) {
    try {
        const modalidadePao = modalidadeService.buscarModalidadeID(req.params.id);
        if (modalidadePao) {
            res.status(200).json(
                {
                    mensagem: "Modalidade foi encontrada com sucesso!",
                    produto: modalidadePao
                }
            );
        } else {
            res.status(404).json({ mensagem: "Modalidade não foi encontrada." });
        }
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export function deletarModalidade(req: Request, res: Response) {
    try {
        modalidadeService.deletarModalidade(req.params.id);
        res.status(200).json({ message: "Modalidade foi exclúida com sucesso!" });
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
};


