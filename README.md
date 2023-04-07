# elden-ring
 
Having trouble with storing the data within its own state!
When i console.log the classData (where i stored the api call) i return 

// description: 'A stalwart Hero, at home with a battleaxe, descended from a badlands chieftain'
	// id: '17f69d71826l0i32gkm3ndn3kywxqj'
	// image: 'https://eldenring.fanapis.com/images/classes/17f69d71826l0i32gkm3ndn3kywxqj.png'
	// name: 'Hero'
	// stats: arcane: '11'
	// dexterity: '9'
	// endurance: '12'
	// faith: '8'
	// intelligence: '7'
	// level: '7'
	// mind: '9'
	// strength: '16'
	// vigor: '14'

    What i want to do is store each of these returned items in its own state. The goal here is to pass the state to its sibling component, and be able to change the values (example: Change the level of vigor, faith, etc)








	function add() {
		setVigor((prevVigor) => ({
			...prevVigor,
			vig: prevVigor.vig > 98 ? prevVigor.vig : +prevVigor.vig + 1,
		}))
	}