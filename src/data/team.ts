export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Antoine Delauney",
    role: "Réalisateur / Scénariste",
    bio: "Celui qui voit le film avant qu\u2019il n\u2019existe.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    imageAlt: "Antoine Delauney",
  },
  {
    name: "Benjamin Huicq",
    role: "Régisseur / Producteur exécutif",
    bio: "Le pilier logistique qui transforme les idées en tournage.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    imageAlt: "Benjamin Huicq",
  },
  {
    name: "Thibault Marvin",
    role: "DA / Chef opérateur",
    bio: "Chaque cadre est une intention, chaque lumière un choix.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    imageAlt: "Thibault Marvin",
  },
  {
    name: "Léa Sovage",
    role: "Assistante réalisateur / Co-scénariste",
    bio: "L\u2019écriture prend forme quand elle est sur le plateau.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    imageAlt: "Léa Sovage",
  },
  {
    name: "Léa Pasturek",
    role: "DA / Ingé son",
    bio: "Elle sculpte l\u2019atmosphère qu\u2019on ne voit pas, mais qu\u2019on ressent.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    imageAlt: "Léa Pasturek",
  },
  {
    name: "Loan Bossavie",
    role: "Designer, VFX / Directeur VFX",
    bio: "Là où la réalité s\u2019arrête, son travail commence.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    imageAlt: "Loan Bossavie",
  },
  {
    name: "Kylian Hebert",
    role: "Montage Image",
    bio: "Le rythme du film passe entre ses mains.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&q=80",
    imageAlt: "Kylian Hebert",
  },
  {
    name: "Jérémy Chan-Fung-Ting",
    role: "Développement du site",
    bio: "Il donne au film une seconde vie sur écran.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
    imageAlt: "Jérémy Chan-Fung-Ting",
  },
];
