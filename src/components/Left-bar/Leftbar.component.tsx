import { useState, useEffect } from 'react'
import { Component } from 'react'

interface ContactObject {
	name: string
	phone_number: string
}

class Leftbar extends Component {
	state = {
		contacts: [],
		search: '',
	}

	componentDidMount() {
		fetch(
			'https://60j8oxiijjkseare8we0pvdr4tipujogr0oqecnio6w.kumbio.com/api/v1/contacts'
		)
			.then(res => res.json())
			.then(data => {
				this.setState({ contacts: data.contacts })
			})
	}

	handleSearch = (e: any) => {
		this.setState({ search: e.target.value })
	}

	render() {
		return (
			<div className='col-12 col-lg-5 col-xl-3 border-right'>
				<div className='px-4 d-none d-md-block'>
					<div className='d-flex align-items-center'>
						<div className='flex-grow-1'>
							<input
								onChange={this.handleSearch}
								type='text'
								className='form-control my-3'
								placeholder='Search...'
							/>
						</div>
					</div>
				</div>

				{this.state.contacts.map((c: ContactObject) => {
					if (c.name === undefined) {
						return
					}

					if (
						c.name
							.toLowerCase()
							.includes(this.state.search.toLowerCase()) ||
						this.state.search === '' ||
						c.phone_number.includes(this.state.search)
					) {
						return (
							<button
								style={{
									width: '100%',
									border: 'none',
									outline: 'none',
									backgroundColor: 'transparent',
								}}
								onClick={() =>
									/* @ts-ignore */
									this.props.changeChat(
										c.name,
										c.phone_number
									)
								}>
								<div className='badge bg-success float-right'>
									{c.phone_number}
								</div>
								<div className='d-flex align-items-start'>
									<div className='flex-grow-1 ml-3'>
										{c.name}

										<div className='small'>
											<span className='fas fa-circle chat-online'></span>
										</div>
									</div>
								</div>
								<hr />
							</button>
						)
					}
				})}

				<hr className='d-block d-lg-none mt-1 mb-0' />
			</div>
		)
	}
}

export default Leftbar
