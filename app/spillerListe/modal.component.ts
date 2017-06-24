
// @Component({
//   selector: 'app-component',
//   template: `
//   <button type="button" (click)="modal.show()">test</button>
//   <app-modal>
//     <div class="app-modal-header">
//       header
//     </div>
//     <div class="app-modal-body">
//       Whatever content you like, form fields, anything
//     </div>
//     <div class="app-modal-footer">
//       <button type="button" class="btn btn-default" (click)="modal.hide()">Close</button>
//       <button type="button" class="btn btn-primary">Save changes</button>
//     </div>
//   </app-modal>
//   `
// })
// export class AppComponent {

//   @ViewChild(ModalComponent)
//   public readonly modal: ModalComponent;
// }


// @Component({
//   selector: 'app-modal',
//   template: `
//   <div (click)="hide()" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
//        [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <ng-content select=".app-modal-header"></ng-content>
//         </div>
//         <div class="modal-body">
//           <ng-content select=".app-modal-body"></ng-content>
//         </div>
//         <div class="modal-footer">
//           <ng-content select=".app-modal-footer"></ng-content>
//         </div>
//       </div>
//     </div>
//   </div>
//   `
// })
// export class ModalComponent {

//   public visible = false;
//   private visibleAnimate = false;

//   public show(): void {
//     this.visible = true;
//     setTimeout(() => this.visibleAnimate = true);
//   }

//   public hide(): void {
//     this.visibleAnimate = false;
//     setTimeout(() => this.visible = false, 300);
//   }
// }