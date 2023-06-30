export const placeBordersIntoHtml = (bordersArray, setCurrentPage) => {
    let result = [];

    for (let i = 0; i < bordersArray?.length; i++) {
        let elem = <span
            className="retranslator"
            onClick={() => setCurrentPage(bordersArray[i])}>
            {bordersArray[i]}
        </span>;

        if (i === bordersArray?.length - 1) {
            result.push(elem);
        } else {
            result.push(elem);
        }
    }
    return result;
}