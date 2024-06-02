import TopNavbar from "../../Components/NavbarTop/TopNavbar."

function ProductStock(){
	return <div className="flex flex-col flex-grow-[1] h-[100dvh] overflow-y-auto">
		<TopNavbar />
		<div className="w-full bg-green-400 flex flex-col gap-[700px]">
			Product Stock
		</div>
	</div>
}

export default ProductStock