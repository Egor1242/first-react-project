export const placeContinentsIntoHtml = (continents) =>{
    let continentsArray = [...continents]
    let result = ""

    for (let i in continentsArray){
        if(!i === continentsArray.length){
        result += continentsArray[i] + ", ";
    } else {
        result += continentsArray[i] + ".";
    }
    }
    return result
}