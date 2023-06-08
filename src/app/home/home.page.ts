import { Component, Inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlbumsComponent } from '../components/albums/albums.component';
import { CommonModule } from '@angular/common';
import { Song } from '../repository/Song';
import { Section } from '../repository/Section';
import { SpotifyService } from '../services/spotify.service';
import { MenuTabComponent } from '../components/menu-tab/menu-tab.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, AlbumsComponent, CommonModule, MenuTabComponent],
})
export class HomePage {
  public homeData: Section[] = [
    {
      sectionTitle: 'Albums for you',
      showMenu: true,
      songs : [
        {
          image: 'EslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
      ]
    },
    {
      sectionTitle: 'Trending now',
      showMenu: false,
      songs : [
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
      ]
    },
    {
      sectionTitle: 'Top picks for you',
      showMenu: false,
      songs : [
        {
          image: 'https://i.scdn.co/image/ab67616d0000b273533fa14f224ecf0959860aa8',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
        {
          image: 'https://dplnews.com/wp-content/uploads/2023/04/dplnewsEllaBailaSolaPesoPlumaEslabonArmadoSpotify_rp17042023.jpg',
          name: 'Ella baila sola - Peso Pluma ft Eslabón Armado'
        },
      ]
    },
  ]
  constructor(private _response: SpotifyService) {
    this.homeData[0].songs = this._response.getArtistsAndAlbums();
    this.homeData[1].songs = this._response.getArtistsTopTracks();
   
  }

  
}
