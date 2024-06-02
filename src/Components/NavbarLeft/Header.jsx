import {Link, Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import TopNavbar from '../NavbarTop/TopNavbar.'
import Products from '../../Pages/Products/Products'
import NoPage from '../../Pages/NoPage/NoPage'
import ProductStock from '../../Pages/ProductStock/ProductStock'
import Favorites from '../../Pages/Favorites/Favorites'

const links = [
	'Products',
	'Favorites',
	'Inbox',
	'Order Lists',
	'Product Stock'
]

const pages = [
	'Pricing',
	'Calendar',
	'To-Do',
	'Contact',
	'Invoice',
	'UI Elements',
	'Team',
	'Table',
]

const otherComps = [
	'Settings',
	'Logout'
]

function Header(){

	const navigate = useNavigate()
	const currentPath = useLocation().pathname

	const toHome = () => {
		navigate('/Dashboard')
	}

	return <div className='w-full flex justify-start items-start'>
		<div className='w-[240px] flex flex-col bg-white h-[100dvh] overflow-y-auto forScrollbar'>
			<div className='min-h-[80px] w-full flex justify-center items-center' >
				<p className='text-[20px] font-[700] font-sans cursor-pointer' onClick={toHome}><span className='text-blue'>Dash</span>Stack</p>
			</div>
			<ul className='w-full flex flex-col'>
				<li className='w-full min-h-[50px] flex gap-[20px] justify-start items-center'>
          			<div className={currentPath == '/' || currentPath == '/Dashboard' ? 'h-full w-[5px] bg-blue rounded-custom' : 'h-full w-[5px] bg-white rounded-custom'}></div>
          			<Link className={currentPath == '/' || currentPath == '/Dashboard' ? 'w-[192px] h-full  bg-blue rounded-[6px] flex items-center text-white pl-[54px]' : 'w-[192px] h-full  bg-white rounded-[6px] flex items-center pl-[54px]' }
            			to='/Dashboard'>Dashboard</Link>
        		</li>
				{links.map((el, index) => {
					return <li className='w-full min-h-[50px] flex gap-[20px] justify-start items-center' key={index}>
						<div className={currentPath == `/${el.replace(" ", "")}` ? 'h-full w-[5px] bg-blue rounded-custom' : 'h-full w-[5px] bg-white rounded-custom'}></div>
						<Link className={currentPath == `/${el.replace(' ', '')}` ? 'w-[192px] h-full  bg-blue rounded-[6px] flex items-center text-white pl-[54px]' : 'w-[192px] h-full  bg-white rounded-[6px] flex items-center pl-[54px]' }
						to={el.replace(' ', '')}>{el}</Link>
					</li>
				})}
			</ul>
			<div className='h-[33px] w-full flex justify-center items-center'>
				<div className='w-full h-[0.6px] bg-grey1'></div>
			</div>
			<p className='w-full text-left pl-[40px] text-grey2 opacity-[0.6] mb-[10px] mt-[10px]'>Pages</p>
			<ul>
				{pages.map((el, index) => {
					return <li className='w-full h-[50px] flex gap-[20px] justify-start items-center' key={index}>
					<div className={currentPath == `/${el.replace(" ", "")}` ? 'h-full w-[5px] bg-blue rounded-custom' : 'h-full w-[5px] bg-white rounded-custom'}></div>
					<Link className={currentPath == `/${el.replace(' ', '')}` ? 'w-[192px] h-full  bg-blue rounded-[6px] flex items-center text-white pl-[54px]' : 'w-[192px] h-full  bg-white rounded-[6px] flex items-center pl-[54px]' }
					to={el.replace(' ', '')}>{el}</Link>
				</li>
				})}
			</ul>
			<div className='w-full min-h-[0.6px] bg-grey1 mt-[16px] mb-[16px]'></div>
			<ul className='mb-[90px]'>
				{otherComps.map((el, index) => {
					return <li className='w-full h-[50px] flex gap-[20px] justify-start items-center' key={index}>
					<div className={currentPath == `/${el.replace(" ", "")}` ? 'h-full w-[5px] bg-blue rounded-custom' : 'h-full w-[5px] bg-white rounded-custom'}></div>
					<Link className={currentPath == `/${el.replace(' ', '')}` ? 'w-[192px] h-full  bg-blue rounded-[6px] flex items-center text-white pl-[54px]' : 'w-[192px] h-full  bg-white rounded-[6px] flex items-center pl-[54px]' }
					to={el.replace(' ', '')}>{el}</Link>
				</li>
				})}
			</ul>
				
		</div>


	<Routes>
			<Route index element={<Dashboard />} />
			<Route path='/Dashboard' element={<Dashboard />}/>
			<Route path='/Products' element={<Products />}/>
			<Route path='/ProductStock' element={<ProductStock />}/>
			<Route path='/Favorites' element={<Favorites />}/>

			<Route path='*' element={<NoPage />}/>

		</Routes>
	</div>
	

}

export default Header