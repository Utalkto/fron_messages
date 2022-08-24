import { Component } from 'react'

class RightMessage extends Component {
	render() {
		return (
			<div className='chat-message-right pb-4'>
				<div>
					<div className='text-muted small text-nowrap mt-2'>
						{/* @ts-ignore */}
						{this.props.timeSent}
					</div>
				</div>
				<div className='flex-shrink-1 bg-light rounded py-2 px-3 mr-3'>
					<div className='font-weight-bold mb-1'>Orinoco</div>
					{/* @ts-ignore */}
					{this.props.message}
				</div>
			</div>
		)
	}
}

export default RightMessage
