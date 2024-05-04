import React, { useState } from 'react'
import styles from './investPeriod.module.scss'
import clsx from 'clsx'
const InvestPeriod = ({ className }: { className?: string }) => {
    const investmentPeriod = [
        {
            percent: 0.8,
            days: 55
        },
        {
            percent: 1,
            days: 60
        },
        {
            percent: 0.8,
            days: 55
        },
    ]
    const [period, setPeriod] = useState(0)
    return (
        <div className={clsx(styles.block__line, styles.block__lineCol, className)}>
            investment Period
            <div className={styles.block__daysItems}>
                {investmentPeriod.map((item, index) => (
                    <label className={clsx(styles.dayItem, period === index ? styles.active : null)} key={index}>
                        <input type="radio" name="invest-period" checked={period === index ? true : false} onChange={() => setPeriod(index)} />
                        <div className={styles.dayItem__percent}>~{item.percent} %</div>
                        <div className={styles.dayItem__days}>{item.days}&nbsp;<span>days</span></div>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default InvestPeriod