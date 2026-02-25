export interface Character {
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const characters: Character[] = [
  {
    name: "Gabriella Corvani",
    role: "La fille du Parrain",
    description:
      "Prisonnière d\u2019une vie qu\u2019elle n\u2019a pas choisie, Gabriella porte le poids d\u2019un nom qui étouffe chacune de ses libertés. Pour elle, Arnaud représente l\u2019espoir d\u2019un monde au-delà des murs de cet empire.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    imageAlt: "Gabriella Corvani",
  },
  {
    name: "Arnaud Vidal",
    role: "L\u2019étranger",
    description:
      "Recruté pour ses talents et sa loyauté, Arnaud entre dans un univers dont il ne connaît pas les règles. Gabriella devient pour lui une lumière inattendue \u2014 une raison de remettre en question tout ce qu\u2019il croyait vouloir.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    imageAlt: "Arnaud Vidal",
  },
  {
    name: "Valerio Corvani",
    role: "Le Parrain",
    description:
      "Autoritaire et protecteur, Valerio dirige son empire d\u2019une main de fer. Pour lui, la famille est sacrée \u2014 et quiconque menace cet ordre en paiera les conséquences.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    imageAlt: "Valerio Corvani",
  },
];
