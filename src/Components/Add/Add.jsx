
import AddCategory from './Add Category/AddCategory';
import AddProduct from './Add Product/AddProducts';
import Styles from './Add.module.css'
const Add = () => {
    return ( 
        <div className={Styles.parent}>
            <div className={Styles.parent_Main}>
                {/* <AddCategory/> */}
                <AddProduct/>
                
                
            </div>
        </div>
    );
}
 
export default Add;