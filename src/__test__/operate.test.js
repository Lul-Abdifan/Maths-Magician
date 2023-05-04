import operate from '../logic/operate';

describe('Operation tests', () => {
  test('Addition', () => {
    const store = operate(2, 3, '+');
    expect(store).toBe('5');
  });
  test('Subtraction', () => {
    const store = operate(20, 3, '-');
    expect(store).toBe('17');
  });
  test('Division', () => {
    const store = operate(20, 4, '÷');
    expect(store).toBe('5');
  });
  test('Modules', () => {
    const store = operate(20, 3, '%');
    expect(store).toBe('2');
  });
  test('Modules', () => {
    const store = operate(20, 0, '%');
    expect(store).toBe("Can't find modulo as can't divide by 0.");
  });
});
