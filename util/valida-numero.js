
export const validarNumero = (numero) => {
    const numeroValido = Number.isInteger(numero) && numero > 0;
    if (!numeroValido) {
        throw new Error(`A quantidade deve ser um inteiro positivo.`);
    }
    return numero;
}