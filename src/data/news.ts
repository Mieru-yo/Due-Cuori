export interface NewsItem {
  date: string;
  title: string;
  description: string;
  tag: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "12 Sept. 2025",
    title: "Lancement officiel du projet",
    description:
      "L\u2019équipe se réunit pour la première fois autour de Due Cuori, Un Destino. Le pitch est validé, les rôles sont distribués.",
    tag: "Milestone",
  },
  {
    date: "3 Nov. 2025",
    title: "Première version du scénario",
    description:
      "Antoine et Léa bouclent le premier jet du scénario. Les retours internes sont positifs — la structure tient.",
    tag: "Écriture",
  },
  {
    date: "20 Jan. 2026",
    title: "Repérages & direction artistique",
    description:
      "Thibault et Léa P. partent en repérage. Premiers tests lumière et ambiance sonore pour définir l\u2019identité visuelle du film.",
    tag: "Pré-prod",
  },
  {
    date: "15 Mars 2026",
    title: "Début du tournage prévu",
    description:
      "Le tournage est planifié sur deux week-ends. Casting en cours de finalisation, décors en préparation.",
    tag: "À venir",
  },
];
