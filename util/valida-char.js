

export const validarCaracter = (caractere) => {
    if (typeof caractere !== 'string' || caractere.length !== 1) {
        throw new Error(`Deve ser um único caractere.`);
    }
    return caractere;
}