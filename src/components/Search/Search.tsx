import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "../SubredditInfo/SubredditInfo";
import { useNavigate } from "react-router-dom";

export default function Search({ term = "" }: { term: string }) {
  return (
    <>
      <SearchBar term={term} />
      <Outlet />
    </>
  );
}

//To do: be sure to limit what shape 'props' can take. Make use of typescript and/or prop types.
