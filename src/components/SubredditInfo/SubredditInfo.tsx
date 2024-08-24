import { useState, useEffect, lazy, Suspense } from "react";
import { RuleSet } from "../../types";
//import Spinner from "../Spinner/Spinner";

export default function SubredditInfo({
  term = "",
  rules
}: {
  term: string;
  rules: RuleSet;
}) {
  return (
    <div>
      {rules.length !== 0 && <p>hello</p>}
      {rules.length === 0 && <p>Yikes!</p>}
    </div>
  );
}
