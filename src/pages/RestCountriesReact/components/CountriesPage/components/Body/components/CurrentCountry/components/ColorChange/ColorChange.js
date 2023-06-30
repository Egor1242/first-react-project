export const ColorChange = () => {
    return (
        <div className="color-setup">
            <button className="color-1" onClick={
                () => {
                    document.querySelector(".current-country").style.backgroundColor = "rgba(250, 184, 114, 0.862)"
                }
            }></button>
            <button className="color-2" onClick={
                () => {
                    document.querySelector(".current-country").style.backgroundColor = "rgba(48, 40, 88, 0.862)"
                }
            }></button>
            <button className="color-3" onClick={
                () => {
                    document.querySelector(".current-country").style.backgroundColor = "rgba(4, 126, 124, 0.862)"
                }
            }></button>
        </div>
    )
}