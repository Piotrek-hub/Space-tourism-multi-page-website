import Image from 'next/image';
import { ICrew } from '../../types/interfaces';

interface CrewMemberProps extends ICrew {}

export default function CrewMember() {
	return (
		<div className="w-full font-bellefair flex flex-row items-center justify-between">
			<div className="flex flex-col w-1/3 font-bellefair">
				<span className="text-[32px] text-white/[0.5]">COMMANDER</span>
				<span className="text-[56px] text-white">DOUGLAS HURLEY</span>
				<span className="text-[18px] text-lightblue font-barlow">
					Douglas Gerald Hurley is an American engineer, former Marine
					Corps pilot and former NASA astronaut. He launched into
					space for the third time as commander of Crew Dragon Demo-2.
				</span>
				<div className="flex w-1/4 items-center justify-between ">
					<div className="w-6 h-6 bg-white rounded-full"></div>
					<div className="w-6 h-6 bg-white/[0.17] rounded-full"></div>
					<div className="w-6 h-6 bg-white/[0.17] rounded-full"></div>
					<div className="w-6 h-6 bg-white/[0.17] rounded-full"></div>
				</div>
			</div>
			<div className="w-1/3 self-end ">
				<img
					src="/assets/crew/image-douglas-hurley.png"
					className="w-1/2"
				/>
			</div>
		</div>
	);
}
