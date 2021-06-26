import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";

import  FeatureInput from "./featureInput";



describe("FeatureInput component", function () {
    it("should have a submit button and input field",  function () {
      render(<FeatureInput onEntered={()=>{}}/>);
  
      //Find the button
      expect(screen.getByRole("button")).toBeInTheDocument();

      
      //Input something and check for it
      const inputValue = screen.getByRole("inputFeature");

      fireEvent.change(inputValue, { target: { value: "A feature" } });
      expect(screen.getByText("A feature")).toBeInTheDocument();
  

    });
  });
  