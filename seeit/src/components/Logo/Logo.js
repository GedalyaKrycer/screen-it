import React from 'react';
import './style.css';

const Logo = () => {


    return (
        <div className="logo">
            <svg width="37" height="41" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M31.26 30.3869L17.1171 38.4825C9.60092 42.785 0 37.4757 0 28.5957L4.76837e-07 12.4044C9.53674e-07 3.52437 9.60093 -1.78487 17.1172 2.51756L31.26 10.6132C38.9133 14.9941 38.9133 26.006 31.26 30.3869ZM27.2857 23.4439C29.5714 22.1355 29.5714 18.8646 27.2857 17.5562L13.1429 9.46054C10.8571 8.15215 8 9.78763 8 12.4044V28.5957C8 31.2125 10.8571 32.8479 13.1429 31.5396L27.2857 23.4439Z" fill="#E7E7E7" />
                <path opacity="0.7" d="M22.0204 18.8361C23.3265 19.5756 23.3265 21.4244 22.0204 22.1639L13.9388 26.7397C12.6327 27.4792 11 26.5548 11 25.0758L11 15.9242C11 14.4452 12.6327 13.5208 13.9388 14.2603L22.0204 18.8361Z" fill="url(#paint0_linear)" />
                <defs>
                    <linearGradient id="paint0_linear" x1="17" y1="14" x2="17" y2="27" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#94BFFF" />
                        <stop offset="1" stopColor="#61A0FF" />
                    </linearGradient>
                </defs>
            </svg>

            <h1 className="logo__text">seeit</h1>
        </div>
    )
}

export default Logo;