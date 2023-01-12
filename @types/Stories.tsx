export interface StoriesInfo {
  available: string;
  collectionURI: string;
  items: Items[];
  returned: number;
}

interface Items {
  resourceAPI: string;
  name: string;
  type: string;
}
