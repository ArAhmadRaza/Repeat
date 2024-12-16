var studentNames = ["Ali", "Umar", "Arfan", "Arshad", "Asim"]

function forEachFunction(element, index, arr) {
    // console.log(element, index, arr);
    if(element == "Arfan"){
        return index + element
    }
    else{
    return element
    }
}

var checkReturn = studentNames.map(forEachFunction)

console.log("Return",checkReturn);







