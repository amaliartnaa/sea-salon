import React from 'react'

export default function Hero() {
	return (
		<div className="relative flex flex-row justify-between items-center min-h-screen bg-cover bg-center p-20" style={{ backgroundImage: "url('/images/bg-hero.jpg')" }}>
			<div className="relative w-1/2 -z-1">
				<h1 className="text-7xl font-semibold text-slate-200 w-max">
					Beauty and Elegance <br />
					Redefined
				</h1>
				<p className="text-white text-lg mt-4">
					Experience the best salon services in town. <br />
					Your beauty, our passion.
				</p>
				<button className="mt-8 px-6 py-3 text-black bg-[#F1E5D1] hover:bg-stone-400 font-semibold rounded-lg shadow-lg transition">
					Book Now
				</button>
			</div>
		</div>
	)
}
