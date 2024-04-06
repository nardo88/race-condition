import { useMemo, useState } from "react";
import "./App.css";
import { Effect } from "./components/effect/Effect";
import { RaceConditionBad } from "./components/condition/RaceCondition";
import { RaceConditionGood } from "./components/condition/RaceConditionGood";

function App() {
  const list = useMemo(
    () => [
      { id: "effect", title: "useEffect", component: <Effect /> },
      {
        id: "race_condition_bad",
        title: "Race condition (not fix)",
        component: <RaceConditionBad />,
      },
      {
        id: "race_condition_good",
        title: "Race condition (fix)",
        component: <RaceConditionGood />,
      },
    ],
    []
  );
  const [current, setCurrent] = useState(list[0]);
  return (
    <div className="app">
      <ul className="sidebar">
        {list.map((item) => (
          <li
            key={item.id}
            onClick={() => setCurrent(item)}
            className={`${current.id === item.id ? "active" : ""} list-item`}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="content">{current.component}</div>
    </div>
  );
}

export default App;
