export function isPalindrome(string: string): boolean {
    if (string.length > 1) {
        let baseString = string.toLowerCase().replace(new RegExp(" ", "g"), "");
        let reverseString = string
            .toLowerCase()
            .replace(new RegExp(" ", "g"), "")
            .split("")
            .reverse()
            .join("");
        return baseString === reverseString;
    } else {
        return false;
    }
}