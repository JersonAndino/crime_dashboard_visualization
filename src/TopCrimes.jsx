import './topCrimes.css'
export function TopCrimes(){
    return(
        <section className="TopCrimes">
            <h1>TOPICOS MAS TRATADOS</h1>
            <div className="topTopicsContainer">
                <div className="topTopicElement">
                    <h1 className="titleTopTopic">Fraude</h1>
                    <h3 className="numberTopTopic">116</h3>
                </div>
                <div className="topTopicsSeparator"></div>
                <div className="topTopicElement">
                    <h1 className="titleTopTopic">Crimenes Violentos y procesos judiciales</h1>
                    <h3 className="numberTopTopic">113</h3>
                </div>
                <div className="topTopicsSeparator"></div>
                <div className="topTopicElement">
                    <h1 className="titleTopTopic">Violencia de genero</h1>
                    <h3 className="numberTopTopic">89</h3>
                </div>
            </div>
        </section>
    )
}
// 05921069