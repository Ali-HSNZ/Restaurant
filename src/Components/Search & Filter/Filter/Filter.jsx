import  Styles  from './Filter.module.css';
import {SetProducts , Category}  from '../../Context/ContextProvider'
import { useEffect, useState } from 'react';
const Filter = () => {
    
    const {AddProduct , Sort , categoryFilter} = SetProducts()
    const category = Category()

    const [Filtercategory , setFilterCategory] = useState('')

    const categoryHandler = (e) => {
        categoryFilter(e.target.value)
        setFilterCategory(e.target.value)

    }  


    return ( 



        <div className={Styles.filterParent}>


            <div className={`${Styles.group} ${Styles.groupSort}`}>

                <select onChange={e =>Sort(e.target.value)} className={`${Styles.groupSelect} ${Styles.sort_select}`}>
                    <option value='All'>حالت پیش‌فرض</option>
                    <option value='highest'>بیش ترین</option>
                    <option value="lowest">کم ترین</option>
                </select>
                <p dir='rtl' className={Styles.priceParagraph}> قیمت : </p>
               
            </div>

            <div className={Styles.group}>

                <select onChange={categoryHandler} className={`${Styles.groupSelect} ${Styles.categori_select}`}>
                    <option>انتخاب دسته بندی</option>
                    {category.map(item => <option>{ item.name}</option>)}
                </select>
                <p dir='rtl' className={Styles.categorieParagraph}>دسته بندی : </p>

            </div>

            
        </div>

     );
}
 
export default Filter;