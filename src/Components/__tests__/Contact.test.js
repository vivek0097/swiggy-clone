import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"




describe("Contact Us Page Test Case", () => {


    test("Should load Contact us component", () => {
 render(<Contact />);

 const heading = screen.getByRole("heading");

//assertion---
 expect(heading).toBeInTheDocument();
});


// it("Should load button inside Contact us component", () => {
//  render(<Contact />);

//  const button = screen.getAllByRole("button");

// //assertion---
//  expect(button).toBeInTheDocument();
// });

// it("Should load input name inside Contact us component", () => {
//  render(<Contact />);

//  const inputName = screen.getByPlaceholderText("name");

// //assertion---
//  expect(inputName).toBeInTheDocument();
// });


it("Should load 2 input inside Contact us component", () => {
 render(<Contact />);

 const inputBoxes = screen.getAllByRole("textbox");

//assertion---
 expect(inputBoxes.length).toBe(2);
});
})




