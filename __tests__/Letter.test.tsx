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

    const { findByDisplayValue } = render(
      <Letter
        filledFrom={expectedFrom}
        filledMessage={expectedMessage}
        filledTitle={expectedTitle}
      />
    );

    const fromTitle = await findByDisplayValue(expectedTitle);

    expect(fromTitle).toNotBeNull();
  });
});
