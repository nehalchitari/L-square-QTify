import React from "react";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg";
import styles from "./Search.module.css";



function Search({placeholder}){
    const onSubmit=(e)=>{
        e.preventDefault();

    }
    return (
        <div>
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} required placeholder={placeholder} />
            <button className={styles.SearchButton} type="submit">
                <SearchIcon />
            </button>
        </form>

        
        </div>
        
    )
    
}

export default Search;