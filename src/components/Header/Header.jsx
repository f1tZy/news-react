import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.rootSection}>
            <h1 className={s.headerTitle}>NewsExplorer</h1>
        </header>
    )
}

export default Header;
