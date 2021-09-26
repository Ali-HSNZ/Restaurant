
import Filter from './Filter/Filter';
import Search from './Search/Search';
import Styles from './SearchFilter.module.css'
const SearchFilter = () => {
    return ( 
        <div className={Styles.parent}>
            <div className={Styles.parent_Main}>
                <Filter/>
                <Search/>
            </div>
        </div>
    );
}
 
export default SearchFilter;