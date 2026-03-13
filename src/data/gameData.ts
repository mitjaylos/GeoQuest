import france from "@/assets/locations/france.jpg";
import china from "@/assets/locations/china.jpg";
import peru from "@/assets/locations/peru.jpg";
import india from "@/assets/locations/india.jpg";
import australia from "@/assets/locations/australia.jpg";
import japan from "@/assets/locations/japan.jpg";
import italy from "@/assets/locations/italy.jpg";
import brazil from "@/assets/locations/brazil.jpg";
import egypt from "@/assets/locations/egypt.jpg";
import england from "@/assets/locations/england.jpg";
import greece from "@/assets/locations/greece.jpg";
import morocco from "@/assets/locations/morocco.jpg";
import germany from "@/assets/locations/germany.jpg";
import cambodia from "@/assets/locations/cambodia.jpg";
import mexico from "@/assets/locations/mexico.jpg";

export interface Question {
  image: string;
  correctAnswer: string;
  options: string[];
  hint: string;
}

const allCountries = [
  "France", "China", "Peru", "India", "Australia", "Japan",
  "Italy", "Brazil", "Egypt", "England", "Greece", "Morocco",
  "Germany", "Cambodia", "Mexico", "Spain", "Thailand", "Turkey",
  "Argentina", "Canada", "Norway", "Kenya", "Russia", "Portugal",
];

const locations = [
  { image: france, country: "France", hint: "City of Light" },
  { image: china, country: "China", hint: "The Great Wall" },
  { image: peru, country: "Peru", hint: "Lost City of the Incas" },
  { image: india, country: "India", hint: "Monument of Love" },
  { image: australia, country: "Australia", hint: "Land Down Under" },
  { image: japan, country: "Japan", hint: "Land of the Rising Sun" },
  { image: italy, country: "Italy", hint: "Eternal City" },
  { image: brazil, country: "Brazil", hint: "Cidade Maravilhosa" },
  { image: egypt, country: "Egypt", hint: "Land of the Pharaohs" },
  { image: england, country: "England", hint: "Big Ben & Red Buses" },
  { image: greece, country: "Greece", hint: "Aegean Paradise" },
  { image: morocco, country: "Morocco", hint: "Spice Markets" },
  { image: germany, country: "Germany", hint: "Fairy Tale Castle" },
  { image: cambodia, country: "Cambodia", hint: "Ancient Temple" },
  { image: mexico, country: "Mexico", hint: "Mayan Civilization" },
];

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateOptions(correctCountry: string): string[] {
  const wrong = allCountries
    .filter((c) => c !== correctCountry)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return shuffle([correctCountry, ...wrong]);
}

export function generateQuestions(count: number = 10): Question[] {
  const shuffled = shuffle(locations).slice(0, count);
  return shuffled.map((loc) => ({
    image: loc.image,
    correctAnswer: loc.country,
    options: generateOptions(loc.country),
    hint: loc.hint,
  }));
}
