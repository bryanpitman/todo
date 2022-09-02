import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

let renderedApp;

// beforeEach(function () {
//   renderedApp = render(<App />);
// });

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  // it ("rendered quotes app", function () {
  //   const result = render(<App />);
  //   expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  // });

  it("renders initial todos on startup", function () {
    const result = render(<App />);
    //expect(result.getByText('Make dinner')).toBeInTheDocument();
    
    // need to reference container
    //expect(result.querySelectorAll("div[class='EditableTodo']").length).toEqual(3);
  });

  //render top todo on startup

  //render todo Form on startup

  //render footer on startup

  //render You have no todos rendered and "You have no todos" is displayed 


  //top todo is empty if there are no todo

  //functionality tests

    //does the delete button remove an object on the page
    //does the edit button render a form?
      //does the form contain the title, description and priority
      //mimic a fire event to save the changes, handlesave and update functions

 //does the add Nu form render with blank field for title and description?
    //is the priority set to 1?

  //does top todo update when a new priority 1 is added to the list?
  //does top todo update to next priority if there is no priority 1

});

