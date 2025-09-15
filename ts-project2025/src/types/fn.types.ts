import type { ITrack } from "./music.types"


type TPlayFunction = (track: string) => void
type TVolumeFunction = (volume: number) => void

/**
 * Plays a track.
 * @param {string} track - The track to play
 */
const play: TPlayFunction = (track) => {
    console.log(`Playing track: ${track}`) 
}

/**
 * Sets the volume level of the player.
 * @param {number} level - The volume level to set, must be between 0 and 100.
 * @throws {Error} If the volume level is outside the allowed range.
 */

function setVolume(level: number): void {
    if (level < 0 || level > 100) {
        throw new Error('Volume level must be between 0 and 100')
    }
    console.log(`Setting volume to: ${level}`)
}

/**
 * Adds a track to the queue.
 * @param {ITrack} track - The track to add
 * @param {number} [position=1] - The position to add the track (1-indexed)
 * @param {boolean} [isPlayNext=false] - Whether to play the track next
 */
function addToQueue(track: ITrack,  position = 1, isPlayNext: boolean = false): void {
    console.log(`Adding track  ${track}to queue on position ${position}`)
}
