const LastChance = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index < digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className="last-chance">
            
            <div className="last-chance__thumbnails">
                <div className="last-chance__must-see">
                    <h2>Last Chance<br/>Originals</h2>
                    <p>Must see movies on HBO. best movies to watch from home.</p>
                    <button><a href="#">Browse All</a></button>
                </div>
        {loopComp( 
            <div className="last-chance__thumbnail">
                <img src="https://preview.redd.it/z7qi8v8rxq681.jpg?width=640&crop=smart&auto=webp&s=cb33fd376fc240311d23a73882054c79167bbe99"/>
            <div className="last-chance__top-layer">
                <i className="fas fa-play"/>
            </div>
            </div>, 10
            )}
            </div>
        </div>
    )
}

export default LastChance