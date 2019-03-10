import { Component, OnInit } from '@angular/core';
import { ShortService } from "../../../services/short.service"

@Component({
  selector: 'short-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public short: any = "";

  constructor(
    private shortService: ShortService,
  ) { }

  ngOnInit() {
    this.generateRandomShort()
  }

  public generateRandomShort() {
    this.shortService.generate()
      .subscribe((short: string) => {
        this.short = short
      })
  }

  public onPrefixClicked() {
    this.short.searchElement.nativeElement.focus()
  }
  
}
