import { Component } from 'react'

class LeftMessage extends Component {
	render() {
		return (
			<div className='chat-message-left pb-4'>
				<div className='flex-shrink-1 bg-light rounded py-2 px-3 ml-3'>
					<div className='font-weight-bold mb-1'>
						{/* @ts-ignore */}
						{this.props.contactName}
					</div>
					{/* @ts-ignore */}
					{this.props.message}
				</div>
				<div
					className='text-muted small text-nowrap mt-2'
					style={{ display: 'inline' }}>
					{/* @ts-ignore */}
					<p>{this.props.timeSent}</p>
				</div>
			</div>
		)
	}
}

export default LeftMessage
