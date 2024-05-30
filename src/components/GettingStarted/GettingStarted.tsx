import clsx from 'clsx'
import Frame from '../Frame'
import TableTitle from '../TableTitle'

import styles from './GettingStarted.module.scss'
import Video from './Video'

const GettingStarted = () => {
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
    return (
        <Frame className={styles.block}>
            <div className={styles.block__inner}>
                <div className={styles.block__content}>
                    <TableTitle title='getting started' />
                    <div className={styles.block__text}>
                        <p>3 simple steps to start making money with the Minerva bot</p>
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
            <Video />
        </Frame>
    )
}

export default GettingStarted