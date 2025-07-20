export class Piramides {
    constructor(altura, quantidade, caracteres, invertidas) {
        this.altura = altura;
        this.quantidade = quantidade;
        this.caracteres = caracteres;
        this.invertidas = invertidas;
    }

    desenhar() {
        const largura = this.altura * 2 - 1;
        for (let linha = 1; linha <= this.altura; linha++) {
            let linhaCompleta = '';
            for (let p = 0; p < this.quantidade; p++) {
                if (p === 0 && this.quantidade > 1) {
                    linhaCompleta += ' '.repeat(largura);
                } else {
                    const invertida = Boolean(this.invertidas[p]);
                    const caractere = this.caracteres[p];
                    let nivel;
                    if (invertida) {
                        nivel = this.altura - linha + 1;
                    } else {
                        nivel = linha;
                    }
                    const espacos = ' '.repeat(this.altura - nivel);
                    const preenchimento = caractere.repeat(nivel * 2 - 1);
                    linhaCompleta += (espacos + preenchimento + espacos).slice(0, largura);
                }
                if (p < this.quantidade - 1) linhaCompleta += '   ';
            }
            console.log(linhaCompleta);
        }
    }
}