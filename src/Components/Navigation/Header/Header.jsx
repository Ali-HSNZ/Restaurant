import Styles from './Header.module.css'
import { FiShoppingCart } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";


const Header = () => {
    return ( 
       <div className={Styles.header}>
           <div className={Styles.cart}><FiShoppingCart size={25}/></div>
           <nav className={Styles.logo}><a className={Styles.logo_a} href='http://localhost:3000/'>Restaurant</a></nav>
           <div className={Styles.menuBar}><FiMoreHorizontal size={35}/></div>
       </div>
    );
}
 
export default Header;