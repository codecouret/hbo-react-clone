const SearchModel = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index < digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className="search-model">
            <div className="search-model__input-group">
                <input className="search-model__input" type="text"placeholder="search for a title" value="" />
            <div className="search-model__close-btn">
                <i className="fas fa-times"/>
            </div>
            </div>
            <h3 className="search-model__title">
                 Popular Searches
            </h3>
            <div className="search-model__thumbnails">
        {loopComp( 
            <div className="search-model__thumbnail">
                <img src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/04/168034386_484487029654917_4636295263547253628_n.jpg"/>
            <div className="search-model__top-layer">
                <i className="fas fa-play"/>
            </div>
            </div>, 10
            )}
            </div>
        </div>
    )
}

export default SearchModel