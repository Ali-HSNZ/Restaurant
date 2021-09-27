import { useState } from 'react';
import Styles from './AddProducts.module.css'
import { SetProducts , Category} from '../../Context/ContextProvider';




const AddProduct = () => {


    const {AddProduct , Search , Sort} = SetProducts()
    
    const categoryState = Category()

    const [name , setName] = useState('')
    const [price , setPrice] = useState('')
    const [des , setDes] = useState('')
    const [category , setCategory] = useState('')

    const AddProductHandler = ()=>{
        
        if(name.length >2 && price > 99 && des.length > 2 ){
            AddProduct(name  ,price ,des ,category)

            setName('')
            setPrice('')
            setDes('')
            setCategory('')
        }

      
    }


    
    return ( 
        <div className={Styles.addProduct}>

            
                
                <div className={Styles.group}>
                    <div className={Styles.groupColumn}>
                        <div className={Styles.groupInput_title}>
                            <input value={name} onChange={ e => setName(e.target.value) } className={`${Styles.group_input} ${Styles.group_Name_input}`} dir='rtl' type="text" placeholder="نام غذا را به فارسی وارد کنید... ( از 2 کاراکتر )"/>
                            <p className={Styles.group_Name} dir='rtl'>نام غذا : </p>
                        </div>
                        {name.length <3 && <span className={Styles.alert}>نام غذا نمی تواند خالی باشد</span>} 
                    </div>
                </div>

                <div className={Styles.group}>
                    <div className={Styles.groupColumn}>
                        <div className={Styles.groupInput_title}>
                            <input value={price} onChange={ e => setPrice(e.target.value) } className={`${Styles.group_input} ${Styles.group_Price_input}`} dir='rtl' type="number" placeholder="قیمت غذا... ( از 100 ریال )"/>
                            <p className={Styles.group_Name} dir='rtl'>قیمت  : </p>   
                        </div>
                        {price < 100 && <span className={Styles.alert}>قیمت بیشتر از 100 ریال</span>} 
                    </div>
                </div>

                <div className={Styles.group}>
                    <div className={Styles.groupColumn}>
                        <div className={Styles.groupInput_title}>
                                <textarea value={des} onChange={ e => setDes(e.target.value) } className={`${Styles.group_input} ${Styles.group_Description_input}`} dir='rtl' type="text" placeholder="توضیحات غذا  را وارد کنید... ( از 2 کاراکتر )"/>
                                <p className={Styles.group_Name} > : توضیحات  </p>   
                        </div>
                        {des.length < 3 && <span className={Styles.alert}>توضیحات غذا نمی تواند کم تر از 2 حرف باشد</span>} 
                    </div>
                </div>

                <div className={Styles.group}>
                    <div className={Styles.groupColumn}>
                        <div className={Styles.groupInput_title}>
                            <select value={category} onChange={ e => setCategory(e.target.value) } className={`${Styles.group_input} ${Styles.group_Category_input}`}>
                                <option >انتخاب گروه غذایی </option>
                                
                                {categoryState.map((p,index)=> {return  <option key={index}>{p.name}</option>})}
                            </select>
                            <p className={Styles.group_Name} dir='rtl'>دسته بندی ( گروه )  : </p>   
                        </div>
                        {des.length < 3 && <span  className={Styles.alert} style={{color:'green'}}>می توانید گروه غذایی انتخاب نکنید (اختیاری)</span>} 

                    </div>
                </div>

                <button onClick={AddProductHandler} className={Styles.submitButton}>ثبت غذا</button>

            </div>
    );
}
 
export default AddProduct;