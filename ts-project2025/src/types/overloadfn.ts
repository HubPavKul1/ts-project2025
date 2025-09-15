import type { IArtist, ITrack } from "./music.types";
import type { IPlaylist } from "./playlist.types";


function spotifyAPI(endpoint: 'track', id: string): Promise<ITrack>;
function spotifyAPI(endpoint: 'playlist', id: string): Promise<IPlaylist>;
function spotifyAPI(endpoint: 'artist', id: string): Promise<IArtist>;

/**
 * Makes a request to the Spotify API.
 * @param {string} endpoint - The endpoint to query (e.g. track, playlist, artist)
 * @param {string} id - The ID of the endpoint to query (e.g. track ID, playlist ID, artist ID)
 * @returns {Promise<unknown>} - A promise which resolves to the JSON response from the API
 */
function spotifyAPI(endpoint: string, id: string): Promise<unknown> {
    return fetch(`https://api.spotify.com/v1/${endpoint}/${id}`).then(res => res.json());
}

/*  const track = await spotifyAPI('track', '1');
    const playlist = await spotifyAPI('playlist', '1');
    const artist = await spotifyAPI('artist', '1');
*/
