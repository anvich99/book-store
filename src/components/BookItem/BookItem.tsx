import React from "react";
import {
  BookAuthor,
  BookCard,
  BookImage,
  BookInfo,
  BookPrice,
  BookTitle,
  ImageBackground,
} from "./styled";
import { NewBook } from "types";
import { ROUTE } from "routes/routes";
import { generatePath } from "react-router-dom";

interface BookItemProps {
  book: NewBook;
}

export const BookItem = ({ book }: BookItemProps) => {
  return (
    <BookCard to={generatePath(ROUTE.BOOK, { isbn13: book.isbn13 })}>
      <ImageBackground>
        <BookImage src={book.image} alt="book" />
      </ImageBackground>
      <BookInfo>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>{book.subtitle}</BookAuthor>
        <BookPrice>{book.price}</BookPrice>
      </BookInfo>
    </BookCard>
  );
};
