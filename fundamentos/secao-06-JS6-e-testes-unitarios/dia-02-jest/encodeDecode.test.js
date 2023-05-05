const { mapString, encode, decode } = require('./encodeDecode');

describe('Teste myFizzBuzz', () => {
  it('encode e decode are functions?', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('As vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('As vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('ja na bi na').length).toBe(11);
    expect(decode('j4 n4 b1 n4').length).toBe(11);
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz6789')).toBe('bcdfghjklmnpqrstvwxyz6789');
    expect(decode('bcdfghjklmnpqrstvwxyz6789')).toBe('bcdfghjklmnpqrstvwxyz6789');
  });
});