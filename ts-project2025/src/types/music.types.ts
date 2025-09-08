type ID = string
type Duration = number
type ImageUrl = string

type isPublished = boolean


interface IBase {
    id: ID,
    createdAt: Date,
    updatedAt: Date
}

export interface IArtist extends IBase {
    name: string,
    image: ImageUrl,
    isVerified: boolean
}

export interface ITrack  extends IBase {
    title: string,
    duration: Duration,
    image: ImageUrl,
    isPublished: isPublished,
    artist: IArtist
}

// interface используется для описания структуры объекта, ответов от API
// Type используется для описания типов, которые не являютя объектами (примитивы, строки, числа и тд)
