
import Add from '../Add/Add';
import ContextProvider from '../Context/ContextProvider';
import Item from '../Item/Item';
import HeaderAndMenu from '../Navigation/Header&Menu';
import SearchFilter from '../Search & Filter/SearchFilter';
import Styles from './Main.module.css'
const Main = () => {
  return<>
      <div className={Styles.parent}>
          <div className={Styles.parentCenter}>
              
              
              <ContextProvider>
               
                <HeaderAndMenu/>
                <Add/>
                <SearchFilter/>
                <Item/>

              </ContextProvider>
          </div>
      </div>
  </>
};

export default Main;
