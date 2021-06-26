import React from "react";
import { render, screen  } from "@testing-library/react";

import  FeatureList from "./featureList";

//Check setUpTests for a mock api call that tests the listing of features
describe("FeatureList component", function () {
    it("should have features with the data from the mock api call", async function () {
      render(<FeatureList />);
  
      //Feature descritpions
      expect(await screen.findByText("Some feature")).toBeInTheDocument();
      expect(await screen.findByText("Some other feature")).toBeInTheDocument();

      //Feature votes
      expect(await screen.findByText("0")).toBeInTheDocument();
      expect(await screen.findByText("1")).toBeInTheDocument();

    });
  });
  