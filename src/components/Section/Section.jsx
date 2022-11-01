import React from 'react';
import css from './Section.module.css'

export default function Section({ title, children }) {return (
    <section className={css.pageSection}>
        <h2>{title}</h2>
    {children}
    </section>)
}