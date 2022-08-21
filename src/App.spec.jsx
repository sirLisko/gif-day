import React from "react";
import { createRoot } from "react-dom/client";
import { shallow } from "enzyme";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<App />);
  root.unmount();
});

describe("App Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
