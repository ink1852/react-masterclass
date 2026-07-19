import { useState } from "react";
import styled from "styled-components";

const Book = styled.div`
  --book-side-width: ${(prop) => prop.$sideWidth}px;
  --book-height: ${(prop) => prop.$height}px;
  --book-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);

  display: grid;
  color: white;
  margin-right: 3em;
  transition: all 0.5s;
  transform-style: preserve-3d;
  transform-origin: center center
    ${(prop) => (prop.$flip ? -1 * prop.$sideWidth : 0)}px;
  transform: perspective(1600px)
    ${(prop) => (prop.$flip ? "rotateY(180deg)" : "rotateY(0deg)")};
  &:hover {
    transform: ${(prop) =>
      prop.$flip
        ? "perspective(1600px) rotateY(180deg)"
        : "perspective(1600px) rotateY(40deg)"};
    cursor: pointer;
  }
  > * {
    grid-area: 1 / 1 / 1 / 1;
    width: 400px; /* 무조건 400px로 고정 */
    height: var(--book-height); /* 하드코딩 */
    font-size: 30px;
    backface-visibility: hidden;
  }
`;

const BookFront = styled.img`
  box-shadow: var(--book-shadow);
`;

const BookSide = styled.img`
  width: var(--book-side-width);
  transform-origin: left;
  transform: rotateY(-90deg)
    translate3d(calc(-1 * var(--book-side-width)), 0px, 0px);
`;

const BookBack = styled.img`
  transform: rotateY(180deg) translate3d(0, 0, var(--book-side-width));
  box-shadow: var(--book-shadow);
`;

function BookFlip({ book }) {
  const [flip, setFlip] = useState(false);
  return (
    <>
      <Book
        $sideWidth={book.sideWidth}
        $height={book.height}
        $flip={flip}
        onClick={() => setFlip((prev) => !prev)}
      >
        <BookFront src={book.src.front} />
        <BookSide src={book.src.side} />
        <BookBack src={book.src.back} />
      </Book>
    </>
  );
}

export default BookFlip;
