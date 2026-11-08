export interface LessonData {
  id: string; // e.g. "1_1"
  chapterId: number;
  lessonNumber: string; // e.g. "1.1"
  title: string;
  description: string;
  image: any;
  pdfGoogleId: string;
  pdfFileName: string;
  keyTopics: string[];
  estimatedMinutes?: number;
}

export interface ChapterData {
  id: number;
  title: string;
  description: string;
  image: any;
  gameUrl: string;
  gameTitle: string;
  lessonIds: string[];
}

export interface GeoparkPartner {
  name: string;
  country: string;
  flag: any;
  url: string;
  description: string;
}

export const GEOPARK_PARTNERS: GeoparkPartner[] = [
  {
    name: "Hațeg Country UNESCO Global Geopark",
    country: "Romania",
    flag: require("../assets/images/romania_flag.png"),
    url: "https://www.hateggeoparc.ro/new/index.php/en/home/",
    description: "Home of the dwarf dinosaurs and deep geological history in the Southern Carpathians.",
  },
  {
    name: "Azores UNESCO Global Geopark",
    country: "Portugal",
    flag: require("../assets/images/portugal_flag.png"),
    url: "https://www.azoresgeopark.com/geoparque_acores/?lang=EN",
    description: "An archipelago of 9 volcanic islands showcasing rich oceanic geodiversity.",
  },
  {
    name: "Novohrad-Nógrád UNESCO Global Geopark",
    country: "Slovakia",
    flag: require("../assets/images/slovakia_flag.png"),
    url: "https://www.geopark-novohrad.sk/en/",
    description: "A cross-border geopark rich in volcanic formations, sedimentary rocks, and fossils.",
  },
  {
    name: "Papuk UNESCO Global Geopark",
    country: "Croatia",
    flag: require("../assets/images/croatia_flag.png"),
    url: "https://pp-papuk.hr/en/",
    description: "Remarkable geological diversity ranging from Paleozoic metamorphics to Mesozoic sediments.",
  },
];

export const CHAPTERS: Record<number, ChapterData> = {
  1: {
    id: 1,
    title: "Geology and Paleontology",
    description:
      "Explore Earth's geological processes, from rock formation to plate tectonics, and uncover the history of life through fossils and deep time.",
    image: require("../assets/images/unit1.jpg"),
    gameUrl:
      "https://view.genially.com/691b4ef67a7c437b6cdbe578/interactive-content-chapter-1-game-geology",
    gameTitle: "CHAPTER 1 GAME",
    lessonIds: ["1_1", "1_2", "1_3", "1_4"],
  },
  2: {
    id: 2,
    title: "Ecology and Biodiversity",
    description:
      "Dive into the natural world, learning about ecosystems, biodiversity, and sustainable practices through hands-on activities and creative exploration.",
    image: require("../assets/images/unit2.jpg"),
    gameUrl:
      "https://view.genially.com/691b501251b0ec732ec2b5c6/interactive-image-ecology-and-environment",
    gameTitle: "CHAPTER 2 GAME",
    lessonIds: ["2_1", "2_2", "2_3", "2_4", "2_5"],
  },
  3: {
    id: 3,
    title: "Environmental Stewardship",
    description:
      "Understand the importance of preserving Earth's geological heritage and the role of geoparks in conservation, education, and sustainable development.",
    image: require("../assets/images/unit3.jpg"),
    gameUrl:
      "https://view.genially.com/691b501251b0ec732ec2b5c6/interactive-image-ecology-and-environment",
    gameTitle: "CHAPTER 3 GAME",
    lessonIds: ["3_1", "3_2", "3_3", "3_4"],
  },
  4: {
    id: 4,
    title: "Local History and Culture",
    description:
      "Investigate how local resources, myths, and stone-made objects shape cultural identity and historical development.",
    image: require("../assets/images/unit4.jpg"),
    gameUrl: "https://planeta42.com/archeology/m/",
    gameTitle: "CHAPTER 4 GAMES",
    lessonIds: ["4_1", "4_2", "4_3", "4_4"],
  },
  5: {
    id: 5,
    title: "Geomorphology",
    description:
      "Study the formation of landforms, their evolution over time, and how they influence human activities and ecosystems.",
    image: require("../assets/images/unit5.jpg"),
    gameUrl: "https://www.purposegames.com/tag/geomorphology",
    gameTitle: "CHAPTER 5 GAMES",
    lessonIds: ["5_1", "5_2"],
  },
};

