import React from 'react'
import styles from './Spinner.module.css'


const Spinner = ({size}) => {
    return (
        <div className={styles.spinner}
            style={{
                height: size ? size : '60px',
                width: size ? size : '60px',
            }}
        >
            <svg width= {size ? size : '60px'} height={size ? size : '60px'} viewBox="0 0 470 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="poke-mask">
                    <rect width="470" height="470" fill="black" />
                    <circle cx="235" cy="235" r="200" fill="white" />
                    <rect x="34" y="224" width="405" height="40" fill="black" />
                    <circle cx="235" cy="235" r="100" fill="black" />
                    <circle cx="235" cy="235" r="60" fill="white" />
                    <circle cx="235" cy="235" r="30" fill="black" />
                </mask>
                <circle cx="235" cy="235" r="200" fill="#494949" mask="url(#poke-mask)" />
                <circle cx="235" cy="235" r="60" fill="#494949" mask="url(#poke-mask)" />
            </svg>
        </div>
    )
}

export default Spinner