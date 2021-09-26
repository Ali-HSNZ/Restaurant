import React,{ createContext, useContext, useEffect, useReducer, useState } from "react";
import _ from "lodash"

// const   initialState = ([

    // {Name : "ماکارونی" ,Price : 250000 ,describe : ". این ماده خوراکی بیشتر در کارخانجات به صورت خشک تولید شده و پیش از خوردن جوشانده می‌شود. معنا و شکل ماکارونی در هر کشور یا منطقه تفاوت دارد. ",categori : "پاستا",imgSrc : ''},
    // {Name : "قورمه سبزی" ,Price : 390000 ,describe : "قورمه سبزی سمبل غذاهای ایرانی است و کمتر کسی هست که این غذای اصیل ایرانی را با سبزی‌های تازه دوست نداشته باشد",categori : "خورشت",imgSrc : ''},
    // {Name : "قیمه با سیب زمینی" ,Price : 180000 ,describe : "یکی دیگر از خورشت‌های خوشمزه و خوش رنگ و لعاب برای ناهار ظهر قیمه با سیب زمینی است. این خورشت خوشمزه برای ماه محرم زبانزد است",categori : "خورشت ",imgSrc : ''},
    // {Name : "بامیه" ,Price : 20000 ,describe : "خورشت بامیه یکی از غذاهای خوشمزه و بی‌نظیر از خطه‌ی جنوب ایران است. بامیه یکی از گیاهان ضد افسردگی است. بامیه برای کنترل کلسترول خون مناسب است. مثل سویا پروتئین دارد و برای درمان کبد چرب مفید است.",categori : "خورشت ",imgSrc : ''},
    // {Name : "آبگوشت" ,Price : 410000 ,describe : "آبگوشت یک غذای سنتی و خوشمزه است که دورهمی می‌چسبد و به همین دلیل اکثر ایرانیان در ظهر جمعه آن را درست می‌کنند. آبگوشت از ترکیب گوشت تازه گوسفندی استخوان دار به همراه نخود، لوبیا و سیب زمینی درست می‌شود",categori : "نامشخص",imgSrc : ''},
  
// ])

// const initialStateCategory = ([
    // {name : "پاستا"},
    // {name : "خورشت"},
// ])

// const initialStateAllProducs = ([])




const Product = createContext()
const SetProduct = createContext()

const Categori = createContext()
const SetCategori = createContext()



const FilterProducts = createContext()
const SetFilterProducts = createContext()

const  ContextProvider= ({children}) => {

    const [filterProducts , setFilterproducts] = useState([])
    const [products,setProducts] = useState([])
    const [category,setCategory] = useState([])

    useEffect(()=>{
        setFilterproducts(products)
    },[products])

    console.log(filterProducts)


    return ( 

        <FilterProducts.Provider value={filterProducts}>
            <SetFilterProducts.Provider value={setFilterproducts}>

                <Product.Provider value={products}>
                    <SetProduct.Provider value={setProducts}>

                        <Categori.Provider value={category}>
                            <SetCategori.Provider value={setCategory}>

                                {children}

                            </SetCategori.Provider>
                        </Categori.Provider>
                    
                    </SetProduct.Provider>
                </Product.Provider>

            </SetFilterProducts.Provider>
        </FilterProducts.Provider>

               

    );
}
 
export default ContextProvider;

export const FilterProduct = ()=> useContext(FilterProducts)
export const Products = () => useContext(Product)  
export const SetProducts = () =>{

    const setProduct = useContext(SetProduct)
    const product = useContext(Product)
    
    const setFilterProducts = useContext(SetFilterProducts)

        var AllProduct = [];

        useEffect(()=>{
            categoryFilter()
        },[product])
  
            

        const AddProduct = (name  ,price ,des ,category ,imgSrc)=> {

            setProduct([...product,{Name:name , Price : price , describe : des , Category : category , ImgSrc : imgSrc}])
            AllProduct.push({Name:name , Price : price , describe : des , Category : category , ImgSrc : imgSrc})
            
        }


        const Search = (value)=> {
            // const value = action.event.target.value



                

            if(value === ""){
                setFilterProducts(product)
            }else{
                const items = product.filter(item => item.Name.includes(value))
                setFilterProducts(items)
            }

          
        
        }
        const Sort = (value) =>{
            if(value === "All"){
                setFilterProducts(product)
            }
            else if(value === "highest"){
                 setFilterProducts(_.orderBy(product, 'Price', 'desc'));
            }else{
              
                setFilterProducts( _.orderBy(product, 'Price', 'asc'));
           
            }      
        }    
        const  categoryFilter = (value)=> {
            //     const value = action.event.target.value

            if(value === "انتخاب دسته بندی"){
                setFilterProducts(product)
            }else{
                const items = product.filter(item => item.Category.includes(value))
                setFilterProducts(items)
            }
            
                
         }


            return {AddProduct , Search , Sort , categoryFilter}
}  






    
export const Category = () => useContext(Categori)  
export const SetCategory = () => {
    const categorie = useContext(Categori)
    const setCategorie = useContext(SetCategori)

    const setNewCategorie = (e)=> {
        setCategorie([...categorie,{name : e}])
    }

    return{setNewCategorie}

}  

// export const AllProduct = () => useContext(Allproducts)  
// export const SetAllProduct = () => useContext(SetAllProducts)  


        // case "categoryFilter" : {
        //     const value = action.event.target.value

        //     // console.log(initialState)
        //     // console.log(action.event.sor)

        //         return state.filter(item => item.categori.includes(value) )
                
            


            
        // }
        // default: return state



// }
// const reduceCategory = (state , action) => {



//     switch(action.type){
//         case 'AddCategory' : {

//             return [...state,{name : action.event}]
//         }
//         default: return state
//     }
// }

// const reducerAllProducts = (state , action) => {}