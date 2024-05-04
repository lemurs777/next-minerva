import Title from '@/components/Title'
import styles from './ProfitCalculation.module.scss'
import Switch from '@/components/ui/Switch'
import RangeSlider from '@/components/ui/RangeSlider'
import clsx from 'clsx'
import { useState } from 'react'
import InvestPeriod from '@/components/InvestPeriod/InvestPeriod'

const Block = () => {
	// const investmentPeriod = [
	// 	{
	// 		percent: 0.8,
	// 		days: 55
	// 	},
	// 	{
	// 		percent: 1,
	// 		days: 60
	// 	},
	// 	{
	// 		percent: 0.8,
	// 		days: 55
	// 	},
	// ]
	// const [period, setPeriod] = useState(0)
	return (
		<div className={styles.block}>
			<div className={styles.block__inner}>
				<div className={styles.block__col}>
					<Title
						title='Profit'
						className={styles.block__title}
						titleAccent='calculation'
					/>
					<div className={styles.block__wrap}>
						<div className={styles.block__line}>
							Amount of investment <span>1000$</span>
						</div>
						<RangeSlider />
					</div>
					{/* <div className={styles.block__line}>
						investment Period
						<span>
							30 <small>days</small>
						</span>
					</div> */}
					{/* <div className={clsx(styles.block__line,styles.block__lineCol)}>
						investment Period
						<div className={styles.block__daysItems}>
							{investmentPeriod.map((item, index) => (
								<label className={clsx(styles.dayItem, period === index ? styles.active : null)} key={index}>
									<input type="radio" name="invest-period" checked={period === index ? true : false} onChange={()=>setPeriod(index)}/>
									<div className={styles.dayItem__percent}>~{item.percent} %</div>
									<div className={styles.dayItem__days}>{item.days}&nbsp;<span>days</span></div>
								</label>
							))}
						</div>
					</div> */}
					<InvestPeriod />
					<div className={styles.block__line}>
						Compounding
						<Switch />
					</div>
				</div>
				<div className={styles.block__col}>
					<div className={styles.block__roi}>
						+30% <span>ROI</span>
					</div>
					<ul className={styles.block__percents}>
						<li className={styles.percent}>
							<div className={styles.percent__item}>
								110.55$ / <span>1%</span>
							</div>
							<div className={styles.percent__name}>daily</div>
						</li>
						<li className={styles.percent}>
							<div className={styles.percent__item}>
								170.33$ / <span>7%</span>
							</div>
							<div className={styles.percent__name}>weekly</div>
						</li>
						<li className={styles.percent}>
							<div className={styles.percent__item}>
								1300.55$/ <span>30%</span>
							</div>
							<div className={styles.percent__name}>total</div>
						</li>
					</ul>
					<div className={styles.block__sum}>~13020.00$</div>
				</div>
			</div>
		</div>
	)
}

export default Block
