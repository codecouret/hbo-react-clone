import Header from '../UI/Header/Header'
import SideNav from '../UI/SideNav/SideNav'

const MainLayout = (props) => {
    return(<div style={{
        background: 'linear-gradient(135deg, rgba(4,0,36,1) 0%, rgba(0,0,0,1) 54%, rgba(91,12,239,1) 100%)', minHeight: '100vh'
    }}>
    <Header />
    <SideNav />
        <section className="content-container">
            {props.children}
        </section>
    </div>)
}

export default MainLayout;
