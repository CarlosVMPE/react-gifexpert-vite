import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe("Test in <GifGrid />", () => {
  const category = "One Punch";
  test("should be show the loading by default", () => {
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });

    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('should be show results when it have images from useFetchGifs', () => {
    const gifs = [
        {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: 'XYZ',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        }
    ];
    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  })
});
