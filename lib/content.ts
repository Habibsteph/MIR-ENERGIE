export const solutions = [
  {
    id: "lng-supply", number: "01", title: "LNG Supply & Trading", tab: "LNG Supply", subtitle: "Global sourcing",
    summary: "Global sourcing, commercial structuring and long-term LNG supply solutions designed around each market’s demand profile.",
    description: "MIR ENERGY sources and structures LNG supply solutions from international markets for governments, utilities, mining companies and industrial clients. Capabilities include supplier engagement, commercial structuring, long-term supply discussions, documentation coordination and market-linked procurement strategies.",
    image: "/import-ship.jpg", alt: "International maritime shipping and energy logistics",
  },
  {
    id: "logistics", number: "02", title: "LNG Logistics", detailTitle: "Marine & LNG Logistics", tab: "Logistics", subtitle: "Source to destination",
    summary: "End-to-end coordination of shipping, receiving, transportation and operational interfaces from source to destination.",
    description: "We coordinate the interfaces required to move LNG safely and efficiently from source to destination, including shipping coordination, receiving requirements, terminal interfaces, scheduling and operational documentation.",
    image: "/hero-energy.jpg", alt: "Industrial energy infrastructure supporting large-scale demand",
  },
  {
    id: "storage-regasification", number: "03", title: "Storage & Regasification", tab: "Storage & Regasification", subtitle: "Receiving and storage",
    summary: "Development and coordination of LNG receiving, storage and regasification infrastructure adapted to local demand and operating conditions.",
    description: "MIR ENERGY helps develop and coordinate the receiving, storage and regasification infrastructure required to make LNG accessible to local demand centers. Solutions are structured around capacity needs, site constraints, delivery profiles and future scalability.",
    image: "/silos-mir-branded-realistic.png", alt: "Industrial storage infrastructure with MIR branding",
  },
  {
    id: "infrastructure", number: "04", title: "Energy Infrastructure Development", tab: "Infrastructure", subtitle: "Project development",
    summary: "From feasibility and technical coordination to infrastructure deployment, MIR ENERGY helps structure the assets required to bring natural gas closer to industrial and strategic consumers.",
    description: "We support the development of the infrastructure required to connect LNG supply with industrial and strategic users, from early-stage feasibility and technical coordination to project structuring and implementation support.",
    image: "/energy-grid.jpg", alt: "Energy infrastructure and industrial equipment",
  },
];

export const brand = {
  tagline: "Global LNG. Local execution. Energy built for what’s next.",
  coreLine: "LNG Supply. Energy Infrastructure. Global Connectivity.",
};

// Populate only with client-confirmed details. No placeholder contact links.
export const company: { email: string | null; phone: string | null; legalName: string | null; registeredAddress: string | null } = {
  email: null,
  phone: null,
  legalName: null,
  registeredAddress: null,
};
