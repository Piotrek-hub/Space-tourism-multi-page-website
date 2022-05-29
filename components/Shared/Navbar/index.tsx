import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	const menuOptions = [
		{ num: '00', text: 'HOME', delay: 0.6, href: '/' },
		{ num: '01', text: 'DESTINATION', delay: 0.8, href: '/destination' },
		{ num: '02', text: 'CREW', delay: 1, href: '/crew' },
		{ num: '03', text: 'TECHNOLOGY', delay: 1.2, href: '/technology' },
	];
	// backdrop-blur-2tablet bg-[#979797]/[0.03]

	return (
		<div className="w-screen pt-12 pl-20 tablet:pt-0 flex items-center justify-between relative font-barlowCondensed mobile:px-6 mobile:pt-3">
			<div className="w-14 h-14 relative mobile:w-12 mobile:h-12">
				<Image src="/assets/shared/logo.svg" layout="fill" />
			</div>
			<div className="absolute w-1/3 h-[1px] bg-lightblue opacity-25 left-[11%] z-10 tablet:opacity-0"></div>

			<motion.div
				animate={{
					backdropFilter: 'blur(20px)',
				}}
				whileHover={{ backdropFilter: 'blur(30px)' }}
				transition={{ ease: 'easeOut', duration: 1 }}
				className="hover:backdrop-blur[100px] w-[60%] h-24 flex items-center justify-evenly text-white text-[18px] tablet:text-[14px]  pr-20 tablet:pr-4 mobile:hidden"
			>
				{menuOptions.map((option) => (
					<motion.div
						animate={{ y: [50, 0], opacity: [0, 1] }}
						transition={{ duration: 0.7, delay: option.delay }}
						initial={true}
						className="h-full grid place-items-center tracking-[3.5px] cursor-pointer hover:border-b-4 border-white px-2 "
					>
						<div>
							<span className="font-bold pr-2 tablet:hidden">
								{option.num}
							</span>
							<span>
								<Link href={option.href}>{option.text}</Link>
							</span>
						</div>
					</motion.div>
				))}
			</motion.div>
			<div className="w-8 h-8 relative hidden mobile:block">
				<Image src="/assets/shared/icon-hamburger.svg" layout="fill" />
			</div>
		</div>
	);
}
