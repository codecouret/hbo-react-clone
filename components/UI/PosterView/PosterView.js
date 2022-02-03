const PosterView = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index < digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className="poster-view">
            
            <div className="poster-view__thumbnails">
                <div className="poster-view__must-see">
                    <h2>Must See Max<br/>Originals</h2>
                    <p>Must see movies on HBO. best movies to watch from home.</p>
                    <button><a href="#">Browse All</a></button>
                </div>
        {loopComp( 
            <div className="poster-view__thumbnail">
                <img src="https://preview.redd.it/z7qi8v8rxq681.jpg?width=640&crop=smart&auto=webp&s=cb33fd376fc240311d23a73882054c79167bbe99"/>
            <div className="poster-view__top-layer">
                <i className="fas fa-play"/>
            </div>
            </div>, 10
            )}
            </div>
        </div>
    )
}

export default PosterView