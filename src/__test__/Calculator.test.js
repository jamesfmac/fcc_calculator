import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Calculator from "../components/Calculator";

afterEach(cleanup);

test("Entered numbers show on display", () => {
  const testNumbers = [1,2,3,4,5,6,7,8,9];

  const { getByTestId, getByText } = render(<Calculator />);
  testNumbers.forEach(number => {
    fireEvent.click(getByText(number.toString()));
  });
  expect(getByTestId("display")).toHaveTextContent(testNumbers.join(''));
});

test("Basic addition", () => {
    const testSequence = [2,6,'+',9,'='];
  
    const { getByTestId, getByText } = render(<Calculator />);
    testSequence.forEach(step => {
      fireEvent.click(getByText(step.toString()));
    });
    expect(getByTestId("display")).toHaveTextContent('35');
  });

  test("Basic subtraction", () => {
    const testSequence = [7,1,'-',8,9,'='];
  
    const { getByTestId, getByText } = render(<Calculator />);
    testSequence.forEach(step => {
      fireEvent.click(getByText(step.toString()));
    });
    expect(getByTestId("display")).toHaveTextContent('-18');
  });
