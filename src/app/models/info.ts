import { regular } from "./regular";
import { trending } from "./trending";

export type info = {
    title: string;
    thumbnail: {
      trending: trending
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: string;
    isTrending: boolean;
}
