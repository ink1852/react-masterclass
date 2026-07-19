import styled from "styled-components";
import BookFlip from "./BookFlip";
import BookInfo from "./BookInfo";

const BookWrapper = styled.div`
  width: 850px;
  background-color: ${(prop) => prop.theme.backgroundColor};
  display: flex;
  padding: 4em;
  margin: 2em;
`;

const Books = ({ books }) => {
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
