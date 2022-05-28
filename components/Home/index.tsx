import Navbar from '../Shared/Navbar';

export default function Home() {
	return (
		<div className="w-screen h-screen bg-home-desktop lg:bg-home-tablet xs:bg-home-mobile bg-no-repeat bg-cover select-none">
			<Navbar />
			<div className="flex items-center justify-between xl:flex-col mt-[200px] px-[200px] xl:px-[00px] xl:mt-[100px]">
				<div className="flex flex-col items-left justify-between  w-1/3 xl:w-[60%] xs:w-[90%] xl:items-center ">
					<span className="text-[28px] xl:text-[20px] xs:text-[16px] tracking-[4.72px] xl:tracking-[3.38px] font-barlowCondensed text-lightblue">
						SO, YOU WANT TO TRAVEL TO
					</span>
					<span className="text-[150px] xs:text-[80px] font-bellefair text-white ">
						SPACE
					</span>
					<span className="text-[18px] xl:text-[16px] xs:text-[15px] leading-[32px] xs:leading-[25px] font-barlow text-lightblue text-justify xl:text-center">
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</span>
				</div>
				<div className="flex flex-col items-center justify-around h-[300px] w-[300px] xs:h-[180px] xs:w-[180px] bg-white rounded-full z-10 xl:mt-[100px]">
					<span className="font-bellefair text-[32px] xs:text-[20px] tracking-[2px] z-10">
						EXPLORE
					</span>
				</div>
			</div>
		</div>
	);
}
