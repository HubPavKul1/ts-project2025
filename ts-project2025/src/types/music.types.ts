export type TId = string
type TDuration = number
export type TImageUrl = string

type TisPublished = boolean

export type TStatus = 'idle' | 'loading' | 'succeeded' | 'failed'


export interface IBase {
    id: TId,
    createdAt: Date,
    updatedAt: Date
}

export interface IArtist extends IBase {
    name: string,
    image: TImageUrl,
    isVerified: boolean
}

export interface ITrack  extends IBase {
    title: string,
    duration: TDuration,
    image: TImageUrl,
    isPublished: TisPublished,
    artist: IArtist
}

// interface используется для описания структуры объекта, ответов от API
// Type используется для описания типов, которые не являютя объектами (примитивы, строки, числа и тд)
