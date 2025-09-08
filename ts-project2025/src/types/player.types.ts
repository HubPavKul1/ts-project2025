import type { ITrack } from './music.types'


export interface IPlayerState {
    currentTrack: ITrack | null
    queue: ITrack[]
    history: ITrack[]
    isPlaying: boolean
    volume: number
    currentTime: number
    repeatMode: 'off' | 'one' | 'all'
    isShuffling: boolean
}