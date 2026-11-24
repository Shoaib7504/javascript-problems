// Check if a string of brackets is valid (every opening bracket is closed in the correct order)
const isValidParentheses = (s) => {
    const pairs = { ")": "(", "]": "[", "}": "{" };
    const stack = [];
    for (const char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (stack.pop() !== pairs[char]) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("{[()]}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("((("));
