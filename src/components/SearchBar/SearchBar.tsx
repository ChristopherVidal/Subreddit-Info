import { SyntheticEvent, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./searchbar.scss";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ term = "" }: { term: string }) {
  let searchBarBoxSize: "large-searchbar-box" | "small-searchbar-box";
  if (!term) {
    searchBarBoxSize = "large-searchbar-box";
  } else {
    searchBarBoxSize = "small-searchbar-box";
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.value = term;
    }
  }, [term, inputRef]);

  function submitted(ev: SyntheticEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (inputRef.current != null) {
      navigate(`${inputRef.current.value}`);
    }
  }

  return (
    <Container fluid>
      <div
        className={`col-12 d-flex py-2 mt-sm-0 mt-md-2 pt-md-0 ${searchBarBoxSize} align-items-center justify-content-center`}
      >
        <Form onSubmit={submitted}>
          <Form.Label
            htmlFor="subreddit-name-keyword"
            className="visually-hidden"
          >
            subreddit name
          </Form.Label>
          <Form.Control
            id="subreddit-name-keyword"
            ref={inputRef}
            name="keyword"
            type="text"
            size="lg"
            placeholder="Enter Subreddit Name"
            aria-describedby="subreddit-example"
          />
          <div className="ps-2"></div>
        </Form>
      </div>
    </Container>
  );
}
