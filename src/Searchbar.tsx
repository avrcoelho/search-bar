import type { HTMLProps } from 'react';
import { forwardRef } from 'react';

import * as SearchBar from '@/presentation/components/SearchBar/index';

export const data = [
  'Alfalfa Sprouts',
  'Apple',
  'Apricot',
  'Artichoke',
  'Asian Pear',
  'Asparagus',
  'Atemoya',
  'Avocado',
  'Bamboo Shoots',
  'Banana',
  'Bean Sprouts',
  'Beans',
  'Beets',
  'Belgian Endive',
  'Bell Peppers',
  'Bitter Melon',
  'Blackberries',
  'Blueberries',
  'Bok Choy',
  'Boniato',
  'Boysenberries',
  'Broccoflower',
  'Broccoli',
  'Brussels Sprouts',
  'Cabbage',
  'Cactus Pear',
  'Cantaloupe',
  'Carambola',
  'Carrots',
  'Casaba Melon',
  'Cauliflower',
  'Celery',
  'Chayote',
  'Cherimoya',
  'Cherries',
  'Coconuts',
  'Collard Greens',
  'Corn',
  'Cranberries',
  'Cucumber',
  'Dates',
  'Dried Plums',
  'Eggplant',
  'Endive',
  'Escarole',
  'Feijoa',
  'Fennel',
  'Figs',
  'Garlic',
  'Gooseberries',
  'Grapefruit',
  'Grapes',
  'Green Beans',
  'Green Onions',
  'Greens',
  'Guava',
  'Hominy',
  'Honeydew Melon',
  'Horned Melon',
  'Iceberg Lettuce',
  'Jerusalem Artichoke',
  'Jicama',
  'Kale',
  'Kiwifruit',
  'Kohlrabi',
  'Kumquat',
  'Leeks',
  'Lemons',
  'Lettuce',
  'Lima Beans',
  'Limes',
  'Longan',
  'Loquat',
  'Lychee',
  'Madarins',
  'Malanga',
  'Mandarin Oranges',
  'Mangos',
  'Mulberries',
  'Mushrooms',
  'Napa',
  'Nectarines',
  'Okra',
  'Onion',
  'Oranges',
  'Papayas',
  'Parsnip',
  'Passion Fruit',
  'Peaches',
  'Pears',
  'Peas',
  'Peppers',
  'Persimmons',
  'Pineapple',
  'Plantains',
  'Plums',
  'Pomegranate',
  'Potatoes',
  'Prickly Pear',
  'Prunes',
  'Pummelo',
  'Pumpkin',
  'Quince',
  'Radicchio',
  'Radishes',
  'Raisins',
  'Raspberries',
  'Red Cabbage',
  'Rhubarb',
  'Romaine Lettuce',
  'Rutabaga',
  'Shallots',
  'Snow Peas',
  'Spinach',
  'Sprouts',
  'Squash',
  'Strawberries',
  'String Beans',
  'Sweet Potato',
  'Tangelo',
  'Tangerines',
  'Tomatillo',
  'Tomato',
  'Turnip',
  'Ugli Fruit',
  'Water Chestnuts',
  'Watercress',
  'Watermelon',
  'Waxed Beans',
  'Yams',
  'Yellow Squash',
  'Yuca/Cassava',
  'Zucchini Squash',
];

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  (props, ref) => {
    return <input {...props} ref={ref} />;
  },
);

export const Searchbar = (): JSX.Element => {
  return (
    <SearchBar.Root>
      <SearchBar.Input
        placeholder="Buscar items"
        className="w-full bg-red-300"
        as={Input}
      />
      <SearchBar.List className="bg-white">
        {data.map(item => (
          <SearchBar.Item key={item} className="aria-selected:bg-slate-200">
            <SearchBar.Link href={item} className="block w-full">
              {item}
            </SearchBar.Link>
          </SearchBar.Item>
        ))}
      </SearchBar.List>
    </SearchBar.Root>
  );
};
