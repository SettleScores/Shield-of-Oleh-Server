import { TrackDto } from "./TrackDto";

export interface AlbumDto {
  title: string;
  year: number;
  coverUrl: string;
  tracks: TrackDto[];
}