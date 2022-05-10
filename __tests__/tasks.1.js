beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('1. Console output', () => {
    test('console should print "This is an exercise in console logging"', () => {
        const solution = require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith('This is an exercise in console logging');
    })
})
