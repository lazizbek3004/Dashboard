import TopNavbar from "../../Components/NavbarTop/TopNavbar."
import Users from '../../Images/Users.svg'
import UpwardTrend from '../../Images/UpwardT.svg'
import Order from '../../Images/Order.svg'
import downward from '../../Images/downward.svg'
import Sales from '../../Images/Sales.svg'
import Pending from '../../Images/Pending.svg'
import Units from '../../Images/Units.svg'
import NextPosition from '../../Images/Graph.svg'
import Points from '../../Images/Points.svg'
import TopSale from '../../Images/TopSale.svg'
import Bitmap from '../../Images/Bitmap.svg'
import RevenueGraph from '../../Images/RevenueGraph.svg'
import CustomerChart from '../../Images/CustomerChart.svg'
import FinalChart from '../../Images/FinalChart.svg'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';


function Dashboard(){
	return <div className="flex flex-col flex-grow-[1] h-[100dvh] overflow-y-auto relative">
			<TopNavbar />
			<div className="w-full p-[30px] flex flex-col gap-[30px] justify-start items-start overflow-y-auto forScrollbar bg-primary">
				<h1 className="text-[30px] font-normal leading-[44px]">Dashboard</h1>
				<div className="w-full flex justify-between items-center">
					<div className="cursor-pointer w-[262px] p-[16px] flex flex-col gap-[30px] justify-start items-start bg-white rounded-[14px]">
						<div className="w-full flex justify-between items-center">
							<div className="flex flex-col justify-start gap-[15px]">
								<span className="text-normal font-normal text-grey2 opacity-[0.7]">Total Users</span>
								<p className="text-[28px] text-grey2 leading-[38px] font-normal">40,689</p>
							</div>
							<img src={Users} alt="" />
						</div>
						<div className="w-full flex gap-[8px] items-center">
							<img src={UpwardTrend} alt="" />
							<p className="text-normal font-normal text-grey2 opacity-[0.7]"><span className="text-openBlue">8.5%</span> Up from yesterday</p>
						</div>

					</div>
					<div className="cursor-pointer w-[262px] p-[16px] flex flex-col gap-[30px] justify-start items-start bg-white rounded-[14px]">
						<div className="w-full flex justify-between items-center">
							<div className="flex flex-col justify-start gap-[15px]">
								<span className="text-normal font-normal text-grey2 opacity-[0.7]">Total Orders</span>
								<p className="text-[28px] text-grey2 leading-[38px] font-normal">10,293</p>
							</div>
							<img src={Order} alt="" />
						</div>
						<div className="w-full flex gap-[8px] items-center">
							<img src={UpwardTrend} alt="" />
							<p className="text-normal font-normal text-grey2 opacity-[0.7]"><span className="text-openBlue">1.3%</span> Up from yesterday</p>
						</div>

					</div>
					<div className="cursor-pointer w-[262px] p-[16px] flex flex-col gap-[30px] justify-start items-start bg-white rounded-[14px]">
						<div className="w-full flex justify-between items-center">
							<div className="flex flex-col justify-start gap-[15px]">
								<span className="text-normal font-normal text-grey2 opacity-[0.7]">Total Sales</span>
								<p className="text-[28px] text-grey2 leading-[38px] font-normal">$89,000</p>
							</div>
							<img src={Sales} alt="" />
						</div>
						<div className="w-full flex gap-[8px] items-center">
							<img src={downward} alt="" />
							<p className="text-normal font-normal text-grey2 opacity-[0.7]"><span className="text-openRed">4.3%</span> Down from yesterday</p>
						</div>

					</div>
					<div className="cursor-pointer w-[262px] p-[16px] flex flex-col gap-[30px] justify-start items-start bg-white rounded-[14px]">
						<div className="w-full flex justify-between items-center">
							<div className="flex flex-col justify-start gap-[15px]">
								<span className="text-normal font-normal text-grey2 opacity-[0.7]">Total Pending</span>
								<p className="text-[28px] text-grey2 leading-[38px] font-normal">2,040</p>
							</div>
							<img src={Pending} alt="" />
						</div>
						<div className="w-full flex gap-[8px] items-center">
							<img src={UpwardTrend} alt="" />
							<p className="text-normal font-normal text-grey2 opacity-[0.7]"><span className="text-openBlue">2.9%</span> Up from yesterday</p>
						</div>

					</div>

				</div>
				<div className="w-full bg-white flex flex-col gap-[50px] pt-[37px] pl-[32px] pr-[32px] pb-[58px] rounded-that">
					<div className="w-full flex justify-between items-center">
						<span className="text-grey2 font-bold text-[24px] leading-[20px]">Sales Details</span>
						<select name="" id="october" className="border-[0.6px] border-grey3 w-[104px] text-center flex justify-center items-center h-[28px] rounded-[4px] text-[14px] opacity-[0.7] cursor-pointer leading-[10px] font-normal">
							<option value="october">October</option>
							<option value="november">November</option>
							<option value="December">December</option>
						</select>
					</div>
					<div className="w-full relative">
						<img src={Units} alt="" className="w-full" />
						<img src={NextPosition} alt="" className="absolute left-[76px] bottom-[34px]" />
						<img src={Points} alt="" className="absolute left-[73px] bottom-[32px]" />
						<img src={TopSale} alt="" className="absolute left-[316px] top-[11px]" />
					</div>



				</div>
				<div className="w-full bg-white flex flex-col justify-center items-center gap-[50px] pt-[37px] pl-[32px] pr-[32px] pb-[58px] rounded-that relative">
					<div className="w-full flex justify-between items-center">
						<span className="text-grey2 font-bold text-[24px] leading-[20px]">Deal Details</span>
						<select name="" id="october" className="border-[0.6px] border-grey3 w-[104px] text-center flex justify-center items-center h-[28px] rounded-[4px] text-[14px] opacity-[0.7] cursor-pointer leading-[10px] font-normal">
							<option value="october">October</option>
							<option value="november">November</option>
							<option value="December">December</option>
						</select>
					</div>
					<div className="w-full h-[48px] rounded-[12px] bg-primary pl-[24px] pr-[62px] flex items-center">
						<span className="font-normal text-[14px] leading-[19px] text-grey2 ">Product Name</span>
						<span className="font-normal text-[14px] leading-[19px] text-grey2 ml-[125px]">Location</span>
						<span className="font-normal text-[14px] leading-[19px] text-grey2 ml-[176px]">Date-Time</span>
						<span className="font-normal text-[14px] leading-[19px] text-grey2 ml-[150px]">Piece</span>
						<span className="font-normal text-[14px] leading-[19px] text-grey2 ml-[65px]">Amount</span>
						<span className="font-normal text-[14px] leading-[19px] text-grey2 ml-[82px]">Status</span>
					</div>
					<div className="w-full h-[48px] rounded-[12px] bg-white flex justify-between items-center pl-[24px] pr-[62px]">
						<div className="flex items-center gap-[16px]">
							<img src={Bitmap} alt="" />
							<span className="font-normal text-small text-grey2 opacity-[0.8]">Apple Watch</span>
						</div>
						<span className="font-normal text-small text-grey2 opacity-[0.8]">6096 Marjolaine Landing</span>
						<span className="font-normal text-small text-grey2 opacity-[0.8]">12.09.2019 - 12.53 PM</span>
						<span className="font-normal text-small text-grey2 opacity-[0.8]">423</span>
						<span className="font-normal text-small text-grey2 opacity-[0.8]">$34,295</span>
						<div className="w-[93px] h-[27px] bg-openBlue flex justify-center items-center rounded-that">
							<span className="text-white">Delivered</span>
						</div>
					</div>

				</div>
				<div className="w-full bg-white flex flex-col justify-center items-center gap-[50px] pt-[37px] pl-[32px] pr-[32px] pb-[58px] rounded-that">
				<div className="w-full flex justify-between items-center">
						<span className="text-grey2 font-bold text-[24px] leading-[20px]">Revenue</span>
						<select name="" id="october" className="border-[0.6px] border-grey3 w-[104px] text-center flex justify-center items-center h-[28px] rounded-[4px] text-[14px] opacity-[0.7] cursor-pointer leading-[10px] font-normal">
							<option value="october">October</option>
							<option value="november">November</option>
							<option value="December">December</option>
						</select>
					</div>
					<div className="w-full relative">
						<img src={Units} alt="" />
						<img src={RevenueGraph} alt="" className="absolute left-[75px] top-[31px]" />


					</div>
					<div className="w-full flex justify-center items-center gap-[60px]">
					<div className="flex gap-[16px] items-center">
						<div className="w-[12px] h-[12px] rounded-[50%] bg-sales"></div>
						<span className="text-normal text-grey2 font-normal leading-[20px]">Sales</span>
					</div>
					<div className="flex gap-[16px] items-center">
						<div className="w-[12px] h-[12px] rounded-[50%] bg-profit"></div>
						<span className="text-normal text-grey2 font-normal leading-[20px]">Profit</span>
					</div>
				</div>
				</div>
				<div className="w-full flex gap-[30px] items-center">
					<div className="w-[360px] h-[365px] bg-white rounded-that flex flex-col justify-start items-center pt-[24px]">
						<span className="w-full text-left pl-[24px] text-[22px] font-normal text-grey2 leading-[20px] mb-[37.5px]">Customers</span>
						<img src={CustomerChart} className="mb-[40px]" alt="" />
						<div className="w-full flex justify-center gap-[50px]">
							<div className="flex flex-col justify-center items-center">
								<span className="font-bold text-grey2 text-[28px]">34,249</span>
								<div className="w-full flex gap-[8px] justify-center items-center">
									<div className="w-[12px] h-[12px] rounded-[50%] bg-blue">
									
									</div>
									<span className="text-normal font-normal text-grey2 opacity-[0.8]">New Customers</span>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center">
								<span className="font-bold text-grey2 text-[28px]">1,420</span>
								<div className="w-full flex gap-[8px] justify-center items-center">
									<div className="w-[12px] h-[12px] rounded-[50%] bg-repeated">
									
									</div>
									<span className="text-normal font-normal text-grey2 opacity-[0.8]">Repeated</span>
								</div>
							</div>

						</div>

					</div>
					<div className="w-[360px] h-[365px] bg-white rounded-that flex flex-col pt-[24px]">
						<span className="pl-[24px] text-[22px] font-normal leading-[20px]">Featured Product</span>

						<Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-[252px]">
        					<SwiperSlide className="w-full  flex justify-center items-center"></SwiperSlide>
        					<SwiperSlide className="w-full  flex justify-center items-center"></SwiperSlide>
        
      					</Swiper>
						<div className="w-full flex flex-col justify-center items-center">
							<span className="text-grey2 font-normal text-[18px] leading-[20px]">Beats Headphone 2019</span>
							<span className="text-normal font-normal text-openBlue">$89.00</span>
						</div>
					</div>
					<div className="bg-white rounded-that max-w-[360px] max-h-[365px] pt-[10px] overflow-hidden pl-[10px] flex justify-center items-center">
						<img src={FinalChart} className="min-w-[466px]" alt="" />
					</div>
				</div>


			</div>
	</div>
}

export default Dashboard