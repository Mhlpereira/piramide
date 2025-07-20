

export class SwitchCase {
    static desejaInverterPiramide(resposta) {
        switch (resposta.toLowerCase()) {
            case 's':
                console.log("Você escolheu uma pirâmide invertida!");
                return true;
            case 'n':
                console.log("Você escolheu uma pirâmide normal!");
                return false;
            default:
                throw new Error("Opção inválida, por favor escolha 's' ou 'n'.");

        }
    }
}
