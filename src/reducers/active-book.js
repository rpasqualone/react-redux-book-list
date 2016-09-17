// state is not app state, only reducer state
export default (state = null, action) => {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}
