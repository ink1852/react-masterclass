import styled from "styled-components";
import BookFlip from "./BookFlip";
import BookInfo from "./BookInfo";
import type { Book } from "../types/book";

interface BooksProps {
  books: Book[];
}

const BookWrapper = styled.div`
  width: 850px;
  background-color: ${(prop) => prop.theme.backgroundColor};
  display: flex;
  padding: 4em;
  margin: 2em;
`;

const Books = ({ books }: BooksProps) => {
  return (
    <>
      {books.map((book) => {
        return (
          <BookWrapper key={book.id}>
            <BookFlip book={book} />
            <BookInfo book={book} />
          </BookWrapper>
        );
      })}
    </>
  );
};

export default Books;
