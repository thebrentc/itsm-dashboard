var Dashboard = ng
  .Component({
     selector: 'itsm-dashboard',
     bindings: [ITSMService],
     properties: ['model']
   })
   .View({
     directives: [ng.NgFor],
     templateUrl: 'src/dashboard.component.html'
   })
   .Class({
      constructor: [ITSMService, function(ITSMService) {
         this.services = ITSMService.getServices();
         this.selectedService = this.services[0];
	}],
	selectedService: ITSMService,
 	onSelect: function(service) {
	 this.selectedService = service;
	 console.log(this); 	 
	},
 });
