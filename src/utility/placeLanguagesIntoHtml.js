export const placeLanguagesIntoHtml = (wrappedObject) => {

    if (!wrappedObject) return "-";

    let unwrappedObject = Object.values(wrappedObject || {});
    let result = "";
    for (let i in unwrappedObject) {

        result += unwrappedObject[i];

        if (i < unwrappedObject.length - 1) {
            result += ", ";
        }
        else {
            result += ".";
        }

    }
    return result;
}
