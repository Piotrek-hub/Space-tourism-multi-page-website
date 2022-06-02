import { ICrew } from '../../types/interfaces';

enum CrewMemberEnum {
	DOUGLAS,
	MARK,
	VICTOR,
	ANOUSHEH,
}

interface CrewMemberProps extends ICrew {
	setCrewMemberData: (crewMember: CrewMemberEnum) => void;
	crewMemberChoice: CrewMemberEnum;
}

export default function CrewMember(props: CrewMemberProps) {
	return (
		<div className="w-full h-full font-bellefair flex flex-row items-center justify-between tablet:flex-col">
			<div className="h-full flex flex-col justify-between items-start w-1/2 font-bellefair tablet:w-5/6 tablet:items-center mobile:order-2">
				<div className="flex flex-col items-start justify-between py-[80px] tablet:items-center tablet:pb-[40px] mobile:order-1 ">
					<span className="text-[32px] text-white/[0.5] uppercase tablet:text-[24px] mobile:text-[16px]">
						{props.title}
					</span>
					<span className="text-[50px] text-white uppercase pb-6 tablet:text-[40px] tablet:pb-3 mobile:text-[24px]">
						{props.name}
					</span>
					<span className="text-[18px] text-lightblue font-barlow leading-[36px] w-1/2 tablet-[16px] tablet:w-[90%] tablet:text-center mobile:text-[15px] mobile:leading-[25px]">
						{props.description}
					</span>
				</div>

				<div className="flex w-[100px] items-center justify-between pb-10 mobile:pt-10 mobile:pb-0">
					<div
						className={`w-[10px] h-[10px] ${
							props.crewMemberChoice === CrewMemberEnum.DOUGLAS
								? 'bg-white'
								: 'bg-white/[0.17]'
						} rounded-full`}
						onClick={() =>
							props.setCrewMemberData(CrewMemberEnum.DOUGLAS)
						}
					></div>
					<div
						className={`w-[10px] h-[10px]  ${
							props.crewMemberChoice === CrewMemberEnum.MARK
								? 'bg-white'
								: 'bg-white/[0.17]'
						} rounded-full`}
						onClick={() =>
							props.setCrewMemberData(CrewMemberEnum.MARK)
						}
					></div>
					<div
						className={`w-[10px] h-[10px]  ${
							props.crewMemberChoice === CrewMemberEnum.VICTOR
								? 'bg-white'
								: 'bg-white/[0.17]'
						} rounded-full`}
						onClick={() =>
							props.setCrewMemberData(CrewMemberEnum.VICTOR)
						}
					></div>
					<div
						className={`w-[10px] h-[10px]  ${
							props.crewMemberChoice === CrewMemberEnum.ANOUSHEH
								? 'bg-white'
								: 'bg-white/[0.17]'
						} rounded-full`}
						onClick={() =>
							props.setCrewMemberData(CrewMemberEnum.ANOUSHEH)
						}
					></div>
				</div>
			</div>

			<div className="grid place-items-center w-1/2 tablet:w-full tablet:place-items-center h-[650px] mobile:h-auto">
				<img
					src={props.imageURL}
					className="w-auto h-[650px] mobile:w-1/2 mobile:h-auto mobile:self-end mobile:border-b-[1px] mobile:border-[#383B4B]"
				/>
			</div>
		</div>
	);
}
