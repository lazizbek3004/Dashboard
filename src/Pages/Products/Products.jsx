import TopNavbar from "../../Components/NavbarTop/TopNavbar."
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import watch from '../../Images/Watch.svg'
import stars from '../../Images/Stars.svg'
import Path from '../../Icons/Path'
import Path2 from '../../Icons/Path2'


function Products(){

	const [liked, setLiked] = useState(false)

	const changeLiked = () => {
		setLiked(!liked)
	}

	const [liked2, setLiked2] = useState(false)

	const changeLiked2 = () => {
		setLiked2(!liked2)
	}

	const [liked3, setLiked3] = useState(false)

	const changeLiked3 = () => {
		setLiked3(!liked3)
	}

	return <div className="flex flex-col flex-grow-[1] h-[100dvh] overflow-y-auto">
		<TopNavbar />
	<div className="w-full bg-primary overflow-y-auto forScrollbar flex flex-col justify-start items-start p-[30px] gap-[30px]">
		<h1 className="text-[30px] font-normal leading-[44px]">Products</h1>
		<div className="w-[1136px] h-[346px] rounded-that flex flex-col items-center justify-start bg-customBlue">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[1136px] h-[346px]">
        			<SwiperSlide className="w-full  flex flex-col justify-center items-start pl-[130px]">
						<span className="text-normal text-white leading-[30px]">September 12-22</span>
						<h1 className="text-[37px] text-white font-normal">
							Enjoy free home <br />
							delivery in this summer
						</h1>
						<span className="text-normal text-white leading-[30px] opacity-[0.8]">Designer Dresses - Pick from trendy Designer Dress.</span>
						<button className="w-[156px] h-[44px] bg-orange text-white text-small font-normal rounded-[11px] mt-[30px] cursor-pointer active:bg-orange2">Get Started</button>
					</SwiperSlide>
        			<SwiperSlide className="w-full  flex flex-col justify-center items-start pl-[130px]">
						<span className="text-normal text-white leading-[30px]">September 12-22</span>
						<h1 className="text-[37px] text-white font-normal">
							Enjoy free home <br />
							delivery in this summer
						</h1>
						<span className="text-normal text-white leading-[30px] opacity-[0.8]">Designer Dresses - Pick from trendy Designer Dress.</span>
						<button className="w-[156px] h-[44px] bg-orange text-white text-small font-normal rounded-[11px] mt-[30px] cursor-pointer active:bg-orange2">Get Started</button>
					</SwiperSlide>
      			</Swiper>
				
		</div>
		<div className="w-full flex justify-between">
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
						<div className="w-[44px] h-[44px] rounded-[50%] flex justify-center items-center bg-otherGray cursor-pointer text-white" onClick={changeLiked}>
							<Path className={liked == false ? 'block' : 'hidden'} />
							<Path2 className={liked == true ? 'block' : 'hidden'}/>
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
						<div className="w-[44px] h-[44px] rounded-[50%] flex justify-center items-center bg-otherGray cursor-pointer text-white" onClick={changeLiked2}>
							<Path className={liked2 == false ? 'block' : 'hidden'} />
							<Path2 className={liked2 == true ? 'block' : 'hidden'}/>
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
						<div className="w-[44px] h-[44px] rounded-[50%] flex justify-center items-center bg-otherGray cursor-pointer text-white" onClick={changeLiked3}>
							<Path className={liked3 == false ? 'block' : 'hidden'} />
							<Path2 className={liked3 == true ? 'block' : 'hidden'}/>
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

export default Products