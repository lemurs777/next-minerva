import Title from '@/components/Title'
import ButtonGradient from '@/components/ui/buttons/ButtonGradient'
import Image from 'next/image'
import faqImg from '../../../../public/images/faq.png'
import styles from './Faq.module.scss'
import Accordion from '@/components/Accordion/Accordion'

const Faq = () => {
	const accordionList = [
		{
			question: 'How does Minerva Bot work?',
			answer:
				'By connecting to the company`s exchange accounts, the Minerva bot carries out a large number of transactions on the cryptocurrency market, making a profit and adding profit to the investor`s balance on a daily basis.',
		},
		{
			question: 'How to start?',
			answer:
				'By connecting to the company`s exchange accounts, the Minerva bot carries out a large number of transactions on the cryptocurrency market, making a profit and adding profit to the investor`s balance on a daily basis.',
		},
		{
			question:
				'What cryptocurrencies are available for deposits and withdrawals?',
			answer:
				'By connecting to the company`s exchange accounts, the Minerva bot carries out a large number of transactions on the cryptocurrency market, making a profit and adding profit to the investor`s balance on a daily basis.',
		},
		{
			question: 'How to manage my balance?',
			answer:
				'By connecting to the company`s exchange accounts, the Minerva bot carries out a large number of transactions on the cryptocurrency market, making a profit and adding profit to the investor`s balance on a daily basis.',
		},
		{
			question: 'How long does it take to replenish?',
			answer:
				'By connecting to the company`s exchange accounts, the Minerva bot carries out a large number of transactions on the cryptocurrency market, making a profit and adding profit to the investor`s balance on a daily basis.',
		},
		{
			question: 'How do investment offers work?',
			answer:
				'By connecting to the company`s exchange accounts, the Minerva bot carries out a large number of transactions on the cryptocurrency market, making a profit and adding profit to the investor`s balance on a daily basis.',
		},
		{
			question:
				'Are there any fees for withdrawals or deposits on the platform?',
			answer:
				'By connecting to the company`s exchange accounts, the Minerva bot carries out a large number of transactions on the cryptocurrency market, making a profit and adding profit to the investor`s balance on a daily basis.',
		},
	]
	const defaultContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

	return (
		<section className={styles.faq}>
			<div className={styles.faq__head}>
				<Title title={'frequently asked '} titleAccent='questions' className={styles.title} />
			</div>
			<div className={styles.faq__body}>
				<div className={styles.faq__img}>
					<Image src={faqImg} alt='faq' />
					{/* <img src='/images/faq.png' alt='faq' /> */}
				</div>
				<div className={styles.faq__accordion}>
					<Accordion list={accordionList} />
				</div>
			</div>
			<div className={styles.faq__footer}>
				<ButtonGradient
					name='Full list'
					size='small'
					className={styles.faq__more}
				/>
			</div>
		</section>
	)
}

export default Faq
