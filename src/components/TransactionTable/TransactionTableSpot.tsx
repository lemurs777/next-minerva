
import React from 'react'
import styles from './TransactionTable.module.scss'
import Image from 'next/image'
import bitfinexImg from '@/images/wallets/bitfinex.png'
import bitgetImg from '@/images/wallets/bitget.png'
import btcImg from '@/images/wallets/btc.svg'
import usdtImg from '@/images/wallets/usdt.svg'
import pairImg from '@/images/icons/pair.svg'
import { transactionTbale } from '../../../public/db/transactionTable'
import clsx from 'clsx'
const TransactionTableSpot = ({ className }: { className?: string }) => {
    return <div className={clsx(className, styles.table)}>
        <table>
            <thead>
                <tr>
                    <th>trading bot</th>
                    <th>exchange pair</th>
                    <th>currency pair</th>
                    <th>quantity ($)</th>
                    <th>P/L (%)</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {transactionTbale.map((item, index) => (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>
                            <div className={styles.row}>
                                <div className={styles.walletIcon}><Image src={bitgetImg} alt={'wallet'} width={22} height={22} /></div>
                            </div>
                        </td>
                        <td>
                            <div className={styles.row}>
                                <div className={styles.walletIcon}><Image src={btcImg} alt={'wallet'} width={22} height={22} /></div>
                                <button type="button" className={styles.pair}>
                                    <Image src={pairImg} alt='pair coin' />
                                </button>
                                <div className={styles.walletIcon}><Image src={usdtImg} alt={'wallet'} width={22} height={22} /></div>
                            </div>
                        </td>
                        <td>
                            <div className={styles.lgText}>{item.price}</div>
                        </td>
                        <td>
                            <div className={styles.lgTextAccent}>{item.percent}</div>
                        </td>
                        <td>
                            <div className={styles.lgText}>{item.time}</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default TransactionTableSpot