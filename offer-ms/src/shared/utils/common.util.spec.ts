import { isPalindrome } from './common.util';

describe('Unit Test for Common Utils', () => {
    it('should return false with string lengh > 1', () => {
        const test = isPalindrome("asd");
        expect(test).toBeFalsy();
    });

    it('should return false with string lengh = 1', () => {
        const test = isPalindrome("a");
        expect(test).toBeFalsy();
    });

    it('should return true', () => {
        const test = isPalindrome("ada");
        expect(test).toBeTruthy();
    });
});