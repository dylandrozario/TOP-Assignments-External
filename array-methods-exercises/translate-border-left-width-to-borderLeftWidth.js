function camelize(str){
    const strArr = str.split("-");
    // First we keep the first element the same
    // Every elemenent aftwards we capatilize the
    // first char of the word
    // how do we achieve this
    // first we turn the string into an array of strings
    // then we have to return the modifed string
    // like the last example we do return arr
    // the methods we use map to do this
    const firstString = strArr[0];
    newStr = firstString;
    const filteredArr = strArr.filter((string) => string !== firstString);
    const camelizedArr = filteredArr.map((string) => string.charAt(0).toUpperCase() + string.slice(1))

    newStr += camelizedArr.join("");
    return newStr;
}

function optimizedCamelize(str){
    return str
        .split("-")
        .map((word, index) =>
            index === 0
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
}