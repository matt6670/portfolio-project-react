import React from 'react';
import styles from './Info.module.css';

const Info = () => {
    return (
        <div className={styles.heroDiv} id="infoSection">
            <header>
                <h1 style={{fontSize: "100px", fontWeight:'900' }}>PORT <br/> FoLiO</h1>
                <br />
                <p>A codie trainee at FutureProof</p>
                <br />
                <em>James Abustan</em>
            </header>
        </div>
    
    )
}

export default Info;