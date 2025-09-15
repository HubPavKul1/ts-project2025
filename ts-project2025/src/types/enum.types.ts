// Лишний runtime
// Жесткий и закрытый нельзя расширять
// слабая типизация



enum EnumAudioQuality {
    Low = '96',
    Medium = '160',
    High = '320',
    Lossless = 'FLAC',
}

// const DEFAULT_AUDIO_QUALITY = AudioQuality.Medium

export const AudioQuality = {
    Low: '96',
    Medium: '160',
    High: '320',
    Lossless: 'FLAC',
} as const

export type TAudioQuality = typeof AudioQuality[keyof typeof AudioQuality]
