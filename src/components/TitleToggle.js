import React from 'react'

const TitleToggle = ({handleToggleDarkMode}) => {
    return (
			<>
				<div className='toggle-title'>
					<header>
						<h1 className='py-12 text-5xl text-yellow-700 underline books-title'>
							Best selling books{' '}
						</h1>
					</header>
					<button
						type='button'
						className='bg-yellow-700 p-2 rounded-full btn text-white '
						onClick={() =>
							handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
						}>
						Toggle mode
					</button>
				</div>
			</>
		);
}

export default TitleToggle
