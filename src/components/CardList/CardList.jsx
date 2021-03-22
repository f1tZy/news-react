import React from 'react';
import s from './CardList.module.scss';
import Card from "../Card/Card";
import data from "../../api/data.json";

const CardList = () => {

    const cards = data.articles.map((card, idx) => {
        return <Card key={idx} title={card.title}
                     description={card.description}
                     date={card.publishedAt}
                     href={card.url}
                     img={card.urlToImage}/>
    })
    return (
        <div className={s.results}>
            <h3 className={s.resultsTitle}>Результаты поиска</h3>
            <div className={s.resultsCardsContainer}>
                {cards}
            </div>
            <button className={`button ${s.resultsShowMore}`}>Показать ещё</button>
        </div>
    )
}


export default CardList;
