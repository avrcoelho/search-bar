import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { HTMLProps } from 'react';
import { forwardRef } from 'react';

import * as SearchBar from '@/presentation/components/SearchBar/index';

const data = ['1', '2', '3', '4'];

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  (props, ref) => {
    return <input {...props} ref={ref} />;
  },
);

type SerachbarProps = {
  isOpen?: boolean;
};

export const Searchbar = ({ isOpen = false }: SerachbarProps): JSX.Element => {
  return (
    <SearchBar.Root isOpen={isOpen}>
      <SearchBar.Input placeholder="Buscar items" as={Input} />
      <SearchBar.List>
        {data.map(item => (
          <SearchBar.Item key={item}>
            <SearchBar.Link href={item} asChild>
              <a href="">{item}</a>
            </SearchBar.Link>
          </SearchBar.Item>
        ))}
      </SearchBar.List>
    </SearchBar.Root>
  );
};

describe('SearcBbar', () => {
  it(`GIVEN rendered
      THEN should be able to render the searchbar without any error`, () => {
    expect(() => render(<Searchbar />)).not.toThrow();
  });

  it(`GIVEN rendered
      WHEN lsit is open
      THEN should be able to render the list items`, () => {
    render(<Searchbar isOpen />);

    data.forEach(item => {
      expect(screen.getByText(item)).toBeTruthy();
    });
  });

  it(`GIVEN rendered
      WHEN lsit is open
      AND click on list item
      THEN should be able to close the list`, async () => {
    render(<Searchbar isOpen />);

    await userEvent.click(screen.getByText(data[0]));

    data.forEach(item => {
      expect(screen.queryByText(item)).toBeFalsy();
    });
  });
});
