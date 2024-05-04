import clsx from 'clsx'
import React, { useState } from 'react'
import Frame from '../Frame'
import TableTitle from '../TableTitle'
import styles from './TransactionTabsTable.module.scss'
import TransactionTable from '../TransactionTable'
import TransactionTableSpot from '../TransactionTable/TransactionTableSpot'

const TransactionTabsTable = () => {
    const [activeBot, setActiveBot] = useState(0)
    const tabsNav = ['arbitrage', 'spot', 'futures']
    const [showTable, setShowTable] = useState(false)
    const [tabBtns, setTabBtns] = useState(0)
    return <Frame className={clsx(styles.back, styles.basic)}>
        <div className={styles.table}>
            <TableTitle title='Live bot transactions' className={styles.table__title} />
            <div className={styles.table__head}>
                <div className={styles.tabs__btns}>
                    {tabsNav.map((btn, index) => (
                        <button key={index} className={clsx(
                            tabBtns === index ? styles.active : null,
                            styles.tabs__btn)}
                            onClick={() => setTabBtns(index)}
                        >{btn}</button>
                    ))}
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.tabs__body}>
                    {tabBtns === 0 && (
                        <div className={styles.tabs__content}>
                            <TransactionTable className={styles.tabTable} />
                        </div>
                    )}
                    {tabBtns === 1 && (
                        <div className={styles.tabs__content}>
                            <TransactionTableSpot className={styles.tabTable} />
                        </div>
                    )}
                    {tabBtns === 2 && (
                        <div className={styles.tabs__content}>
                            <TransactionTableSpot className={styles.tabTable} />
                        </div>
                    )}
                </div>
            </div>


        </div>
    </Frame >
}

export default TransactionTabsTable