import TopNavbar from "../../Components/NavbarTop/TopNavbar."


function NoPage(){
	return <div className="flex flex-col flex-grow-[1] h-[100dvh] overflow-y-auto">
		<TopNavbar />
		<div className="w-full h-full flex justify-center items-center">
			<h1 className="font-bold text-[30px]">ERROR : 404 NOT FOUND</h1>
		</div>
	</div>
}

export default NoPage