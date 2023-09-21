import "./style.sass"

export const AboutUs = () => {

    return (
        <div className="about-us_page">
            <div className="contacts">
                <div>
                    Mail: <a href='mailto:mail@egorwinner12@gmail.com'>egorwinner12@gmail.com</a>
                </div>
                <div>
                    Git: <a href='https://github.com/Egor1242'>github</a>
                </div>
            </div>
            <div>
                <div className="sources">
                    Sources:
                    <div><a href='https://restcountries.com'>rest countries</a></div>
                    <div className="icon-micons"><a href='https://mui.com/material-ui/material-icons/?query=delete'>material-icons</a></div>
                    <div className="icon-react"><a href='https://ru.legacy.reactjs.org/'>React</a></div>
                    <div className="icon-js"><a href='https://www.javascript.com'>JavaScript</a></div>
                    <div className="icon-html"><a href='https://html.com'>HTML</a></div>
                </div>
            </div>
        </div>
    )
}