const defaultState = {
	list1: []
}

export default function (state = defaultState, action) {
	const {type, payload} = action

	switch (type) {
	case 'SET_LIST' : {
		return {
			...state,
			list1: payload,
		}
	}

	default:
		return state
	}
}