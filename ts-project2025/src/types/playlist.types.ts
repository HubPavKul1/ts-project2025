import type { IBase, ITrack, TImageUrl, TId } from "./music.types";


export interface IPlaylist extends IBase {
    name: string;
    description?: string;
    tracks: ITrack[];
    coverImage: TImageUrl
    owner: {
        id: TId
        displayName: string
        isPremium: boolean
    }
    isPublic: boolean
    folowers: number

}