import { FormEmail, Title } from "components";
import { ArrowBack } from "components/ArrowBack/ArrowBack";
import { BookCard } from "components/BookCard/BookCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { fetchBookDeatails } from "store/features/bookDetails/bookDetails";
import { selectBookDetails } from "store/selectors/detailsSelector";
import { Template } from "templates";

export const BookPage = () => {
  const {
    title,
    subtitle,
    authors,
    publisher,
    isbn10,
    pages,
    year,
    rating,
    desc,
    price,
    image,
    url,
  } = useAppSelector(selectBookDetails);
  const { isbn13 } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    isbn13 ? dispatch(fetchBookDeatails(isbn13)) : console.log("Oleg, I need your help or advice");
  }, [isbn13]);

  return (
    <Template>
      <ArrowBack />
      <Title>{title} </Title>
      <BookCard src={image} price={price} rating={+rating} />
      <FormEmail />
    </Template>
  );
};
