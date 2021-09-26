import Styles from './AddCategory.module.css'
import {SetCategory} from '../../Context/ContextProvider';
import {useState } from 'react';


const AddCategory = () => {


    // const dispatch = SetCategory()
    const {setNewCategorie} = SetCategory()
    
    const [value,setValue] = useState('')

    const submitHandler = ()=> {
        
        if(value.length >1){
            setNewCategorie(value) 
            setValue("")
        }
        
    } 

    return (
        <div className={Styles.addCategory}>
            <div className={Styles.addCategory_Main}>
                
                <button className={Styles.buttonCategory} onClick={submitHandler}>ثبت</button>
                <input value={value} className={Styles.inputCategory} onChange={(e)=> setValue(e.target.value)} type='text' dir="rtl" placeholder='  نام گروه غذایی ... ( از 2 کاراکتر )'/>
                
                <p className={Styles.pCategory}> : نام گروه غذایی</p>
                    
            </div>
        </div> 
    );
}
 
export default AddCategory;