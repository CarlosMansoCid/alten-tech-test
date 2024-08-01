import { ICharacter } from "../interfaces/ICharacter";

export const characterListMock: ICharacter[] = [
  {
    id: 1,
    name: "Adam Warlock",
    description: `Created by the Enclave to be part of a race of super humans who would abolish war, illness, and crime,
                     Adam Warlock is a unique being who uses his immense and formidable powers to safeguard the universe.`,
    modified: new Date(),
    thumbnail: {
      path: "/images/adam-warlock.png",
      extension: ".png",
    },
  },
];
