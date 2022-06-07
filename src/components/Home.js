
import UseFetch from './UseFetch';

import BookList from './BookList';

const Home = () => {
    const { data: books } = UseFetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=IkgkhVK9YNybb1eAIzWOGOADDoAAJ7Cd')
    ;
    return (
        <div className='container mx-auto px-4 '>
				<BookList books={books}/>
        </div>
            
        
		);
}

export default Home
