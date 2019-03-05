import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'short-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public short: any = "";

  constructor() { }

  ngOnInit() {
    this.generateRandomShort()
  }

  public generateRandomShort() {
    this.short = _generatoFakeShort()
  }

  public onPrefixClicked() {
    this.short.searchElement.nativeElement.focus()
  }

}

const _generatoFakeShort = () => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
