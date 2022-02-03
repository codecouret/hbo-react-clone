import Account from "../Account/Account"
import SearchModel from "../SearchModel/SearchModel"

const Header = (props) => {
    return(
    <header className="top-header">
      <div className="top-header__left-side">
        <div className="top-header__menu-btn">
          <i className="fas fa-bars"/>
        </div>
        <div className="top-header__search-btn">
          <i className="fas fa-search"/>
        </div>
      </div>
      <div className="top-header__logo"></div>
      <div className="top-header__account">
        <img src="https://userstock.io/data/wp-content/uploads/2020/06/jack-finnigan-rriAI0nhcbc-300x300.jpg" className="top-header__user-img"/>
        <div className="top-header__user-name">
          Ryan
        </div>
      </div>
      <Account />
      <SearchModel />
    </header>)
}

export default Header;