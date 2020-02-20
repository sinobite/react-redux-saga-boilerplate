import * as React from "react";
import {connect} from 'react-redux'
import {getList} from '../../actions'
import {totalPriceSelector, listPriceSelector} from '../../selectors/list1'


type Props = {
	getList: () => void;
	totalPrice: number;
	list1: any[];
}


export class PageContainer extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		this.props.getList()
	}

	renderList() {
		const {list1} = this.props;

		if (!list1.length) return 'Список пуст, милорд';

		return list1.map((element) => <div key={element.id}>- {element.name}</div>)
	}

	render() {
		const {totalPrice} = this.props;

		return (
			<div>
				{this.renderList()}
				<div>totalPrice: {totalPrice}</div>
			</div>
		)
	}
}


// @ts-ignore
export default connect<Props>((state) => ({
	list1: listPriceSelector(state),
	totalPrice: totalPriceSelector(state),
}), {
	getList
})(PageContainer)
