import React from 'react'

const Header = () => {
	return (
		<div className=" p-12 flex flex-col justify-center items-center">
			<div className=" text-white text-center flex flex-col justify-center items-center w-4/6 lg:max-w-2xl">
				<h1 className="text-4xl py-6 text-white text-center">
					Welcome Tarnished
				</h1>
				<p>
					The lands between are vast and perilous, and only the strongest and
					most cunning will survive. As you embark on your journey, carefully
					planning your build and mastering your combat skills will be critical
					for triumph. So arm yourself with your weapons and prepare for a
					challenging adventure like no other. Are you ready to face the dangers
					that await in Elden Ring?
				</p>
				<p className="small-txt">
					Elden Ring calculations are complicated, this site is a good starting
					point to get a shell of your build set up. In the future i may dive
					deeper into this and set up calculations proper
				</p>
			</div>
		</div>
	)
}

export default Header
