import { sumValues} from '../sumValues';

describe('sumValues', () => {
    test('should return 15 when adding 1,2,3,4, and 5', () => {
        // arrange
        // act
        const sum = sumValues([1, 2, 3, 4, 5])
        // assert
        //expect(actual).toEqual()
        expect(sum).toEqual(15)
    })

    test('should return 15 when adding 1, 2, "3", 4, 5', () => {
        // act
        const sum = sumValues([1, 2, "3", 4, 5])
        // assert
    })

    test('should return 10 when adding 1, 2, 3, 4, "5abc"', () => {
        const sum = sumValues([1, 2, 3, 4, '5abc'])
        // assert
        //expect(actual).toEqual()
        expect(sum).toEqual(10)
    })

})