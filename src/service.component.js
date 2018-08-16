var Service = ng
  .Component({
     selector: 'itsm-service', // TODO
     bindings: [ITSMService],
     properties: ['model']
   })
   .View({
     directives: [ng.NgFor],
     templateUrl: 'src/service.component.html'
   })
   .Class({
      constructor: [Service, function(Service) {
         this.service = ITSMService.getService();
 }]
 });
