function getElementWidth(content, padding, border) {
    
    let numContent = content.replace("px", " ");
    numContent = Number.parseFloat(numContent);
    
    let numPadding = padding.replace("px", " ");
    numPadding = Number.parseFloat(numPadding);
    
    let numBorder = border.replace("px", " ");
    numBorder = Number.parseFloat(numBorder);
    

    const allWidth = numContent + numPadding*2 + numBorder*2;
    return allWidth;
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

