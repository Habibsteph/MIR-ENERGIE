import { solutions } from "./content";

export const homeServices = solutions.map(solution => solution.id === "gas" ? {
  ...solution,
  title: "LNG/ LPG SUPPLY AND TRADING",
  summary: "Global sourcing, commercial structuring and LNG / LPG supply solutions designed around each market’s demand profile.",
  image: "/import-ship.jpg",
  alt: "International maritime shipping and energy logistics",
} : solution);
