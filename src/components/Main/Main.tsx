import { Routes, Route, Navigate } from "react-router-dom";
import SearchStart from "../SearchStart/SearchStart";
import About from "../About/About";
import SubredditInfo from "../SubredditInfo/SubredditInfo";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="subreddit-info" />}></Route>
      <Route path="subreddit-info" element={<SearchStart />}>
        <Route path=":id" element={<SubredditInfo />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<Navigate to="subreddit-info" />} />
    </Routes>
  );
}
