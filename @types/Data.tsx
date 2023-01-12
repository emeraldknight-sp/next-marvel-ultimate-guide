import { CharacterInfo } from './Character';

export interface DataProps {
  info: {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: {
      offset: number;
      limit: number;
      total: number;
      count: number;
      results: CharacterInfo[];
    };
  };
}
