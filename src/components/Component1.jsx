import { AppContext } from "../context/AppContext";
import Component2 from "./Component2";

const Component1 = () => {
  const values = {
    a: "value A",
    b: "value B",
    c: "value C",
    d: "value D",
    e: "value E",
    f: "value F",
  };

  return (
    <AppContext.Provider value={values}>
      <Component2 />
    </AppContext.Provider>
  );
};

export default Component1;
