import Container from "react-bootstrap/Container";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "../Search/Search";
import About from "../About/About";
import SubredditInfo from "../SubredditInfo/SubredditInfo";
import { useLocation } from "react-router-dom";
import "./main.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RuleSet } from "../../types";

export default function Main() {
  const controller = new AbortController();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, section, term] = pathname.split("/");
  const [oldTerm, setOldTerm] = useState("");
  const [oldSection, setOldSection] = useState(section);
  const [rules, setRules] = useState([] as RuleSet);

  useEffect(() => {
    if (section === oldSection) {
      if (section === "subreddit-info") {
        if (term) {
          setOldTerm(term);
        } else {
          setOldTerm("");
        }
      }
    } else {
      setOldSection(section);
      if (section === "subreddit-info" && oldTerm !== "") {
        navigate(`${section}/${oldTerm}`);
      }
    }
  }, [section, term]);

  useEffect(() => {
    (async function () {
      async function getRules() {
        axios
          .get(`https://www.reddit.com/r/${oldTerm}/about/rules.json`)
          .then((resp) => {
            if (resp.status === 200) {
              let data = resp.data;
              setRules(data.rules);
            } else {
              setRules([]);
            }
          })
          .catch(() => {
            setRules([]);
          });
      }
      async function getStats() {}
      async function checkIfSubredditOK() {
        let subOK = false;
        await axios
          .get(`https://www.reddit.com/r/${oldTerm}.json`)
          .then((resp) => {
            if (resp.status === 200) {
              subOK = true;
            }
          })
          .catch(() => {
            subOK = false;
          });
        return subOK;
      }
      console.log("hi");
      if (oldTerm != "") {
        let subOk = await checkIfSubredditOK();
        if (subOk) {
          getRules();
        }
      } else {
        setRules([]);
      }

      return () => {
        controller.abort();
      };
    })();
  }, [oldTerm]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="subreddit-info" />}></Route>
      <Route path="/subreddit-info" element={<Search term={oldTerm} />}>
        <Route
          path=":id"
          element={<SubredditInfo term={oldTerm} rules={rules} />}
        />
        <Route path="*" element={<Navigate to="/subreddit-info" />} />
      </Route>
      <Route path="about/*" element={<About />} />
      <Route path="*" element={<Search term={oldTerm} />} />
    </Routes>
  );
}
