function showVerticalMessage(str) {
    let vertStr = "";
    str = (str[0] === "s") ? str[0].toUpperCase() + str.slice(1) : str;
    let maxLength = (str.length > 7) ? 7 : str.length;
    for (let i=0; i < maxLength; i++) {
        vertStr += str[i]+"\n";
    }
    console.log(vertStr)
}

showVerticalMessage("");
