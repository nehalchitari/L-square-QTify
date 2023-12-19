import React from "react";
import styles from "./Logo.module.css";
import {ReactComponent as Logoo} from "../../assets/qtify_logo.svg";

function Logo() {
    return (
        <div className={styles.logoContainer}>
            <Logoo />
        </div>

    )
}

export default Logo;