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
}

export const speakers: Person[] = [
  {
    name: "Walter Glannon",
    image: "/speakers/speaker_glannon.webp",
    description: "Professor Emeritus at the University of Calgary",
    country: "Canada",
  },
  {
    name: "Bregje Onwuteaka-Philipsen",
    image: "/speakers/speaker_bregje.webp",
    description: "Full Professor at Amsterdam UMC University",
    country: "Netherlands",
  },
  {
    name: "Roeline Pasman",
    image: "/speakers/speaker_roeline.webp",
    description: "Associate Professor at Amsterdam UMC University",
    country: "Netherlands",
  },
  {
    name: "Sean Riley",
    image: "/speakers/speaker_sean.webp",
    description: "Research Associate at the Ohio State University",
    country: "United States",
  },
  {
    name: "Stuart J. Youngner",
    image: "/speakers/speaker_stuart.webp",
    description: "Professor Emeritus at the Case Western Reserve University",
    country: "United States",
  },
];

export const _organizers: Person[] = [
  {
    name: "Alberto Molina Pérez",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "David Rodríguez-Arias Vailhen",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Gonzalo Díaz Cobacho",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "Iris Parra Jounou",
    image: "",
    description: "Universitat Autònoma de Barcelona",
    country: "",
  },
  {
    name: "Jorge Suárez Muñoz",
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
    name: "Mar Vallès Poch",
    image: "",
    description: "University Of Granada",
    country: "",
  },
  {
    name: "María Victoria Martínez López",
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
    name: "Berta Ruiz Lorenzana",
    image: "",
    description: "University Of Granada",
    country: "",
  },
];

export const organizers = _organizers.sort((a, b) =>
  a.name.split(" ").at(1)!.localeCompare(b.name.split(" ").at(1)!)
);
