import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const ListTitle = "Alert Colors";
  const ListColors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "white",
  ];

  const handleOnSelectedColor = (color: string) => {
    setAlertColor(color);
    setAlertVisibility(true);
  };

  const [alertColor, setAlertColor] = useState("primary");

  const alertChildren = "Just a text Alert Displayed Here";

  const [alertVisibility, setAlertVisibility] = useState(true);

  const handleOnClose = () => setAlertVisibility(false);

  return (
    <div className="container" style={{ display: "grid", gap: "20px" }}>
      <ListGroup
        ListTitle={ListTitle}
        ListColors={ListColors}
        onSelectedColor={handleOnSelectedColor}
      />
      {alertVisibility && (
        <Alert AlertColor={alertColor} onClose={handleOnClose}>
          {alertChildren}
        </Alert>
      )}
    </div>
  );
}

export default App;
