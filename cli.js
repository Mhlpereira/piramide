
import { CLI } from "./util/readline.js";
import { SwitchCase } from "./util/switch-case.js";
import { validarNumero } from "./util/valida-numero.js";
import { Piramides } from "./entitites/piramides.js";
import { validarCaracter } from "./util/valida-char.js";
import { perguntarAteValido } from "./util/perguntar-ate-valido.js";

async function main() {
    const caracteres = [];
    const invertidas = [];

    try {

        const altura = await perguntarAteValido(
            "Qual a altura da sua pirâmide? ",
            resposta => {
                const valor = parseInt(resposta);
                validarNumero(valor, "altura");
                return valor;
            }
        );


        const quantidade = await perguntarAteValido(
            "Quantas pirâmides você quer? ",
            resposta => {
                const valor = parseInt(resposta);
                validarNumero(valor);
                console.log(`Você escolheu a quantidade: ${valor}`);
                return valor;
            }
        )


        for (let numero = 1; numero <= quantidade; numero++) {
            if (numero === 1 && quantidade > 1) {
                caracteres.push(" ");
                invertidas.push(false);
                continue;
            }
            const caractere = await perguntarAteValido(
                `Qual o caractere que você quer usar para a pirâmide ${numero}? `,
                resposta => {
                    validarCaracter(resposta);
                    return resposta;
                }
            );
            caracteres.push(caractere);

            const invertida = await perguntarAteValido(
                "Você quer a pirâmide invertida? (s/n) ",
                resposta => {
                    return SwitchCase.desejaInverterPiramide(resposta);
                }
            );

            invertidas.push(Boolean(invertida));

        }
        const piramides = new Piramides(altura, quantidade, caracteres, invertidas);
        piramides.desenhar();

        const totalLinhas = altura * quantidade;
        console.log(`O total de linhas para construir todas as pirâmides é: ${totalLinhas}`);
    } finally {
        CLI.closeReadline();
    }
}

main();