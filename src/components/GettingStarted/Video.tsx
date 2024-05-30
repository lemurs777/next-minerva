import styles from './GettingStarted.module.scss'
const Video = () => {
    return (
        <div className={styles.video}>
            <div className={styles.video__layout}>
                <div className={styles.video__title}>how to start?</div>
                <button type="button" className={styles.video__play}>
                    <svg width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39 22.5L0.750002 44.5836L0.750004 0.416352L39 22.5Z" fill="url(#paint0_linear_30_9307)" />
                        <defs>
                            <linearGradient id="paint0_linear_30_9307" x1="-8.8539" y1="9.41883" x2="43.9675" y2="25.3149" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4757E6" />
                                <stop offset="0.484375" stop-color="#8E54E9" />
                                <stop offset="1" stop-color="#FA0A9A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Video