import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { IDestination } from '../../types/interfaces';

enum DestinationEnum {
	moon = 'MOON',
	mars = 'MARS',
	europa = 'EUROPA',
	titan = 'TITAN',
}

interface DestinationComponent extends IDestination {
	destinationChoice: any;
	setDestination: (destination: DestinationEnum) => void;
}

export default function Destination(props: DestinationComponent) {
	const controls = useAnimation();
	const animation = { y: [50, 0], opacity: [0, 1] };
	useEffect(() => {
		controls.start(animation);
	}, []);

	return (
		<div className="flex justify-between items-start tablet:items-center tablet:flex-col mt-[70px]">
			<motion.div className="w-[550px] h-[550px] relative tablet:w-[350px] tablet:h-[350px] mobile:w-[200px] mobile:h-[200px] select-none">
				<Image src={props.imageURL} layout="fill" />
			</motion.div>
			<div className="w-[40%] flex flex-col tablet:w-[75%] tablet:items-center ">
				<div className="font-barlowCondensed text-[16px] mobile:text-[14px] tracking-[2.7px] text-lightblue flex w-[40%] tablet:w-[50%] tablet:justify-evenly tablet:py-[40px] justify-start items-start gap-6 h-10">
					<div
						className={
							props.destinationChoice === DestinationEnum.moon
								? 'text-white border-b-2 border-white '
								: 'hover:border-white/[0.5] hover:border-b-2'
						}
						onClick={() => {
							props.setDestination(DestinationEnum.moon);
							controls.start(animation);
						}}
					>
						MOON
					</div>
					<div
						className={
							props.destinationChoice === DestinationEnum.mars
								? 'text-white border-b-2 border-white hover:border-white/[0.5]'
								: 'hover:border-white/[0.5] hover:border-b-2'
						}
						onClick={() => {
							props.setDestination(DestinationEnum.mars);
							controls.start(animation);
						}}
					>
						MARS
					</div>
					<div
						className={
							props.destinationChoice === DestinationEnum.europa
								? 'text-white border-b-2 border-white hover:border-white/[0.5]'
								: 'hover:border-white/[0.5] hover:border-b-2'
						}
						onClick={() => {
							props.setDestination(DestinationEnum.europa);
							controls.start(animation);
						}}
					>
						EUROPA
					</div>
					<div
						className={
							props.destinationChoice === DestinationEnum.titan
								? 'text-white border-b-2 border-white '
								: 'hover:border-white/[0.5] hover:border-b-2'
						}
						onClick={() => {
							props.setDestination(DestinationEnum.titan);
							controls.start(animation);
						}}
					>
						TITAN
					</div>
				</div>

				<motion.div
					transition={{ duarion: 3, ease: 'easeInOut' }}
					animate={controls}
					initial={true}
				>
					<span className="text-[100px] font-bellefair text-white tablet:text-[80px] mobile:text-[56px]">
						{props.title}
					</span>
				</motion.div>

				<span className="text-[19px] tablet:text-[16px] mobile:text-[15px] font-barlow text-lightblue text-justify leading-[32px] tablet:text-center">
					{props.description}
				</span>

				<div className="w-full h-[1px] bg-[#383B4B]  my-14"></div>

				<div className="flex justify-start gap-36 mobile:flex-col mobile:gap-6 mobile:items-center">
					<div className="flex items-start justify-between flex-col mobile:items-center">
						<span className="font-barlowCondensed text-[14px] tracking-[2.36px] text-lightblue">
							AVG. DISTANCE
						</span>
						<span
							className={'font-bellefair text-[28px] text-white'}
						>
							{props.averageDistance}
						</span>
					</div>

					<div className="flex items-start justify-between flex-col mobile:items-center mobile:pb-10">
						<span className="font-barlowCondensed text-[14px] tracking-[2.36px] text-lightblue">
							EST. TRAVEL TIME
						</span>
						<span
							className={'font-bellefair text-[28px] text-white'}
						>
							{props.estimatedTravelTime}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
