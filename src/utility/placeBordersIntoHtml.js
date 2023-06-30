export const placeBordersIntoHtml = (bordersArray, setCurrentPage) => {
    let result = [];

    for (let i = 0; i < bordersArray?.length; i++) {
        let symbol = i === bordersArray?.length - 1 ?
            "." : ", ";

        let elem =
            <>
                <span
                    className="retranslator"
                    onClick={() => setCurrentPage(bordersArray[i])}>
                    {bordersArray[i]}
                </span>{symbol}
            </>;

        result.push(elem);
    }
    return result;
}