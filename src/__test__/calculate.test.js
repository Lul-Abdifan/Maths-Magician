import calculate from "../logic/calculate.js"
describe('Testing for calculate file', () => {
    test('Test for AC button', () => {
      const data = {
        total: null,
        next: null,
        operation: null,
      };
      expect(calculate(data, 'AC')).toEqual({
        total: null,
        next: null,
        operation: null,
      });
    });
    test('Test for = ', () => {
      const data = {
        total: '10',
        next: '10',
        operation: '+',
      };
      expect(calculate(data, '=')).toEqual({
        total: '20',
        next: null,
        operation: null,
      });
    });
  test('Test for +/- ',()=>{
    const data={
        total:null,
        next:'20',
        operation:null
    }
    expect(calculate(data,'+/-')).toEqual({
        total:null,
        next:'-20',
        operation:null
    })
  })
    test('Test for . button', () => {
      const data = {
        total: null,
        next: '10',
        operation: null,
      };
      expect(calculate(data, '.')).toEqual({
        total: null,
        next: '10.',
        operation: null,
      });
    });
  });