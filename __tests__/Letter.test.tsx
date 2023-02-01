jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

import { render } from "@testing-library/react";
import Letter from "../src/components/Letter";
import "@testing-library/jest-dom";

describe("Letter test suite", () => {
  it("should show a pre-populated letter", async () => {
    const expectedTitle = "Hey there";
    const expectedMessage = "Look out!";
    const expectedFrom = "Spiderman";

    const { getByDisplayValue } = render(
      <Letter
        filledFrom={expectedFrom}
        filledMessage={expectedMessage}
        filledTitle={expectedTitle}
      />
    );

    expect(getByDisplayValue(expectedTitle)).toBeInTheDocument();
    expect(getByDisplayValue(expectedMessage)).toBeInTheDocument();
    expect(getByDisplayValue(expectedFrom)).toBeInTheDocument();
  });
});
