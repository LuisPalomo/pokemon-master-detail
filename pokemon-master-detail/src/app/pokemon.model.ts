export class Pokemon {
  name: string;
  weight: number;
  sprites: Sprites;
  height: number;
  id: number;
  base_experience: number;
  types: Array<string>
};
class Sprites {
  front_default: string;
};
