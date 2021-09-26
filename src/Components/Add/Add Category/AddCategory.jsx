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
                    <div className={Styles.groupInput_title} style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'25px'}}>
                        <button className={Styles.buttonCategory} onClick={submitHandler}>ثبت</button>
                        <input value={value} className={Styles.inputCategory} onChange={(e)=> setValue(e.target.value)} type='text' dir="rtl" placeholder='  نام گروه غذایی ... ( از 2 کاراکتر )'/>
                        <p className={Styles.pCategory}> : نام گروه غذایی</p>
                    </div> 
                </div>
                {value.length <2 && <p style={{color:'red', display:'flex',justifyContent:'flex-end',width:'100%',fontFamily:'iransansweb' , marginTop:"-10px"}}>نام گروه غذایی نمی تواند کمتر از 2 حرف باشد</p>
}
            </div>
        </div> 
    );
}
 
export default AddCategory;