import  Styles  from './Filter.module.css';
import {SetProducts , Category}  from '../../Context/ContextProvider'
import { useEffect, useState } from 'react';
const Filter = () => {
    
    const {AddProduct  , categoryFilter} = SetProducts()
    const category = Category()

    const [Filtercategory , setFilterCategory] = useState('')

    const categoryHandler = (e) => {
        categoryFilter(e.target.value)
        setFilterCategory(e.target.value)

    }  


    return ( 



        <div className={Styles.filterParent}>


            <div className={Styles.group}>

              

                <select onChange={categoryHandler} className={`${Styles.groupSelect} ${Styles.categori_select}`}>
                    <option>انتخاب دسته بندی</option>
                    {category.map(item => <option>{ item.name}</option>)}
                </select>

                
                <p dir='rtl' className={Styles.groupParagraph}>دسته بندی : </p>

            </div>

            <div className={Styles.group}>

                <select onChange={e =>AddProduct(e)} className={`${Styles.groupSelect} ${Styles.sort_select}`}>
                    <option>حالت پیش‌فرض</option>
                    <option>بیش ترین</option>
                    <option>کم ترین</option>
                </select>

                <p dir='rtl' className={Styles.groupParagraph}> قیمت : </p>
               
            </div>
        </div>

     );
}
 
export default Filter;