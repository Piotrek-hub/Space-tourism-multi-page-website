import Image from 'next/image';

export default function Navbar() {
	return (
		<div className="w-screen pt-20 pl-20 lg:pt-0 flex items-center justify-between relative font-barlowCondensed xs:px-6 xs:pt-3">
			<div className="w-14 h-14 relative xs:w-12 xs:h-12">
				<Image src="/assets/shared/logo.svg" layout="fill" />
			</div>
			<div className="absolute w-1/3 h-[0.5px] bg-lightblue opacity-25 left-[11%] z-10 xl:opacity-0"></div>

			<div className="w-[60%] h-28 flex items-center justify-evenly text-white text-[18px] lg:text-[14px] bg-[#979797]/[0.03] backdrop-blur-2xl pr-20 xl:pr-4 lg:pr-0 xs:hidden">
				<div className="h-full grid place-items-center tracking-[3.5px] cursor-pointer hover:border-b-4 border-white px-2 ">
					<div>
						<span className="font-bold pr-2 lg:hidden">00</span>
						<span>HOME</span>
					</div>
				</div>
				<div className="h-full grid place-items-center tracking-[3.5px] cursor-pointer hover:border-b-4 border-white px-2 ">
					<div>
						<span className="font-bold pr-2 lg:hidden">01</span>
						<span>DESTINATION</span>
					</div>
				</div>
				<div className="h-full grid place-items-center tracking-[3.5px] cursor-pointer hover:border-b-4 border-white px-2 ">
					<div>
						<span className="font-bold pr-2 lg:hidden">02</span>
						<span>CREW</span>
					</div>
				</div>
				<div className="h-full grid place-items-center tracking-[3.5px] cursor-pointer hover:border-b-4 border-white px-2 ">
					<div>
						<span className="font-bold pr-2 lg:hidden ">03</span>
						<span>TECHNOLOGY</span>
					</div>
				</div>
			</div>
			<div className="xxl:hidden xs:block w-8 h-8 relative">
				<Image src="/assets/shared/icon-hamburger.svg" layout="fill" />
			</div>
		</div>
	);
}
