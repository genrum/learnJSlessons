function ucFirst(str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    let flagWord1 = "viagra";
    let flagWord2 = "xxx";
    let lowStr = str.toLowerCase()
    return lowStr.includes(flagWord1) || lowStr.includes(flagWord2);

}

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength-1) + "..."
    } else return str;
}


function exTheMoney(str) {
    let valueStr = str.slice(1);
    return Number(valueStr)
} 


function showVerticalMessage(str) {
    let vertStr = "";
    str = (str[0] === "s") ? str[0].toUpperCase() + str.slice(1) : str;
    let maxLength = (str.length > 7) ? 7 : str.length;
    for (let i=0; i < maxLength; i++) {
        vertStr += str[i]+"\n";
    }
    return vertStr
}

console.log(showVerticalMessage("v23456789"));
