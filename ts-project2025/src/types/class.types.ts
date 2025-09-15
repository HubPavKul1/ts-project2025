import { Howl } from "howler"
import type { IPlayerState } from "./player.types"
import type { ITrack } from "./music.types"


export class SpotifyPlayer {
    private audio: Howl | null = null
    private state: IPlayerState

    /**
     * Creates a new instance of the SpotifyPlayer class.
     * Initializes the player state with default values.
     * @remarks The player state is initialized with the following default values:
     * - currentTrack: null
     * - queue: []
     * - history: []
     * - isPlaying: false
     * - volume: 0.7
     * - currentTime: 0
     * - repeatMode: 'off'
     * - isShuffling: false
     */
    constructor() {
        this.state = {
            currentTrack: null,
            queue: [],
            history: [],
            isPlaying: false,
            volume: 0.7,
            currentTime: 0,
            repeatMode: 'off',
            isShuffling: false
        }
    }

    /**
     * Plays a track.
     * If a track is provided, it will be loaded and played.
     * Otherwise, the currently loaded track will be played.
     * @param {ITrack} [track] - The track to play
     */
    play(track?: ITrack): void {
        if (track) {
            this.loadTrack(track) // Load the track
        }
        this.audio?.play()
        this.state.isPlaying = true
    }

    /**
     * Loads a track for playback.
     * @param {ITrack} track - The track to load
     * @remarks The track is loaded with the current volume value from the player state.
     */
    private loadTrack(track: ITrack): void {
        this.audio = new Howl({
            src: [track.audioUrl],
            volume: this.state.volume
        })
        this.state.currentTrack = track
    }

    /**
     * Seeks to a specific time in the currently loaded track.
     * @param {number} time - The time to seek to in seconds
     */
    seek(time: number): void {
        this.audio?.seek(time)
    }
}