import { useEffect, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimenstions';
import { ITechnology } from '../../types/interfaces';

interface ITechnologyComponent extends ITechnology {
	setTechnologyDataChoice: (choice: technologyMenuChoice) => void;
	technologyChoice: technologyMenuChoice;
}

enum technologyMenuChoice {
	LAUNCH_VEHICLE = 'LAUNCH VEHICLE',
	SPACEPORT = 'SPACEPORT',
	SPACE_CAPSULE = 'SPACE CAPSULE',
}

export default function TechnologyComponent(props: ITechnologyComponent) {
	const dimensions: any = useWindowDimensions();

	const [imageURL, setImageURL] = useState<string>();

	const calculateImageURL = () => {
		setImageURL(
			dimensions.width < 1023
				? props.imageURL.replace('portrait', 'landscape')
				: props.imageURL
		);
	};

	useEffect(() => {
		calculateImageURL();
	}, [props.imageURL]);

	useEffect(() => {
		calculateImageURL();
	}, [dimensions]);

	return (
		<div className="w-full h-full flex items-center justify-between pl-[200px] tablet:p-0 tablet:w-full tablet:flex-col-reverse">
			{/* Menu */}
			<div className="h-full w-1/5 flex flex-col items-end justify-center gap-6 font-bellefair text-[32px] tablet:text-[24px] mobile:text-[16px] tablet:flex-row tablet:w-full tablet:order-2 tablet:py-10">
				<div
					className={`w-20 h-20 tablet:w-14 tablet:h-14 mobile:w-10 mobile:h-10  rounded-full grid place-items-center cursor-pointer ${
						props.technologyChoice ===
						technologyMenuChoice.LAUNCH_VEHICLE
							? 'bg-white'
							: 'border-[1px] border-lightblue/[0.25] text-white'
					}`}
					onClick={() =>
						props.setTechnologyDataChoice(
							technologyMenuChoice.LAUNCH_VEHICLE
						)
					}
				>
					1
				</div>
				<div
					className={`w-20 h-20 tablet:w-14 tablet:h-14 mobile:w-10 mobile:h-10 rounded-full grid place-items-center cursor-pointer ${
						props.technologyChoice ===
						technologyMenuChoice.SPACEPORT
							? 'bg-white'
							: 'border-[1px] border-lightblue/[0.25] text-white'
					}`}
					onClick={() =>
						props.setTechnologyDataChoice(
							technologyMenuChoice.SPACEPORT
						)
					}
				>
					2
				</div>
				<div
					className={`w-20 h-20 tablet:w-14 tablet:h-14 mobile:w-10 mobile:h-10  rounded-full grid place-items-center cursor-pointer ${
						props.technologyChoice ===
						technologyMenuChoice.SPACE_CAPSULE
							? 'bg-white'
							: 'border-[1px] border-lightblue/[0.25] text-white'
					}`}
					onClick={() =>
						props.setTechnologyDataChoice(
							technologyMenuChoice.SPACE_CAPSULE
						)
					}
				>
					3
				</div>
			</div>
			{/* Content */}
			<div className="flex flex-col h-full w-1/3 mr-[100px] justify-center items-start tablet:order-1 tablet:w-4/5 tablet:items-center tablet:m-0 mobile:w-full">
				<span className="text-[18px] font-barlowCondensed tracking-[2.7px] text-lightblue tablet:text-[16px] mobile:text-[14px]">
					THE TERMINOLOGY…
				</span>
				<span className="text-[56px] font-bellefair text-white tablet:text-[40px] mobile:text-[24px] tablet:py-3">
					{props.title}
				</span>
				<span className="leading-[32px] text-[18px] text-lightblue font-barlow w-[75%] tablet:text-center tablet:text-[16px] mobile:text-[15px] mobile:w-[90%]">
					{props.description}
				</span>
			</div>
			{/* Image */}
			<img
				src={imageURL}
				className="w-1/3 tablet:order-3 tablet:w-full tablet:scale-[102%]"
			/>
		</div>
	);
}
