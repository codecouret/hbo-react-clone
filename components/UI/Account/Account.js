const Account = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index < digit; index++){
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return(
        <div className="account">
            <div className="account__details">
                <div className="account__title">My List</div>
                    <div className="account__watch-list">
                        {loopComp(( <div className="account__watch-video">
                        <img src="https://cdn.vox-cdn.com/thumbor/7XGA_uU4vYFvJdisOk9JTvZ0Vro=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19989788/unnamed.jpg"/>
                        <div className="account__watch-overlay">
                            <div className="account__watch-buttons">
                                <div className="account__watch-circle">
                                    <i className="fas fa-play"/>
                                </div>
                                <div className="account__watch-circle">
                                    <i className="fas fa-times"/>
                                </div>
                            </div>
                        </div>
                    </div>), 6)}
                   
                </div>
            </div> 

            <div className="account__menu">
                <ul className="account__main">
                    <li>
                        <a href="/" className="active">My List</a>
                    </li>
                </ul>
                <div className="side-nav__divider"/>
                <ul className="account__main">
                    <li>
                        <a href="/">Account</a>
                    </li>
                    <li>
                        <a href="/">Sign Out</a>
                    </li>
                </ul>
            </div> 
    </div>
    )
}

export default Account;