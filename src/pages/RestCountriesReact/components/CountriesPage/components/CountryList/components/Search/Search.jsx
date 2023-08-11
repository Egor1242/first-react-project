import "./style.sass"

export const Search = ({ currentSearchResult, setCurrentSearchResult }) => {

    return (
        <div className="search">
            <input
                value={currentSearchResult}
                onChange={(event) => setCurrentSearchResult(event.target.value)}
                placeholder="Введите название страны\столицы, которую ищете"
            />
        </div>
    )
}