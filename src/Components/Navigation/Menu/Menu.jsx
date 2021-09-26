import Styles from './Menu.module.css'
import { Category } from '../../Context/ContextProvider';
const Menu = () => {
    const category = Category()
    return ( 
        <ul className={Styles.menu}>
            {category.length === 0 && <li>هنوز گروه غذایی ثبت نکرده اید </li>}
            {category.map((p,index)=> <li key={index}>{p.name}</li>)}
                 
            
        </ul>
    );
}
 
export default Menu;