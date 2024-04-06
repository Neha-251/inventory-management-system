import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '../../redux/reducers/common.reducer';

import "./index.css";


const Navbar = () => {
    const currTheme = useSelector((state) => state.theme).value;
    console.log(currTheme)
    const dispatch = useDispatch()

    const textColorWhite = getComputedStyle(
        document.documentElement
    ).getPropertyValue("-primary-text-color-white");




    console.log(currTheme)
    return (
        <div className="Navbar">
            <div>
                <span>Dashboard</span>
            </div>
            <div>
                <span>Products</span>
            </div>
            <div>
                <span>Orders</span>
            </div>
            <div>
                <span>Reports</span>
            </div>
            <div>
                <span>Settings</span>
            </div>
            <div>
                <span>Login</span>
            </div>
            <div>
                {currTheme === "light" ? <DarkModeIcon sx={{ color: textColorWhite }} onClick={() => { dispatch(darkTheme()) }} /> : <LightModeIcon sx={{ color: textColorWhite }} onClick={() => dispatch(lightTheme())} />}
            </div>
        </div>
    )
}

export default Navbar;