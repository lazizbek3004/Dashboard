import search from '../../Images/search.svg'
import Notification from '../../Images/Notificition.svg'
import { useState } from 'react'
import OvalBlue from '../../Images/OvalBlue.svg'
import OvalPink from '../../Images/OvalPink.svg'
import OvalPurple from '../../Images/OvalPurple.svg'
import OvalOrange from '../../Images/OvalOrange.svg'
import UkFlag from '../../Icons/UkFlag'
import ukFlag from '../../Images/UK Flag.svg'

function TopNavbar(){

	const [notificationON, setNotificationON] = useState(false)

	const changeNotificationON= () => {
		setNotificationON(!notificationON)
	}

	return <div className="w-full bg-white min-h-[70px] flex justify-between items-center pl-[78px] pr-[30px]">
	<div className="relative">
		<input type="text" placeholder="Search" className="w-[390px] h-[38px] pl-[45px] focus:outline-none border-[0.6px] border-grey rounded-[20px] bg-primary text-small" />
		<img src={search} className="absolute top-[10px] left-[16px]" alt="search" />
	</div>
	<div className='flex gap-[25px] items-center justify-center'>
		<div className='relative z-10'>
			<img src={Notification}  onClick={changeNotificationON} alt="" className='cursor-pointer' />
			{notificationON && (
				<div className='absolute bg-white top-[37.5px] left-[-124px] w-[254px] rounded-[14px] flex flex-col customShadow'>
					<div className='w-full min-h-[45px] pl-[20px] flex items-center'>
						<span className='text-brown'>Notification</span>
					</div>
					<div className='w-full h-[0.5px] bg-grey3 opacity-[0.26]'></div>
					<div className='w-full h-[60px] pl-[20px] flex gap-[12px] items-center'>
						<img src={OvalBlue} alt="" />
						<div className='flex justify-start flex-col items-start'>
							<span className='text-grey2 font-normal'>Settings</span>
							<p className='text-[12px] font-[600] text-grey3'>Update Dashboard</p>
						</div>
					</div>
					<div className='w-full h-[60px] pl-[20px] flex gap-[12px] items-center'>
						<img src={OvalPink} alt="" />
						<div className='flex justify-start flex-col items-start'>
							<span className='text-grey2 font-normal'>Event Update</span>
							<p className='text-[12px] font-[600] text-grey3'>An event date update again</p>
						</div>
					</div>
					<div className='w-full h-[60px] pl-[20px] flex gap-[12px] items-center'>
						<img src={OvalPurple} alt="" />
						<div className='flex justify-start flex-col items-start'>
							<span className='text-grey2 font-normal'>Profile</span>
							<p className='text-[12px] font-[600] text-grey3'>Update your profile</p>
						</div>
					</div>
					<div className='w-full h-[60px] pl-[20px] flex gap-[12px] items-center'>
						<img src={OvalOrange} alt="" />
						<div className='flex justify-start flex-col items-start'>
							<span className='text-grey2 font-normal'>Application Error</span>
							<p className='text-[12px] font-[600] text-grey3'>Check Your runnung application</p>
						</div>
					</div>
					<div className='w-full h-[45px] flex justify-center items-center border-t-[0.5px] border-grey3 opacity-[0.26]'>
						<span>See all notifications</span>
					</div>

				</div>
			)}

		</div>
		<span>Next part is coming</span>
		
		
	</div>


</div>
}

export default TopNavbar

