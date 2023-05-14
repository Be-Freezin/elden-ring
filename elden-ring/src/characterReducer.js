export const INIT_STATE = {
	character: {
		startingClass: '',
		name: '',
		level:{
      init: '',
      value: '',
    },
		stats: {
			vigor: {
				init: '',
				value: '',
			},
			dexterity: {
				init: '',
				value: '',
			},
			arcane: {
				init: '',
				value: '',
			},
			endurance: {
				init: '',
				value: '',
			},
			faith: {
				init: '',
				value: '',
			},
			intelligence: {
				init: '',
				value: '',
			},
			mind: {
				init: '',
				value: '',
			},
			strength: {
				init: '',
				value: '',
			},
		},
	},
}

export const characterReducer = (state, action) => {
	switch (action.type) {
		case 'SET_STATS':
			return {
				...state,
				level: {
					init: 0,
					value: '',
				},
			}
		case 'INCREASE':
			return {}
		case 'DECREASE':
			return {}
		case 'CHANGE_CLASS':
			return {}
		case 'NAME_INPUT':
			return {}

		default:
			throw new Error(`Should never happen!`)
	}
}