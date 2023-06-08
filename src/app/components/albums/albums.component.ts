import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/repository/Section';
import { Song } from 'src/app/repository/Song';
@Component({
  standalone: true,
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  imports: [CommonModule]
})
export class AlbumsComponent implements OnInit {
  @Input() Section!: Section;
  public sectionTitle: string = '';
  public showMenu: boolean = false;
  public songs: Song[] = [];

  constructor() { }

  ngOnInit() {
    this.sectionTitle = this.Section.sectionTitle;
    this.showMenu = this.Section.showMenu;
    this.songs = this.Section.songs
  }

}
