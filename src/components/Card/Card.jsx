import React from 'react';
import s from './Card.module.scss';


const Card = ({date, title, description, href, img}) => {
    const newDate = new Date(date);
    const lol = newDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
    console.log(lol, newDate, date)
    return (
        <div className={s.card}>
            <img className={s.cardImg} alt="Изображение карточки" src={img}/>
            <div className={s.cardInfo}>
                <p className={s.cardDate}>{lol}</p>
                <h2 className={s.cardTitle}>{title}</h2>
                <p className={s.cardText}>{description}</p>
                <a className={s.cardSource} href={href}>{href}</a>
            </div>
        </div>
    )
}

export default Card;
