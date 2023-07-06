export interface Actor {
  id: number;
  name: string;
  poster: string;
  pivot: {
    department: string;
  };
}

export interface Genre {
  display_name: string;
  id: number;
}

export interface Image {
  url: string;
}

export interface Video {
  name: string;
  url: string;
}

export interface Poster {
  id: 1;
  name: string;
  release_date: string;
  description: string;
  tagline: string;
  poster: string;
  backdrop: string;
  runtime: number;
  budget: number;
  revenue: number;
  language: string;
  certification: string;
  rating: string;
  vote_count: number;
  credits: Actor[];
  genres: Genre[];
  genre: string;
  images: Image[];
  videos: Video[];
}
