import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getList} from '../../actions'
import {totalPriceSelector, listPriceSelector} from '../../selectors/list1'


const propTypes = {
	getList: PropTypes.func.isRequired,
	totalPrice: PropTypes.number,
	list1: PropTypes.array,
}

const defaultProps = {}

export class PageContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		this.props.getList()
	}

	renderList() {
		const {list1} = this.props

		if (!list1.length) return 'Список пуст, милорд'

		return list1.map((element) => <div key={element.id}>- {element.name}</div>)
	}

	render() {
		const {totalPrice} = this.props

		return (
			<div>
				{this.renderList()}
				<div>totalPrice: {totalPrice}</div>
			</div>
		)
	}
}

PageContainer.propTypes = propTypes
PageContainer.defaultProps = defaultProps

export default connect((state) => ({
	list1: listPriceSelector(state),
	totalPrice: totalPriceSelector(state),
}), {
	getList
})(PageContainer) 