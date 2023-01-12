export interface SeriesInfo {
  available: number;
  collectionURI: string;
  items: Items[];
  returned: number;
}

interface Items {
  resourceURI: string;
  name: string;
}
