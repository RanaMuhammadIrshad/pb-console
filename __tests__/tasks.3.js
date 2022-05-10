const rewire = require("rewire")
const solution = rewire("../solution")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('3. Name Variables', () => {
    test.each`
    variableName 
    ${"firstName"}
    ${"lastName"}
    `('variable "$variableName" should exist', ({variableName}) => {
        const variable = solution.__get__(variableName)
        expect(variable).toBeDefined()
    });

    test.each`
    variableName 
    ${"firstName"}
    ${"lastName"}
    `('variable "$variableName" should have string value', ({variableName}) => {
        const variable = solution.__get__(variableName)
        expect(typeof variable).toBe("string")
    });
    
    test('variables "firstName" and "lastName" are logged', () => {
        const firstName = solution.__get__("firstName")
        const lastName = solution.__get__("lastName")
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(firstName, lastName);
    })
})
