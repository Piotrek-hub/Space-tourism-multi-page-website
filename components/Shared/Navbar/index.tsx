import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [menuVisible, setMenuVisible] = useState(false);

	const controls = useAnimation();
	const animation = {
		x: [200, 0],
		'backdrop-filter': ['blur(0px)', 'blur(32px)', 'blur(50px)'],
	};

	useEffect(() => {
		console.log(menuVisible);
	}, [menuVisible]);

	const menuOptions = [
		{ num: '00', text: 'HOME', delay: 0.6, href: '/' },
		{ num: '01', text: 'DESTINATION', delay: 0.8, href: '/destination' },
		{ num: '02', text: 'CREW', delay: 1, href: '/crew' },
		{ num: '03', text: 'TECHNOLOGY', delay: 1.2, href: '/technology' },
	];

	return (
		<div className="w-screen pt-12 pl-20 tablet:pt-0 flex items-center justify-between relative font-barlowCondensed mobile:px-6 mobile:pt-3">
			<div className="w-14 h-14 relative mobile:w-12 mobile:h-12">
				<Link href="/">
					<Image src="/assets/shared/logo.svg" layout="fill" />
				</Link>
			</div>
			<div className="absolute w-1/3 h-[1px] bg-lightblue opacity-25 left-[11%] z-10 tablet:opacity-0"></div>

			<motion.div
				animate={{
					backdropFilter: 'blur(20px)',
				}}
				whileHover={{ backdropFilter: 'blur(30px)' }}
				transition={{ ease: 'easeOut', duration: 1 }}
				className="hover:backdrop-blur[100px] w-[60%] h-24 flex items-center justify-evenly text-white text-[18px] tablet:text-[14px] pr-20 tablet:pr-4 mobile:hidden"
			>
				{menuOptions.map((option) => (
					<motion.div
						key={option.num}
						animate={{ y: [30, 0], opacity: [0, 1] }}
						transition={{ duration: 0.3, delay: option.delay }}
						initial={true}
						className="h-full grid place-items-center tracking-[3.5px] cursor-pointer hover:border-b-4 border-white px-2"
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
			<div className="w-8 h-8 relative hidden mobile:block z-40">
				<Image
					src="/assets/shared/icon-hamburger.svg"
					layout="fill"
					onClick={() => {
						setMenuVisible(!menuVisible);
						controls.start(animation);
					}}
				/>
			</div>
			<motion.div
				animate={controls}
				transition={{ duarion: 1, ease: 'easeInOut' }}
				className={`backdrop-blur-[50px]  w-3/4 h-screen top-0 right-0 z-30 hidden mobile:flex-col mobile:items-start text-white fixed pt-32 ${
					menuVisible ? 'mobile:flex' : 'hidden'
				} `}
			>
				{/* <div className="w-[20px] h-[20px] relative self-end m-10 ">
					<Image src="/assets/shared/icon-close.svg" layout="fill" />
				</div> */}
				{menuOptions.map((option) => (
					<motion.div
						key={option.num}
						animate={{ y: [50, 0], opacity: [0, 1] }}
						transition={{
							duration: 0.7,
							delay: option.delay + 0.5,
						}}
						initial={true}
						className="grid place-items-start tracking-[3.5px] cursor-pointer hover:border-b-4 border-white pl-10 py-6 w-full mobile:border-none "
					>
						<div className="flex text-[16px]">
							<span className="font-bold mobile:block pr-2 tablet:hidden">
								{option.num}
							</span>
							<span>
								<Link href={option.href}>{option.text}</Link>
							</span>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
