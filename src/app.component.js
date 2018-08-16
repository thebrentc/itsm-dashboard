var ITSMApp = ng
 .Component({
   selector: 'itsm-app',
 })
 .View({
   directives: [Dashboard],
   templateUrl: 'src/app.component.html'
 })
 .Class({
   constructor: function() {}
 });
document.addEventListener('DOMContentLoaded', function() {
 ng.bootstrap(ITSMApp);
});
