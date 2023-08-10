export const placeLanguagesIntoHtml = (wrappedObject) => {
    
    if(!wrappedObject) return "-";

    let unwrappedObject = Object.values(wrappedObject || {});
    let result = "";
    for (let i in unwrappedObject) {
        if (i < unwrappedObject.length - 1) {
            result += unwrappedObject[i] + ", ";
        }
        else {
            result += unwrappedObject[i] + ".";
        }

    }
    return result;
}
