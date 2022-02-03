const SeriesSection = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index < digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className="series-section">
            <div className="series-section__thumbnails">
                <div className="series-section__series">
                    <p>Peacemaker is back in action.</p>
                    <h2>Must see movies on HBO. best movies to watch from home</h2>
                    <p>Date and time to make peace starts January 13. HBO Speaical it will premeier soon</p>
                    <button><a href="#">Browse All</a></button>
                </div>
        {loopComp( 
            <div className="series-section__thumbnail">
                <img src="https://i0.wp.com/thefutureoftheforce.com/wp-content/uploads/2021/12/Peacemaker-Season-1-Character-Posters-John-Cena-Peacemaker-01.jpg?resize=474%2C474&ssl=1"/>
            </div>, 2
            )}
            </div>
        </div>
    )
}

export default SeriesSection