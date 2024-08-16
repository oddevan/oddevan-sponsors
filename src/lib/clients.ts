export interface Client {
  id: string;
  name: string;
  demoDescription?: string;
  copy: string;
  cta: string;
  shortUrl: string;
}

const demoClients: Client[] = [
  {
    id: "692db4b6-a4b8-430c-8ef6-a6b1fe67b6e8",
    name: "PillTimer",
    demoDescription: "iOS app for as-needed medicine tracking",
    copy: "Medicine tracking for iPhone and iPad. No ads, no spying, no subscriptions.",
    cta: "Learn more",
    shortUrl: "000pt",
  },
  {
    id: "088e3499-ed96-4d6d-b910-63604583d67f",
    name: "Smolblog",
    demoDescription: "Blogging at the speed of social",
    copy: "Social media is just blogging, so let's make blogging fun again.",
    cta: "Start Blogging",
    shortUrl: "000sb",
  },
  {
    id: "44955e28-dae8-4261-8d99-1f9ac4ee3c22",
    name: "madcrasher",
    demoDescription: "The illegitimate love-child of synthpop and hip-hop",
    copy: "The illegitimate love-child of synthpop and hip-hop.",
    cta: "Listen",
    shortUrl: "000mc",
  },
];

export async function getIds(): Promise<string[]> {
  return demoClients.map(client => client.id);
}

export async function getClientInfo(id: string): Promise<Client|undefined> {
  return demoClients.find(client => client.id == id);
}