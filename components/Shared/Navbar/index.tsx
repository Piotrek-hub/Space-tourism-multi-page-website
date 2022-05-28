import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
	const menuOptions = [
		{ num: '00', text: 'HOME', delay: 0.6 },
		{ num: '01', text: 'DESTINATION', delay: 0.8 },
		{ num: '02', text: 'CREW', delay: 1 },
		{ num: '03', text: 'TECHNOLOGY', delay: 1.2 },
	];
	// backdrop-blur-2xl bg-[#979797]/[0.03]
	return (
		<div className="w-screen pt-20 pl-20 lg:pt-0 flex items-center justify-between relative font-barlowCondensed xs:px-6 xs:pt-3">
			<div className="w-14 h-14 relative xs:w-12 xs:h-12">
				<Image src="/assets/shared/logo.svg" layout="fill" />
			</div>
			<div className="absolute w-1/3 h-[0.5px] bg-lightblue opacity-25 left-[11%] z-10 xl:opacity-0"></div>

			<motion.div
				animate={{
					backdropFilter: 'blur(20px)',
				}}
				transition={{ duration: 0.5, delay: 1.5 }}
				className="w-[60%] h-28 flex items-center justify-evenly text-white text-[18px] lg:text-[14px]   pr-20 xl:pr-4 lg:pr-0 xs:hidden"
			>
				{menuOptions.map((option) => (
					<motion.div
						animate={{ y: [50, 0], opacity: [0, 1] }}
						transition={{ duration: 0.7, delay: option.delay }}
						initial={true}
						className="h-full grid place-items-center tracking-[3.5px] cursor-pointer hover:border-b-4 border-white px-2 "
					>
						<div>
							<span className="font-bold pr-2 lg:hidden">
								{option.num}
							</span>
							<span>{option.text}</span>
						</div>
					</motion.div>
				))}
			</motion.div>
			<div className="w-8 h-8 relative hidden xs:block">
				<Image src="/assets/shared/icon-hamburger.svg" layout="fill" />
			</div>
		</div>
	);
}
