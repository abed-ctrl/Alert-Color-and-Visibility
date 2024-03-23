import { useState } from "react";

interface Props {
  ListTitle: string;
  ListColors: string[];
  onSelectedColor: (color: string) => void;
}

const ListGroup = ({ ListTitle, ListColors, onSelectedColor }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h2>{ListTitle}</h2>
      {ListColors.length === 0 && <p>No Color Found</p>}
      <ul className="list-group">
        {ListColors.map((color, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => (setSelectedIndex(index), onSelectedColor(color))}
          >
            {color}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
