// Reverse a string

const reverseString = (str) => {

    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {

        reversed += str[i];

    }

    return console.log(`Reverse of "${str}" is "${reversed}"`);

}

reverseString("hello");

reverseString("JavaScript");

reverseString("Showaib");
