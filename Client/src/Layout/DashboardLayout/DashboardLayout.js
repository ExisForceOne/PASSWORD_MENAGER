import style from './DashboardLayout.module.css'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Menu from '../../Components/Menu/Menu'

function DashboardLayout(props) {

    return (
        <div className={style.container}>
            <div className={style.content}>
                <Menu />
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default DashboardLayout