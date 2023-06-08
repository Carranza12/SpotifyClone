import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Song } from '../repository/Song';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private _http: HttpClient) { }
  public res: any = {};
  public TOKEN = "BQBlZlrlcegVN_ZaeVjfjrBGq1BvYgXG1e6ye1iSrci9KkTV7E6nkkUXeN8_AtlcNZO-turyYsuj5xYG9OPq8EO1gcQJbfBnQtrGZM4C5Vy1t1RuIUc";
  public infoMapeada: Song[] = [];
  public infoMapeadaTopTracks: Song[] = [];
  public getArtistsAndAlbums(): Song[] {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN}`
    })
    this._http.get('https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album',
      { headers })
      .subscribe(data => {
        this.res = data;
        const { albums } = this.res
        albums.items.forEach((item: any) => {
          const infoObject = {
            image: item.images[0].url,
            name: item.name
          }
          this.infoMapeada.push(infoObject)
        });
      })
    return this.infoMapeada;
  }

  public getArtistsTopTracks(): Song[] {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN}`
    })
    this._http.get('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n', { headers })
      .subscribe((data: any) => {
        let { tracks } = data;
        tracks.items.forEach((item: any) => {
          const finalObject = {
            image: item.track.album.images[0].url,
            name: item.track.album.name
          }
          console.log(finalObject)
          this.infoMapeadaTopTracks.push(finalObject)
        })

      })
    return this.infoMapeadaTopTracks;
  }
}
