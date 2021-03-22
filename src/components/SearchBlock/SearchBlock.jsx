import React from 'react';
import s from './SearchBlock.module.scss'

const SearchBlock = () => {
    return (
        <div className={s.search}>
            <p className={s.searchTitle}>Что в мире творится?</p>
            <h2 className={s.searchSubtitle}>Находите самые свежие статьи на любую тему.</h2>
            <form className={s.searchForm}>
                <input
                    type="text"
                    className={s.searchInput}
                    name="search"
                    placeholder="Введите тему новости"
                    required
                    minLength="2"/>
                <button className={`button ${s.searchButton}`}>Искать</button>
                <span className={`error ${s.errorSearch}`}>Нужно ввести минимум 2 символа</span>
            </form>
        </div>
    )
}

export default SearchBlock;
