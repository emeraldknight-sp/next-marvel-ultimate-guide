import { ComicsInfo } from './Comics';
import { EventsInfo } from './Events';
import { SeriesInfo } from './Series';
import { StoriesInfo } from './Stories';
import { ThumbnailInfo } from './Thumbnail';

export interface CharacterInfo {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: ThumbnailInfo;
  resourceURI: string;
  comics: ComicsInfo;
  series: SeriesInfo;
  stories: StoriesInfo;
  events: EventsInfo;
  urls: [
    {
      type: string;
      url: string;
    }
  ];
}
