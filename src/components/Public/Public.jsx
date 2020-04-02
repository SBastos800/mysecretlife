import React, { Component } from "react";
import styles from './Public.module.scss';
import placeholder from '../../static/images/img_placeholder.png';

export default class Public extends Component {
    render() {
        return(
            <section className={styles.container}>
                <div className={styles.cardBox}>
                    <div className={styles.cardBoxImg}>
                        <img src={placeholder} alt="img" />
                    </div>
                    <h1>Anonymous</h1>
                </div>
                <div className={styles.infoBox}>
                    <p>Hi. I'm Anonymous</p>
                    <p>My email is:</p>
                    <h1>CLASSIFIED</h1>
                </div>
            </section>
        )
    }
}