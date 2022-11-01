import React from 'react';
import css from './Statistics.module.css'

export default function Statistics ({good, neutral, bad, total, positivePercentage}) {
  return (
    <ul className={css.list}>
      <li className={css.listItem}><span className={css.listItemData}>Good: {good}</span></li>
      <li className={css.listItem}><span className={css.listItemData}>Neutral: {neutral}</span></li>
      <li className={css.listItem}><span className={css.listItemData}>Bad: {bad}</span></li>
      <li className={css.listItem}><span className={css.listItemData}>Total: {total}</span></li>
      <li className={css.listItem}><span className={css.listItemData}>Positive feedback: {positivePercentage + '%'}</span></li>
    </ul>
  )
}