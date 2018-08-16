
var ITSMService = function() {};
ITSMService.prototype.getServices = function() {

var services = [
 { "id": 1, "name": "Strategy", "description": "Maintaining focus on the strategic goals and requirements." },
 { "id": 2, "name": "Design", "description": "Design of IT architecture and service components."  },
 { "id": 3, "name": "Transition", "description": "Project and change management."  },
 { "id": 4, "name": "Operation", "description": "Standard service provision and support arrangements."  },
 { "id": 5, "name": "Improvement", "description": "Ensuring continuous improvement and learning."  },
];
 return services;
};

ITSMService.prototype.getService = function() {
 return { "id": 1, "name": "Strategy" };
};
