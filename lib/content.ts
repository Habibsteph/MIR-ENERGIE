// Demonstration copy for client review; capabilities are not yet confirmed.
export const solutions = [
  {
    id: "oil", slug: "oil", number: "01", title: "Oil", subtitle: "Petroleum supply and logistics",
    headline: "Connecting petroleum supply with operational demand.",
    summary: "Petroleum sourcing, commercial coordination and logistics support for industrial and commercial energy needs.",
    description: "This proposed service brings together petroleum product sourcing, commercial structuring and delivery coordination. Project requirements would guide the selection of supply channels, transport arrangements and storage interfaces, from the initial demand assessment to delivery planning.",
    scope: [
      { title: "Supply & trading", copy: "Supplier identification, product specifications, procurement discussions and commercial terms aligned with the intended use." },
      { title: "Logistics coordination", copy: "Planning of maritime or inland transport, delivery schedules and documentation with the relevant operating partners." },
      { title: "Storage & distribution", copy: "Assessment of storage requirements and coordination of receiving and distribution interfaces for the project." },
      { title: "Infrastructure support", copy: "Early-stage coordination of the facilities and technical partners needed to support petroleum handling and delivery." },
    ],
    audience: "Industrial operators, mining businesses, distributors and commercial energy users.",
    inputs: "Product type, specifications, expected volumes, delivery location, storage requirements and target schedule.",
    image: "/oil-pumpjacks-desert.png", alt: "Oil pumpjacks in the desert at sunset",
  },
  {
    id: "gas", slug: "lng-lpg-gas", number: "02", title: "LNG / LPG / Gas", subtitle: "Gas supply and infrastructure",
    headline: "From international gas supply to local demand.",
    summary: "LNG, LPG and natural gas solutions connecting supply, logistics, storage and the infrastructure required by each market.",
    description: "The proposed gas offering connects sourcing and commercial coordination with transport and receiving infrastructure. LNG, LPG and natural gas requirements would be assessed separately: each has its own handling, storage and delivery conditions. Regasification support applies to LNG projects where required.",
    scope: [
      { title: "Supply & trading", copy: "LNG sourcing and commercial structuring, with proposed extensions to LPG and natural gas procurement based on product and demand requirements." },
      { title: "Gas logistics", copy: "Coordination of shipping, transport, receiving interfaces and operational documentation appropriate to the gas product." },
      { title: "Storage & regasification", copy: "Storage planning suited to the product, plus LNG receiving and regasification infrastructure coordination where relevant." },
      { title: "Infrastructure development", copy: "Feasibility support and technical coordination to connect supply with industrial and local demand centers." },
    ],
    audience: "Utilities, governments, industrial users, gas distributors and infrastructure partners.",
    inputs: "Gas product, demand profile, volume or capacity, delivery conditions, site constraints and project timeline.",
    image: "/silos-mir-branded-realistic.png", alt: "Industrial storage infrastructure with MIR branding",
  },
  {
    id: "energy", slug: "energy-electrification", number: "03", title: "Energy / Electrification", subtitle: "Infrastructure and electricity access",
    headline: "Developing pathways to reliable energy access.",
    summary: "Energy infrastructure planning and electrification project coordination for industrial sites, communities and growing markets.",
    description: "This proposed service focuses on coordinating energy infrastructure and electrification projects. It would bring together demand assessment, technical studies, project structuring and implementation support with specialist partners. The focus is project development and coordination, rather than a claim of direct electricity production.",
    scope: [
      { title: "Demand & feasibility studies", copy: "Assessment of energy needs, site conditions and possible technical approaches with qualified project partners." },
      { title: "Electrification planning", copy: "Coordination of proposed grid connections, local distribution or decentralized supply options according to the project context." },
      { title: "Infrastructure development", copy: "Project scoping, technical partner coordination and planning of the assets required to serve the identified users." },
      { title: "Implementation support", copy: "Coordination of schedules, responsibilities, documentation and commissioning interfaces with the appointed specialists." },
    ],
    audience: "Public authorities, industrial zones, commercial sites and local infrastructure project sponsors.",
    inputs: "Project location, users to serve, estimated power demand, existing infrastructure, study status and target timeline.",
    image: "/desert-energy-engineers.png", alt: "Engineers reviewing plans at a desert energy facility",
  },
];

export const legacySolutions: Record<string, string> = {
  "lng-supply-trading": "lng-lpg-gas",
  "lng-logistics": "lng-lpg-gas",
  "storage-regasification": "lng-lpg-gas",
  "energy-infrastructure": "energy-electrification",
};

export const brand = {
  tagline: "Global energy. Local execution. Energy built for what’s next.",
  coreLine: "Oil. LNG / LPG / Gas. Energy / Electrification.",
};

// Populate only with client-confirmed details. No placeholder contact links.
export const company: { email: string | null; phone: string | null; legalName: string | null; registeredAddress: string | null } = {
  email: null,
  phone: null,
  legalName: null,
  registeredAddress: null,
};
