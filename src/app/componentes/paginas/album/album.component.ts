import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  exibirForm:boolean = false;
  exibirCampoNovoAlbum() :void{
    this.exibirForm = !this.exibirForm;
  }
}
