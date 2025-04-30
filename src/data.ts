export const colors = {
  yellow: "#fde758",
  red: "#EF9CA6",
  purple: "#CE98FF",
};

export const routes: { name: string; path: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Speakers",
    path: "/speakers",
  },
  {
    name: "About the Conference",
    path: "/about-the-conference",
  },
];

export interface Person {
  name: string;
  image: string;
  description: string;
  country: string;
  talkTitle?: string;
}

export const speakers: Person[] = [
  {
    name: "Ivar R. Hannikainen",
    image: "/speakers/speaker_ivar.webp",
    description: "Researcher at the University of Granada",
    talkTitle: "The experimental jurisprudence of medical aid-in-dying",
    country: "Spain",
  },
  {
    name: "Bregje Onwuteaka-Philipsen",
    image: "/speakers/speaker_bregje.webp",
    description: "Full Professor at Amsterdam UMC University",
    talkTitle:
      "30 year of research on euthanasia and other end of life decision: how did it inform practice and debate?",
    country: "Netherlands",
  },
  {
    name: "Roeline Pasman",
    image: "/speakers/speaker_roeline.webp",
    description: "Associate Professor at Amsterdam UMC University",
    talkTitle:
      "Trends in Dutch citizens’ and health care professionals’ views on life termination with and without physician involvement",
    country: "Netherlands",
  },
  {
    name: "Sean Riley",
    image: "/speakers/speaker_sean.webp",
    description: "Research Associate at the Ohio State University",
    talkTitle: "Watching the Watchmen—An Update",
    country: "United States",
  },
  {
    name: "Stuart J. Youngner",
    image: "/speakers/speaker_stuart.webp",
    description: "Professor Emeritus at the Case Western Reserve University",
    talkTitle: "‘Filter’ as a metaphor in MAiD policy-making",
    country: "United States",
  },
];

export const _organizers: Person[] = [
  {
    name: "Alberto Molina",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Rosa López",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Nerea Molina",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "David Rodríguez-Arias",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Gonzalo Díaz",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Iris Parra",
    image: "",
    description: "Universitat Autònoma de Barcelona",
    country: "",
  },
  {
    name: "Jorge Suárez",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Lucía Garzón",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Luis Espericueta",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Mar Vallès",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "María Victoria Martínez",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Perrine Galmiche",
    image: "",
    description: "Université Paris-Saclay",
    country: "",
  },
  {
    name: "Pia Dittke",
    image: "",
    description: "University Of Münster",
    country: "",
  },
  {
    name: "Berta Ruiz",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Jon Rueda",
    image: "",
    description: "University of the Basque Country",
    country: "",
  },
  {
    name: "Isabel Roldán",
    image: "",
    description: "University of Salamanca",
    country: "",
  },
];

export const organizers = _organizers.sort((a, b) =>
  a.name.split(" ").at(1)!.localeCompare(b.name.split(" ").at(1)!)
);
