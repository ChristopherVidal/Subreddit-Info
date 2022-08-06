import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../SubredditInfo/SubredditInfo";

export default function SearchStart(props: any) {
  return (
    <>
      {props.nonexistant && <p>Let's get searching</p>}
      <Outlet />
    </>
  );
}

//To do: be sure to limit what shape 'props' can take. you know, make use of typescript.
