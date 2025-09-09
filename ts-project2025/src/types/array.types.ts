import type { ITrack } from "./music.types";


const recentlyPlayed: ITrack[] = []
const topTracks: ReadonlyArray<ITrack[]> = []

type TAudioVisualizerBar = [frequency: number, amplitude: number]

const bars: TAudioVisualizerBar[] = [
    [60, 0.8],
    [120, 0.6],
    [180, 0.9],
    [240, 0.4],
    [300, 0.7],
]

type TTimeFormat = [minutes: number, seconds: number]
const timeFormat: TTimeFormat = [0, 0]

function formatDuration(duration: number): TTimeFormat {
    return [Math.floor(duration / 60), duration % 60]
}