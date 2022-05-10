const rewire = require("rewire")
const solution = rewire("../solution")

const expectedOutputString = "This is the value."

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('2. Variables', () => {
    test('variable "exercise" should exist', () => {
        const exercise = solution.__get__("exercise")
        expect(exercise).toBeDefined()
    })
    test('variable "exercise" should have string value', () => {
        const exercise = solution.__get__("exercise")
        expect(exercise).toBe(expectedOutputString)
    })
    test('variable "exercise" is logged', () => {
        const solution = require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(expectedOutputString);
    })
})
