import React from 'react'
// import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
	return (
		<>
			<section className='grid gap-4 grid-cols-4 grid-rows-4 books'>
				{books.map((book) => (
					<div key={book.rank}>
						<div className='card rounded bg-white shadow-md'>
							<img src={book.book_image} alt='book' className='img ' />
							<div className='p-6 leading-7'>
								<small className='font-bold text-yellow-700'>
									Written by {book.author}
								</small>
								<p>{book.description}</p>
								<p className='text-center text-yellow-900 mb-7'>
									Publish by {book.publisher}
								</p>
								<a
									href={book.amazon_product_url}
									target='_blank'
									rel='noreferrer'
									className='text-blue-400 underline'>
									To buy book
								</a>
							</div>
						</div>
					</div>
				))}
			</section>
		</>
	);
};

export default BookList
