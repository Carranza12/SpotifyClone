import { Song } from "./Song";

export interface Section{
    sectionTitle: string;
    showMenu: boolean;
    songs: Song[]
}