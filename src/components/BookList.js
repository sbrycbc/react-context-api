import React from "react";

class BookList extends React.Component {


    render() {
        //console.log(this.props.books)

        const bookList = this.props.books.map((book, i) =>{
            return <Book book={book}
                         key={i}/>
        }
        )

        return <div>BOOKLIST</div>
    }

}

export default BookList;