import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Test in <GifExpertApp />", () => {
  test("should be show an h1 with text GifExpertApp", () => {
    render(<GifExpertApp />);
    expect(screen.getByText("GifExpertApp")).toBeTruthy();
  });

  test("should not to add the same category", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);
    const text = screen.getAllByText("One Punch");
    expect(text.length).toBe(1);
    
  });
});
