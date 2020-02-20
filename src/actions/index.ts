
export const getList = (payload: any) => ({
	type: 'GET_LIST',
	payload,
});

export const setList1 = (payload: { name: string; id: string; price: number }[]) => ({
	type: 'SET_LIST',
	payload,
});
