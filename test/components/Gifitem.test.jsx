import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test in <GifItem />", () => {
  const title = "Dragon Ball";
  const url = "https://dbz.com/image.jpg";
  test("should be match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Should be show the img with the URL and ALT", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug();
    // one option
    /* expect(screen.getByRole('img').src).toBe(url);
    expect(screen.getByRole('img').alt).toBe(title); */
    // two option
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should be show the title in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })
});
