'use client'
import React, { useState } from 'react'
import styles from './BotCard.module.scss'
import RobotImg from '../../images/icons/robot.svg'
import RobotGradientImg from '../../images/icons/robot-gradient.svg'
import Image from 'next/image'
import CustomLineChart from '../charts/CustomLineChart'
import { ApexOptions } from 'apexcharts'
import clsx from 'clsx'

interface ICard {
    title: string
    total: number
    onClick?: () => void
    className?: string
    id?: any
}


const BotCard = ({ title, total, onClick, className, id }: ICard) => {
    const series2 = [{
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]

    }]
    const options2: ApexOptions = {
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    {
                        offset: 0,
                        color: "#DAF9EE",
                        opacity: 1
                    },
                    // {
                    //     offset: 50,
                    //     color: "#3DC9C0",
                    //     opacity: 0.5
                    // },
                    {
                        offset: 100,
                        color: "#DAF9EE",
                        opacity: 0
                    }
                ]
            }
        },
        chart: {
            id: 'my-chart',
            toolbar: {
                show: false
            },
        },
        grid: {
            show: false,
            xaxis: {

                lines: {
                    show: false,


                }
            }

        },
        dataLabels: {
            enabled: false,

        },

        stroke: {
            curve: 'straight',
            width: 2,

            colors: ['#62C17A', "#37CCC9", "#36E1A1"],
            fill: {
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#62C17A",
                            opacity: 1
                        },
                        {
                            offset: 50,
                            color: "#37CCC9",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: "#36E1A1",
                            opacity: 1
                        }
                    ]
                }
            }
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            },
            labels: {
                show: false
            },
            crosshairs: {
                show: false
            }
        }

    }
    const [active, setActive] = useState(0)
    return <div className={clsx(styles.card, className, active === id ? styles.active : null)} onClick={onClick}>
        <div className={styles.slide__inner}>
            <div className={styles.slideHead}>
                <div className={styles.slideHead__title}>
                    <div className={styles.slideHead__img}>
                        <div className={clsx('slideHeadImgClassic', styles.slideHeadImgClassic)}>
                            <Image src={RobotImg} alt='robot' width={40} height={40} />
                        </div>
                        <div className={clsx('slideHeadImgActive', styles.slideHeadImgActive)}>
                            <Image src={RobotGradientImg} alt='robot' width={40} height={40} />
                        </div>
                    </div>
                    {title}
                </div>
                <div className={styles.slideHead__total}>Total trades: {total}</div>
            </div>
            <div className={styles.slideContent}>
                <div className={styles.slideContent__item}>
                    Current profit for the day: <span>+0.36%</span>
                </div>
                <div className={styles.slideContent__item}>
                    Run time: 232 days
                </div>
                <div className={styles.slideContent__item}>
                    Today trades: 6/24
                </div>
                <div className={styles.slideContent__item}>
                    Pool size: $ 1,651,851,30
                </div>
                <div className={styles.slideContent__item}>
                    AVG Daily P/L (%): +1.24%
                </div>
                <div className={styles.slideContent__item}>
                    Total ROI: +158.4%
                </div>
            </div>
            <div className={styles.slideBottom}>
                <div className={styles.slideBottom__text}>
                    Pool Load: 34%
                    <br />
                    % of profitable transactions: 92%
                </div>
                <div className={styles.chart}>
                    <CustomLineChart options={options2} series={series2} type={'area'} height={100} width={120} />
                </div>
            </div>
        </div>
    </div>
}

export default BotCard