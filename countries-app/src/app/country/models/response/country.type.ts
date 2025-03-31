import {
  array,
  boolean,
  InferOutput,
  number,
  object,
  record,
  string,
} from 'valibot';

export const CapitalInfo = object({
  latlng: array(number()),
});
export type CapitalInfo = InferOutput<typeof CapitalInfo>;

export const Car = object({
  signs: array(string()),
  side: string(),
});

export type Car = InferOutput<typeof Car>;

export const CoatOfArms = object({
  png: string(),
  svg: string(),
});
export type CoatOfArms = InferOutput<typeof CoatOfArms>;

export const Eur = object({
  name: string(),
  symbol: string(),
});

export type Eur = InferOutput<typeof Eur>;

export const Currencies = object({
  EUR: Eur,
});

export type Currencies = InferOutput<typeof Currencies>;

export const Eng = object({
  f: string(),
  m: string(),
});
export type Eng = InferOutput<typeof Eng>;

export const Demonyms = object({
  eng: Eng,
  fra: Eng,
});
export type Demonyms = InferOutput<typeof Demonyms>;

export const Flags = object({
  png: string(),
  svg: string(),
  alt: string(),
});
export type Flags = InferOutput<typeof Flags>;

export const Gini = object({
  '2018': number(),
});
export type Gini = InferOutput<typeof Gini>;

export const Idd = object({
  root: string(),
  suffixes: array(string()),
});
export type Idd = InferOutput<typeof Idd>;

export const Languages = object({
  ell: string(),
  tur: string(),
});
export type Languages = InferOutput<typeof Languages>;

export const Maps = object({
  googleMaps: string(),
  openStreetMaps: string(),
});

export type Maps = InferOutput<typeof Maps>;

export const Translation = object({
  official: string(),
  common: string(),
});

export type Translation = InferOutput<typeof Translation>;

export const PostalCode = object({
  format: string(),
  regex: string(),
});

export type PostalCode = InferOutput<typeof PostalCode>;

export const NativeName = object({
  ell: Translation,
  tur: Translation,
});

export const Name = object({
  common: string(),
  official: string(),
  nativeName: NativeName,
});

export type Name = InferOutput<typeof Name>;

export type NativeName = InferOutput<typeof NativeName>;

export const CountryResponse = object({
  name: Name,
  tld: array(string()),
  cca2: string(),
  ccn3: string(),
  cca3: string(),
  cioc: string(),
  independent: boolean(),
  status: string(),
  unMember: boolean(),
  currencies: Currencies,
  idd: Idd,
  capital: array(string()),
  altSpellings: array(string()),
  region: string(),
  subregion: string(),
  languages: Languages,
  translations: record(string(), Translation),
  latlng: array(number()),
  landlocked: boolean(),
  area: number(),
  demonyms: Demonyms,
  flag: string(),
  maps: Maps,
  population: number(),
  gini: Gini,
  fifa: string(),
  car: Car,
  timezones: array(string()),
  continents: array(string()),
  flags: Flags,
  coatOfArms: CoatOfArms,
  startOfWeek: string(),
  capitalInfo: CapitalInfo,
  postalCode: PostalCode,
});

export type CountryResponse = InferOutput<typeof CountryResponse>;
