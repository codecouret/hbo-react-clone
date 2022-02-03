const JustAdded = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index < digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className="just-added">
            <h3 className="just-added__title">Just Added</h3>
            <div className="just-added__thumbnails">
        {loopComp( 
            <div className="just-added__thumbnail">
                <img src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/04/168034386_484487029654917_4636295263547253628_n.jpg"/>
            <div className="just-added__top-layer">
                <i className="fas fa-play"/>
            </div>
            </div>, 10
            )}
            </div>
        </div>
    )
}

export default JustAdded