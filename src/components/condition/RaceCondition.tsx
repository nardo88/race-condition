import { FC, useEffect, useState } from "react";
import cls from "./RaceCondition.module.scss";
import { IData, mockData, getData } from "../../mock";
import image from "../../assets/bad.png";

interface RaceConditionProps {
  className?: string;
}

export const RaceConditionBad: FC<RaceConditionProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    getData(currentPage).then((data) => setData(data));
  }, [currentPage]);

  return (
    <div className={cls.RaceCondition}>
      <div>{data && <h1>{data.title}</h1>}</div>
      <ul className={cls.list}>
        {mockData.map((item) => (
          <li
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`${item.id === currentPage ? cls.active : ""} ${
              cls.item
            }`}
          >
            {item.id}
          </li>
        ))}
      </ul>
      <div>
        {mockData.map((item) => (
          <div key={item.id}>{`${item.id} = ${item.title}`}</div>
        ))}
      </div>
      <div>
        <img className={cls.image} src={image} alt="" />
      </div>
    </div>
  );
};
