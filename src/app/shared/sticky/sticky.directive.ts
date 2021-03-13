import { Directive, ElementRef, Inject, Renderer2 } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import {
  distinctUntilChanged,
  map,
  pairwise,
  startWith,
  takeUntil,
  tap
} from "rxjs/operators";
import { DestroyService } from "../services/destroy.service";
import { WINDOW } from "../services/window";

@Directive({
  selector: "[sticky]",
  providers: [DestroyService]
})
export class StickyDirective {
  constructor(
    @Inject(DestroyService) destroy$: Observable<void>,
    @Inject(WINDOW) windowRef: Window,
    private renderer: Renderer2,
    private elRef: ElementRef<HTMLElement>
  ) {
    this.renderer.setStyle(this.elRef.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.elRef.nativeElement, 'top', 0);
    this.renderer.setStyle(this.elRef.nativeElement, 'transition', 'transform 0.3s 0.5s');
    fromEvent(windowRef, "scroll")
      .pipe(
        map(() => windowRef.scrollY),
        distinctUntilChanged(),
        pairwise(),
        tap(([prev, next]) => {
          this.controlBackgroundColor(prev);
        }),
        map(([prev, next]) => !!prev),
        startWith(true),
        takeUntil(destroy$)
      )
      .subscribe(isEnabled => {
        this.controlStyleTransition(isEnabled);
      });
  }
  /**
   * The function takes the scroll position
   * and compares with the height of the header
   * to set or unset the background color
   * @param {number} scrollPos 
   */
  controlBackgroundColor(scrollPos: number): void {
    if (scrollPos >= this.elRef.nativeElement.offsetHeight) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#fff');
    } else {
      this.renderer.removeStyle(this.elRef.nativeElement, 'background-color');
    }
  }
  /**
   * Takes the boolean and sets or unsets transtion and tranform property
   * @param {boolean} pos 
   */
  controlStyleTransition(pos: boolean) {
    if (!pos) {
      this.renderer.setStyle(this.elRef.nativeElement, 'transform', 'translate3d(0, -100%, 0)');
      this.renderer.setStyle(this.elRef.nativeElement, 'transition', 'transform 0.3s 0.5s');
    } else {
      this.renderer.removeStyle(this.elRef.nativeElement, 'transform');
      this.renderer.removeStyle(this.elRef.nativeElement, 'transition');
    }
  }
}
