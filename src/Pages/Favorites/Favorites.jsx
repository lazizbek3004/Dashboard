import TopNavbar from "../../Components/NavbarTop/TopNavbar."
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import watch from '../../Images/WhiteWatch.svg'
import stars from '../../Images/Stars.svg'
import redHeart from '../../Images/redHeart.svg'
import whiteHeart from '../../Images/whiteHeart.svg'


function Favorites(){

	const [red, setRed] = useState(false)

	const changeRed = () => {
		setRed(!red)
	}

	const [red1, setRed1] = useState(false)

	const changeRed1 = () => {
		setRed1(!red1)
	}

	const [red2, setRed2] = useState(false)

	const changeRed2 = () => {
		setRed2(!red2)
	}

	const [red3, setRed3] = useState(false)

	const changeRed3 = () => {
		setRed3(!red3)
	}

	const [red4, setRed4] = useState(false)

	const changeRed4 = () => {
		setRed4(!red4)
	}

	const [red5, setRed5] = useState(false)

	const changeRed5 = () => {
		setRed5(!red5)
	}

	return <div className="flex flex-col flex-grow-[1] h-[100dvh] overflow-y-auto">
		<TopNavbar />
		<div className="w-full bg-primary overflow-y-auto forScrollbar flex flex-col justify-start items-start p-[30px] gap-[30px]">
		<h1 className="text-[32px] text-grey2 font-normal leading-[44px]">Favorites</h1>
		<div className="w-full flex justify-between items-center">
			<div className="min-w-[360px] min-h-[500px] bg-white rounded-that overflow-hidden flex flex-col justify-start items-start">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[360px] h-[320px]">
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
      			</Swiper>
				<div className="w-full flex flex-col justify-center items-start p-[24px]">
					<div className="w-full flex justify-between items-center">
						<div className="flex flex-col justify-start items-start">
							<span className="text-large font-normal text-grey2 leading-[20px]">Apple Watch Series 4 </span>
							<span className="text-normal text-openBlue font-normal mt-[4px]">
								$120.00
							</span>
						</div>
						<div className="w-[44px] h-[44px] rounded-[50%] cursor-pointer" onClick={changeRed} >
							<img src={redHeart} alt="fuck" className={red == true ? "block" : "hidden"} />
							<img src={whiteHeart} alt="dick" className={red == false ? "block" : "hidden"} />
						</div>
					</div>
					<img src={stars} alt="" className="pt-[8px] pb-[20px]" />

					<button className="w-[126px] h-[38px] bg-anotherGray rounded-[12px] text-grey2 font-normal">Edit Product</button>
				</div>

			</div>
			<div className="min-w-[360px] min-h-[500px] bg-white rounded-that overflow-hidden flex flex-col justify-start items-start">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[360px] h-[320px]">
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
      			</Swiper>
				<div className="w-full flex flex-col justify-center items-start p-[24px]">
					<div className="w-full flex justify-between items-center">
						<div className="flex flex-col justify-start items-start">
							<span className="text-large font-normal text-grey2 leading-[20px]">Apple Watch Series 4 </span>
							<span className="text-normal text-openBlue font-normal mt-[4px]">
								$120.00
							</span>
						</div>
						<div className="w-[44px] h-[44px] rounded-[50%] cursor-pointer" onClick={changeRed1} >
							<img src={redHeart} alt="fuck" className={red1 == true ? "block" : "hidden"} />
							<img src={whiteHeart} alt="dick" className={red1 == false ? "block" : "hidden"} />
						</div>
					</div>
					<img src={stars} alt="" className="pt-[8px] pb-[20px]" />

					<button className="w-[126px] h-[38px] bg-anotherGray rounded-[12px] text-grey2 font-normal">Edit Product</button>
				</div>

			</div>

			<div className="min-w-[360px] min-h-[500px] bg-white rounded-that overflow-hidden flex flex-col justify-start items-start">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[360px] h-[320px]">
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
      			</Swiper>
				<div className="w-full flex flex-col justify-center items-start p-[24px]">
					<div className="w-full flex justify-between items-center">
						<div className="flex flex-col justify-start items-start">
							<span className="text-large font-normal text-grey2 leading-[20px]">Apple Watch Series 4 </span>
							<span className="text-normal text-openBlue font-normal mt-[4px]">
								$120.00
							</span>
						</div>
						<div className="w-[44px] h-[44px] rounded-[50%] cursor-pointer" onClick={changeRed2} >
							<img src={redHeart} alt="fuck" className={red2 == true ? "block" : "hidden"} />
							<img src={whiteHeart} alt="dick" className={red2 == false ? "block" : "hidden"} />
						</div>
					</div>
					<img src={stars} alt="" className="pt-[8px] pb-[20px]" />

					<button className="w-[126px] h-[38px] bg-anotherGray rounded-[12px] text-grey2 font-normal">Edit Product</button>
				</div>

			</div>
			


		</div>
		<div className="w-full flex justify-between items-center">
			<div className="min-w-[360px] min-h-[500px] bg-white rounded-that overflow-hidden flex flex-col justify-start items-start">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[360px] h-[320px]">
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
      			</Swiper>
				<div className="w-full flex flex-col justify-center items-start p-[24px]">
					<div className="w-full flex justify-between items-center">
						<div className="flex flex-col justify-start items-start">
							<span className="text-large font-normal text-grey2 leading-[20px]">Apple Watch Series 4 </span>
							<span className="text-normal text-openBlue font-normal mt-[4px]">
								$120.00
							</span>
						</div>
						<div className="w-[44px] h-[44px] rounded-[50%] cursor-pointer" onClick={changeRed3} >
							<img src={redHeart} alt="fuck" className={red3 == true ? "block" : "hidden"} />
							<img src={whiteHeart} alt="dick" className={red3 == false ? "block" : "hidden"} />
						</div>
					</div>
					<img src={stars} alt="" className="pt-[8px] pb-[20px]" />

					<button className="w-[126px] h-[38px] bg-anotherGray rounded-[12px] text-grey2 font-normal">Edit Product</button>
				</div>

			</div>
			<div className="min-w-[360px] min-h-[500px] bg-white rounded-that overflow-hidden flex flex-col justify-start items-start">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[360px] h-[320px]">
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
      			</Swiper>
				<div className="w-full flex flex-col justify-center items-start p-[24px]">
					<div className="w-full flex justify-between items-center">
						<div className="flex flex-col justify-start items-start">
							<span className="text-large font-normal text-grey2 leading-[20px]">Apple Watch Series 4 </span>
							<span className="text-normal text-openBlue font-normal mt-[4px]">
								$120.00
							</span>
						</div>
						<div className="w-[44px] h-[44px] rounded-[50%] cursor-pointer" onClick={changeRed4} >
							<img src={redHeart} alt="fuck" className={red4 == true ? "block" : "hidden"} />
							<img src={whiteHeart} alt="dick" className={red4 == false ? "block" : "hidden"} />
						</div>
					</div>
					<img src={stars} alt="" className="pt-[8px] pb-[20px]" />

					<button className="w-[126px] h-[38px] bg-anotherGray rounded-[12px] text-grey2 font-normal">Edit Product</button>
				</div>

			</div>

			<div className="min-w-[360px] min-h-[500px] bg-white rounded-that overflow-hidden flex flex-col justify-start items-start">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[360px] h-[320px]">
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
        			<SwiperSlide className="w-full h-full"><img src={watch} alt="" /></SwiperSlide>
      			</Swiper>
				<div className="w-full flex flex-col justify-center items-start p-[24px]">
					<div className="w-full flex justify-between items-center">
						<div className="flex flex-col justify-start items-start">
							<span className="text-large font-normal text-grey2 leading-[20px]">Apple Watch Series 4 </span>
							<span className="text-normal text-openBlue font-normal mt-[4px]">
								$120.00
							</span>
						</div>
						<div className="w-[44px] h-[44px] rounded-[50%] cursor-pointer" onClick={changeRed5} >
							<img src={redHeart} alt="fuck" className={red5 == true ? "block" : "hidden"} />
							<img src={whiteHeart} alt="dick" className={red5 == false ? "block" : "hidden"} />
						</div>
					</div>
					<img src={stars} alt="" className="pt-[8px] pb-[20px]" />

					<button className="w-[126px] h-[38px] bg-anotherGray rounded-[12px] text-grey2 font-normal">Edit Product</button>
				</div>

			</div>
			


		</div>

		</div>

	</div>
}

export default Favorites