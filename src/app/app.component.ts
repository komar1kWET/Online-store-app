import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  title = 'Online store';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // console.log(this.elementRef.nativeElement.ownerDocument.body.style);
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage =
    //   'url("https://cdn.pixabay.com/photo/2019/06/11/15/53/lemon-4267329_1280.png\")';
  }
}
