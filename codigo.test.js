const { soma, dobro } = require('./codigo')


describe('Funções matématica', () => {
    it('Soma de dois valores', () => {
        expect(soma(2,5)).toBe(7)
        expect(soma(2,4)).toBe(6)
        expect(soma(21,44)).toBe(65)
    });

    it('dobro de um valor', () => {
        expect(dobro(4)).toBe(8)
    });

});

