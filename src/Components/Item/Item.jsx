import Styles from './Item.module.css'
import image from '../../image/1.jpg'
import { Products , FilterProduct } from '../Context/ContextProvider';


const Item = () => {

    const products = FilterProduct()
    
    if(products.length ===0){
        return(
            <div className={Styles.parent}>
                <div className={Styles.parent_Main} style={{marginBottom:'25px'}}>
                    <div className={Styles.noData}>
                        <p dir='rtl'> غذایی ثبت نکرده اید ! یا غذایی که دنبال آن میگردید در این لیست موجود نیست</p>
                    </div>
                </div>
            </div>
        )
    }else{

    return ( 
        
        <div className={Styles.parent}>
            <div className={Styles.parent_Main}>
              
                
                {products.map((p,index)=> {

                    

                    return(
                        

                        <div className={Styles.item} key={index}>


                            <div className={Styles.Price_Btn}>
                                <p className={Styles.price} dir='rtl'>{p.Price} ريال</p>
                                <button className={Styles.Submit}>سفارش غذا</button>
                            </div>

                            <div className={Styles.Paragraph_Description} style={{width:'100%'}}>
                                <div style={{width:'100%',display : 'flex',justifyContent:'flex-end' , flexDirection:'column'}}>
                                    <p dir='rtl' className={Styles.Paragraph}>{p.Name}</p>
                                    <p dir='rtl'>{p.describe}</p>
                                </div>
                               
                            </div>

                            <div className={Styles.image}>
                                <img src={image} alt='عکس غذا'/>
                            </div>

                        </div>
           
                    )
                })}

              

            </div>
        </div>
    );
    }
}
 
export default Item;