import { CLI } from "./readline.js";

export async function perguntarAteValido(pergunta, validador) {
    while (true) {
        const resposta = await CLI.readLine(pergunta);
        try {
            const respostaValida = validador(resposta);
            console.log(`Resposta válida: ${respostaValida}`);
            return respostaValida;
        } catch (error) {
            console.error(error.message);
        }
    }
}