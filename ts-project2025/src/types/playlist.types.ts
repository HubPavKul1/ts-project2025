import type { IBase, ITrack, TImageUrl } from "./music.types";


export interface IPlaylist extends IBase {
    name: string;
    description?: string;
    tracks: ITrack[];
    coverImage: TImageUrl
    owner: {
        id: string
        displayName: string
        isPremium: boolean
    }
    isPublic: boolean
    folowers: string[]

}