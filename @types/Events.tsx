export interface EventsInfo {
  available: number;
  collectionURI: string;
  items: Items[];
  returned: number;
}

interface Items {
  resourceAPI: string;
  name: string;
}
