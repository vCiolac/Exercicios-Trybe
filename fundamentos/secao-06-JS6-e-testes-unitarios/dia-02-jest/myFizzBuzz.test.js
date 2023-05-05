const { myFizzBuzz } = require('./myFizzBuzz')

describe('Teste myFizzBuzz', () => {
  it('Retorna "fizzbuzz" quando o número é divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Retorna "fizz" quando o número é divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Retorna "buzz" quando o número é divisível por 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('Retorna o número quando o número não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('Retorna false quando o parâmetro não é um número', () => {
    expect(myFizzBuzz('foo')).toBe(false);
  });
});