export const LESSONS: Record<string, LessonData> = {
  "1_1": {
    id: "1_1",
    chapterId: 1,
    lessonNumber: "1.1",
    title: "Lesson 1.1: Earth’s Building Materials",
    description: "Learn about Earth's crust, minerals, rocks, and the rock cycle.",
    image: require("../assets/images/lesson1_1.jpg"),
    pdfGoogleId: "1YT0oGuyMQ_xlVCd-tde8q9Khbqn5ZNAn",
    pdfFileName: "lesson1_1.pdf",
    keyTopics: [
      "Earth's Crust & Lithosphere",
      "Mineral Properties & Identification",
      "Igneous, Sedimentary & Metamorphic Rocks",
      "The Rock Cycle Hands-on Model",
    ],
    estimatedMinutes: 45,
  },
  "1_2": {
    id: "1_2",
    chapterId: 1,
    lessonNumber: "1.2",
    title: "Lesson 1.2: Plate Tectonics and Mountain Building",
    description:
      "Study how tectonic plates move, form mountains, and shape Earth's surface.",
    image: require("../assets/images/lesson1_2.jpg"),
    pdfGoogleId: "1mqwE0UaZwB2ojkIhjOWcttCuRrdWeUal",
    pdfFileName: "lesson1_2.pdf",
    keyTopics: [
      "Lithospheric Plates & Boundaries",
      "Convergent, Divergent & Transform Faults",
      "Orogeny & Mountain Formation",
      "Continental Drift & Evidence",
    ],
    estimatedMinutes: 50,
  },
  "1_3": {
    id: "1_3",
    chapterId: 1,
    lessonNumber: "1.3",
    title: "Lesson 1.3: Volcanoes and Earthquakes",
    description:
      "Investigate the causes and effects of volcanic eruptions and earthquakes.",
    image: require("../assets/images/lesson1_3.jpg"),
    pdfGoogleId: "1pe4OjTSzVgNlekUssONimc4LEY8zNlLf",
    pdfFileName: "lesson1_3.pdf",
    keyTopics: [
      "Volcano Types & Magma Viscosity",
      "Seismic Waves & Epicenter Location",
      "Ring of Fire & Hotspots",
      "Disaster Preparedness & Safety",
    ],
    estimatedMinutes: 50,
  },
  "1_4": {
    id: "1_4",
    chapterId: 1,
    lessonNumber: "1.4",
    title: "Lesson 1.4: Deep Time and Fossils",
    description:
      "Explore Earth's 4.5-billion-year history and the significance of fossils.",
    image: require("../assets/images/lesson1_4.jpg"),
    pdfGoogleId: "1xKBmNJ4wHqeDqGuSnJVlvvEDqHLFw6In",
    pdfFileName: "lesson1_4.pdf",
    keyTopics: [
      "Geologic Time Scale & Eras",
      "Fossilization Processes & Amber",
      "Stratigraphy & Law of Superposition",
      "Mass Extinction Events",
    ],
    estimatedMinutes: 55,
  },
  "2_1": {
    id: "2_1",
    chapterId: 2,
    lessonNumber: "2.1",
    title: "Lesson 2.1: Nature Journaling and Observation",
    description:
      "Develop observation skills by documenting plants, animals, and ecosystems in nature.",
    image: require("../assets/images/lesson2_1.jpg"),
    pdfGoogleId: "1cyPPntK2NNit4SOipEYhnJW_cf3vSUdp",
    pdfFileName: "lesson2_1.pdf",
    keyTopics: [
      "Field Sketching & Visual Records",
      "Phenology Tracking",
      "Species Identification Basics",
      "Reflective Nature Writing",
    ],
    estimatedMinutes: 40,
  },
  "2_2": {
    id: "2_2",
    chapterId: 2,
    lessonNumber: "2.2",
    title: "Lesson 2.2: Investigating Soil and Water",
    description:
      "Study soil composition, water quality, and their importance in ecosystems.",
    image: require("../assets/images/lesson2_2.jpg"),
    pdfGoogleId: "1j9U1-eg3P91fVujiMTU6EDcCR88RaIJU",
    pdfFileName: "lesson2_2.pdf",
    keyTopics: [
      "Soil Horizons & Texture Triangle",
      "Water Filtration & Permeability",
      "Erosion Prevention Techniques",
      "Aquatic Habitats & Microorganisms",
    ],
    estimatedMinutes: 45,
  },
  "2_3": {
    id: "2_3",
    chapterId: 2,
    lessonNumber: "2.3",
    title: "Lesson 2.3: Nature-Based Art and Creativity",
    description:
      "Create art using natural materials and explore the connection between art and nature.",
    image: require("../assets/images/lesson2_3.jpg"),
    pdfGoogleId: "1xpJ7BLOWyIqqIV0-roai-QzRiUOnR0w0",
    pdfFileName: "lesson2_3.pdf",
    keyTopics: [
      "Land Art & Ephemeral Sculptures",
      "Natural Pigments & Botanical Printing",
      "Eco-design & Renewable Materials",
      "Biophilic Design Principles",
    ],
    estimatedMinutes: 60,
  },
  "2_4": {
    id: "2_4",
    chapterId: 2,
    lessonNumber: "2.4",
    title: "Lesson 2.4: Culinary Adventures with Backyard Bounty",
    description:
      "Identify and cook with edible plants, learning about sustainable food practices.",
    image: require("../assets/images/lesson2_4.jpg"),
    pdfGoogleId: "1sK0RGc1SCLVSqvtSJKu22cxycWSZ5_wa",
    pdfFileName: "lesson2_4.pdf",
    keyTopics: [
      "Safe Foraging Guidelines & Botany",
      "Wild Herbs & Medicinal Plants",
      "Seasonal Eating & Local Foodways",
      "Reducing Food Waste & Composting",
    ],
    estimatedMinutes: 50,
  },
  "2_5": {
    id: "2_5",
    chapterId: 2,
    lessonNumber: "2.5",
    title: "Lesson 2.5: Sustainable Gardening Practices and Permaculture",
    description:
      "Discover sustainable gardening techniques and permaculture principles.",
    image: require("../assets/images/lesson2_5.jpg"),
    pdfGoogleId: "1zm_pmZX24wD9NrP5X-UZJhTn31fgHLVs",
    pdfFileName: "lesson2_5.pdf",
    keyTopics: [
      "Permaculture Ethics & Design Principles",
      "Companion Planting & Natural Pest Control",
      "Rainwater Harvesting Systems",
      "Pollinator-Friendly Garden Beds",
    ],
    estimatedMinutes: 45,
  },
  "3_1": {
    id: "3_1",
    chapterId: 3,
    lessonNumber: "3.1",
    title: "Lesson 3.1: Memory of the Earth / Digne Declaration",
    description:
      "Learn about geological heritage and the global effort to protect it.",
    image: require("../assets/images/lesson3_1.jpg"),
    pdfGoogleId: "1EOnEl4c_EGZkT2nURpzkfkCuj_fp-0ja",
    pdfFileName: "lesson3_1.pdf",
    keyTopics: [
      "The 1991 Digne Declaration Rights of Earth",
      "Geoheritage Value & Non-renewable Nature",
      "Geoconservation Strategies",
      "Ethical Stewardship for Future Generations",
    ],
    estimatedMinutes: 40,
  },
  "3_2": {
    id: "3_2",
    chapterId: 3,
    lessonNumber: "3.2",
    title: "Lesson 3.2: Geological Heritage – Management and Governance",
    description: "Explore how geological sites are managed and protected.",
    image: require("../assets/images/lesson3_2.jpg"),
    pdfGoogleId: "1tOK-nD_bNUSlYnyis08maoJFdRxIQ_ax",
    pdfFileName: "lesson3_2.pdf",
    keyTopics: [
      "Geosite Inventorying & Assessment",
      "Legal Protections & Nature Reserves",
      "Sustainable Geotourism Management",
      "Community Engagement in Conservation",
    ],
    estimatedMinutes: 45,
  },
  "3_3": {
    id: "3_3",
    chapterId: 3,
    lessonNumber: "3.3",
    title: "Lesson 3.3: Geoparks – Unique Places of Earth’s and Human Memories",
    description:
      "Discover UNESCO Global Geoparks and their role in preserving Earth's history.",
    image: require("../assets/images/lesson3_3.jpg"),
    pdfGoogleId: "1Q4A1ouP1tDkaB82_4TQljBvHhbuxlWEU",
    pdfFileName: "lesson3_3.pdf",
    keyTopics: [
      "UNESCO Global Geoparks Criteria",
      "Holistic Heritage: Geo, Bio & Cultural",
      "Education Programs & Trail Design",
      "Sustainable Local Economic Development",
    ],
    estimatedMinutes: 50,
  },
  "3_4": {
    id: "3_4",
    chapterId: 3,
    lessonNumber: "3.4",
    title: "Lesson 3.4: Meet Your Geoparks – Romania, Portugal, Slovakia, Croatia",
    description:
      "Explore European Geoparks and their geological, cultural, and ecological significance.",
    image: require("../assets/images/lesson3_4.jpg"),
    pdfGoogleId: "1gMNOoquXk-oLotQ0gH2XpySHyg0hdMVA",
    pdfFileName: "lesson3_4.pdf",
    keyTopics: [
      "Hațeg Dinosaur Geopark (Romania)",
      "Azores Volcanic Geopark (Portugal)",
      "Novohrad-Nógrád Cross-Border Geopark (Slovakia)",
      "Papuk Mountain Geopark (Croatia)",
    ],
    estimatedMinutes: 55,
  },
  "4_1": {
    id: "4_1",
    chapterId: 4,
    lessonNumber: "4.1",
    title: "Lesson 4.1: The Dialogue Between Man and Earth – Local Raw Materials",
    description:
      "Examine how humans use local resources like minerals, soil, and water.",
    image: require("../assets/images/lesson4_1.jpg"),
    pdfGoogleId: "1vwuampTEEhPSJJ0iWnzOkFZOc3n3KCgV",
    pdfFileName: "lesson4_1.pdf",
    keyTopics: [
      "Quarrying, Mining & Stone Extraction",
      "Clay, Ceramics & Pottery Traditions",
      "Water Mill Engineering",
      "Circular Resource Management",
    ],
    estimatedMinutes: 45,
  },
  "4_2": {
    id: "4_2",
    chapterId: 4,
    lessonNumber: "4.2",
    title: "Lesson 4.2: Stone-Made Objects – Stories of Rocks and Minerals",
    description:
      "Study the cultural and economic significance of stone-made objects.",
    image: require("../assets/images/lesson4_2.jpg"),
    pdfGoogleId: "1emMZAN8y--pZB5zb5S6La8QPpHw8oGxL",
    pdfFileName: "lesson4_2.pdf",
    keyTopics: [
      "Lithic Tool Technologies & Evolution",
      "Millstones, Grinding Stones & Agriculture",
      "Stone Carving & Artisanship",
      "Trade Routes for Precious Stones",
    ],
    estimatedMinutes: 45,
  },
  "4_3": {
    id: "4_3",
    chapterId: 4,
    lessonNumber: "4.3",
    title: "Lesson 4.3: Local Mythology Related to Earth Processes",
    description:
      "Explore myths that explain natural phenomena like earthquakes and volcanoes.",
    image: require("../assets/images/lesson4_3.jpg"),
    pdfGoogleId: "1FIVEfwErbl479wQJF4aoUBTt25NefADe",
    pdfFileName: "lesson4_3.pdf",
    keyTopics: [
      "Geomythology & Oral Histories",
      "Dragon Legends & Dinosaur Bone Discoveries",
      "Giant Steps & Basalt Column Legends",
      "Connecting Folk Lore with Earth Science",
    ],
    estimatedMinutes: 40,
  },
  "4_4": {
    id: "4_4",
    chapterId: 4,
    lessonNumber: "4.4",
    title: "Lesson 4.4: Stone-Made Objects in Local Archaeology and Architecture",
    description: "Investigate the role of stone in ancient and modern structures.",
    image: require("../assets/images/lesson4_4.jpg"),
    pdfGoogleId: "1lKwDKJkSQpcEchBDjdicDfg6TXOiDGae",
    pdfFileName: "lesson4_4.pdf",
    keyTopics: [
      "Megalithic Monuments & Dolmens",
      "Dry-stone Walling Techniques (UNESCO ICH)",
      "Roman Roads & Medieval Fortresses",
      "Vernacular Architecture & Stone Types",
    ],
    estimatedMinutes: 50,
  },
  "5_1": {
    id: "5_1",
    chapterId: 5,
    lessonNumber: "5.1",
    title: "Lesson 5.1: Local Geomorphology – Introducing Landforms and Landscapes",
    description:
      "Learn about landforms like mountains, valleys, and rivers, and how they form.",
    image: require("../assets/images/lesson5_1.jpg"),
    pdfGoogleId: "1-Uoj2IhAuUtQM-zdMzzEVA7deg13Cl5k",
    pdfFileName: "lesson5_1.pdf",
    keyTopics: [
      "Fluvial, Karstic & Glacial Landforms",
      "Weathering vs Erosion vs Deposition",
      "Catchment Basins & Drainage Patterns",
      "Human Impact on Geomorphology",
    ],
    estimatedMinutes: 45,
  },
  "5_2": {
    id: "5_2",
    chapterId: 5,
    lessonNumber: "5.2",
    title: "Lesson 5.2: Mapping the 4D Environment – 2D, 3D, and 4D Representations",
    description:
      "Explore mapping techniques to visualize landforms and their changes over time.",
    image: require("../assets/images/lesson5_2.jpg"),
    pdfGoogleId: "107CqYPY1oETdxhTbrEx5rm0hP0quv546",
    pdfFileName: "lesson5_2.pdf",
    keyTopics: [
      "Topographic Maps & Contour Lines",
      "Digital Elevation Models (DEM) & GIS",
      "Time-lapse Satellite & 4D Change Analysis",
      "Orienteering & Field Navigation Skills",
    ],
    estimatedMinutes: 50,
  },
};

export const CARBON_FOOTPRINT_URL = "https://www.footprintcalculator.org/home/en";
