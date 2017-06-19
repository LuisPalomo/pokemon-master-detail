export class Pokemon {
  name: string;
  surname: string;
  weight: number;
  sprites: Sprites;
  height: number;
  id: number;
  base_experience: number;
  types: Array<string>;
  evolution?: number;
  preEvolution?: number;
};
class Sprites {
  front_default: string;
  gif: string;
  artwork: string;
};
