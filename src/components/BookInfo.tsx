import styled from "styled-components";
import type { Book } from "../types/book";

interface BookInfoProps {
  book: Book;
}

const Wrapper = styled.div`
  > * {
    color: ${(prop) => prop.theme.textColor};
  }
`;

const Title = styled.h1`
  font-family: "Times";
`;
const Author = styled.p`
  font-size: 1em;
`;
const Description = styled.p`
  font-family: "Segoe UI";
`;
const Stars = styled(Description)``;
const Price = styled.span`
  background-color: ${(prop) => prop.theme.textColor};
  color: ${(prop) => prop.theme.backgroundColor};
  padding: 0.25em 0.75em;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 4px;
`;

const BookInfo = ({ book }: BookInfoProps) => {
  return (
    <>
      <Wrapper>
        <Title>{book.name}</Title>
        <Author>{book.author}</Author>
        <Stars>{book.stars}</Stars>
        <Price>{book.price}</Price>
        <Description>
          {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo
      doloremque corrupti aperiam laborum delectus voluptatibus sapiente
      impedit, nesciunt ab odio sunt, fugit nisi vitae asperiores, culpa
      consectetur doloribus. Blanditiis?`}
        </Description>
      </Wrapper>
    </>
  );
};

export default BookInfo;
