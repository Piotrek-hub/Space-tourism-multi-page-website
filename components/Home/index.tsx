import Navbar from '../Shared/Navbar';

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
	const controls = useAnimation();
	const animation = { scale: 1.5 };
	const reanimation = { scale: 0.33 };

	return (
		<div className="w-screen min-h-screen bg-home-desktop tablet:bg-home-tablet mobile:bg-home-mobile bg-no-repeat bg-cover select-none">
			<Navbar />
			<div className="flex items-center justify-between tablet:flex-col mt-[200px] px-[200px] tablet:px-[00px] tablet:mt-[100px]">
				<div className="flex flex-col items-left justify-between  w-1/3 tablet:w-[60%] mobile:w-[90%] tablet:items-center ">
					<span className="text-[28px] tablet:text-[20px] mobile:text-[16px] tracking-[4.72px] tablet:tracking-[3.38px] font-barlowCondensed text-lightblue">
						SO, YOU WANT TO TRAVEL TO
					</span>
					<span className="text-[150px] mobile:text-[80px] font-bellefair text-white ">
						SPACE
					</span>
					<span className="text-[18px] tablet:text-[16px] mobile:text-[15px] leading-[32px] mobile:leading-[25px] font-barlow text-lightblue text-justify tablet:text-center">
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</span>
				</div>
				<div className="flex flex-col items-center justify-around">
					<motion.div
						animate={controls}
						transition={{ duarion: 1, ease: 'easeInOut' }}
						className="absolute h-[300px] w-[300px] mobile:h-[180px] mobile:w-[180px] bg-[#979797] rounded-full tablet:mt-[100px]"
					></motion.div>
					<motion.div
						onHoverStart={() => {
							controls.start(animation);
						}}
						onHoverEnd={() => {
							controls.start(reanimation);
						}}
						className="h-[300px] w-[300px] mobile:h-[180px] mobile:w-[180px] bg-white rounded-full z-20 tablet:mt-[100px] flex flex-col items-center justify-around hover:cursor-pointer"
					>
						<Link href="/destination">
							<span className="font-bellefair text-[32px] mobile:text-[20px] tracking-[2px] z-20">
								EXPLORE
							</span>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
