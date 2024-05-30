'use client'
import clsx from 'clsx'
import Frame from '../Frame'
import TableTitle from '../TableTitle'

import styles from './GettingStarted.module.scss'
import Video from './Video'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const GettingStarted = () => {

	const breakpoints = {
		isMobile: useMediaQuery("(max-width: 767.98px)"),
		active: "SSR",
	}
    const steps = [
        {
            status: true,
            text: 'Register Account'
        },
        {
            status: true,
            text: 'Top up your wallet'
        },
        {
            status: false,
            text: 'Activate bot'
        },
    ]
    const mobileSteps = [
        {
            status: true,
            text: 'Register Account'
        },
        {
            status: true,
            text: 'Top up your wallet'
        },
        {
            status: false,
            text: 'Activate bot'
        },
    ]
    return (
        <Frame className={styles.block}>
            <div className={styles.block__inner}>
                <div className={styles.block__content}>
                    <TableTitle title='getting started' className={styles.title} />
                    <div className={styles.block__text}>
                        <p>3 simple steps to start making money with the Minerva bot</p>
                    </div>
                    {breakpoints.isMobile  && <Video />}
                    <div className={styles.mobileSteps}>
                        Register Account
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_30_10681" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                                <rect width="36" height="36" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_30_10681)">
                                <path d="M15.8714 24.3807L25.9559 14.2961L24.3752 12.7154L15.8714 21.2192L11.5964 16.9442L10.0156 18.525L15.8714 24.3807ZM18.0027 32.2499C16.0318 32.2499 14.1793 31.8759 12.4451 31.1279C10.7108 30.3799 9.20232 29.3648 7.91949 28.0826C6.63664 26.8003 5.62106 25.2924 4.87273 23.559C4.12441 21.8255 3.75024 19.9734 3.75024 18.0025C3.75024 16.0316 4.12424 14.179 4.87224 12.4448C5.62024 10.7106 6.63537 9.20208 7.91762 7.91925C9.19989 6.6364 10.7078 5.62081 12.4412 4.87249C14.1746 4.12416 16.0268 3.75 17.9977 3.75C19.9686 3.75 21.8211 4.124 23.5553 4.872C25.2896 5.62 26.7981 6.63513 28.0809 7.91738C29.3638 9.19965 30.3794 10.7075 31.1277 12.441C31.876 14.1744 32.2502 16.0266 32.2502 17.9975C32.2502 19.9684 31.8762 21.8209 31.1282 23.5551C30.3802 25.2893 29.365 26.7979 28.0828 28.0807C26.8005 29.3635 25.2927 30.3791 23.5592 31.1274C21.8258 31.8758 19.9736 32.2499 18.0027 32.2499Z" fill="url(#paint0_linear_30_10681)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_30_10681" x1="3.75024" y1="18" x2="32.2502" y2="18" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4757E6" />
                                    <stop offset="0.765" stopColor="#8E54E9" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.791748 2C0.791748 0.895431 1.68718 0 2.79175 0H2.91296C4.01753 0 4.91296 0.895431 4.91296 2C4.91296 3.10457 4.01753 4 2.91296 4H2.79175C1.68718 4 0.791748 3.10457 0.791748 2ZM0.791748 10C0.791748 8.89543 1.68718 8 2.79175 8H3.20806C4.31263 8 5.20806 8.89543 5.20806 10C5.20806 11.1046 4.31263 12 3.20806 12H2.79175C1.68718 12 0.791748 11.1046 0.791748 10ZM2.79175 16C1.68718 16 0.791748 16.8954 0.791748 18C0.791748 19.1046 1.68718 20 2.79175 20H3.05033C4.1549 20 5.05033 19.1046 5.05033 18C5.05033 16.8954 4.1549 16 3.05033 16H2.79175Z" fill="url(#paint0_linear_30_10684)" />
                            <defs>
                                <linearGradient id="paint0_linear_30_10684" x1="0.5" y1="1.82105e-08" x2="2.49999" y2="28" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4757E6" />
                                    <stop offset="0.484375" stopColor="#8E54E9" />
                                    <stop offset="1" stopColor="#FA0A9A" />
                                </linearGradient>
                            </defs>
                        </svg>
                        Top up your wallet
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17.5" stroke="#D9D9D9" />
                            <circle cx="18" cy="18" r="9" fill="url(#paint0_linear_30_10694)" />
                            <defs>
                                <linearGradient id="paint0_linear_30_10694" x1="9" y1="18" x2="27" y2="18" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4757E6" />
                                    <stop offset="0.765" stopColor="#8E54E9" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.939209" width="4.12121" height="4" rx="2" fill="black" fillOpacity="0.1" />
                            <rect x="0.791748" y="8" width="4.41631" height="4" rx="2" fill="black" fillOpacity="0.1" />
                            <rect x="0.870605" y="16" width="4.25859" height="4" rx="2" fill="black" fillOpacity="0.1" />
                        </svg>
                        Activate bot
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17.5" stroke="#D9D9D9" />
                        </svg>
                    </div>
                </div>
                <div className={styles.block__steps}>
                    {steps.map(step => (
                        <div className={styles.step} key={step.text}>
                            <div className={clsx(styles.step__line, step.status ? styles.complete : null)}></div>
                            <div className={styles.step__text}>
                                <span>{step.text}</span>
                                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.4847 0.366982C21.134 0.014961 20.5589 0.014961 20.2082 0.366982L9.58953 10.9831L4.12095 5.47709C3.77022 5.12378 3.19899 5.12378 2.84568 5.47709L0.929553 7.39193C0.578821 7.74137 0.578821 8.31647 0.929553 8.66849L8.94609 16.7379C9.29682 17.0873 9.86805 17.0873 10.2227 16.7379L23.3996 3.55967C23.7555 3.20765 23.7555 2.63126 23.3996 2.27795L21.4847 0.366982Z" fill={step.status ? "#26A17B" : "#E2E2E2"} />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {!breakpoints.isMobile  && <Video />}
        </Frame>
    )
}

export default GettingStarted