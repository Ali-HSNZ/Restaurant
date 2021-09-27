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
            <div className={Styles.addCategory_Main} style={{display:'flex',flexDirection:'column'}}>
                <div className={Styles.groupColumn} style={{marginTop:'25px'}}>
                    <div className={Styles.groupInput_title}>
                    <p className={Styles.pCategory} dir='rtl'>  نام گروه غذایی :</p>
                        <input value={value} className={Styles.inputCategory} onChange={(e)=> setValue(e.target.value)} type='text' dir="rtl" placeholder='  نام گروه غذایی ... ( از 2 کاراکتر )'/>

                    </div> 


                </div>
                {value.length <2 && <p className={Styles.pError}>نام گروه غذایی نمی تواند کمتر از 2 حرف باشد</p> }
                <div className={Styles.btnParent}>

                <button className={Styles.buttonCategory} onClick={submitHandler}>ثبت</button>
                </div>
            </div>
        </div> 
    );
}
 
export default AddCategory;