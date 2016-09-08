"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var experiments_service_1 = require('../common/experiments.service');
var state_service_1 = require('../common/state.service');
var ExperimentsComponent = (function () {
    function ExperimentsComponent(_stateService, _experimentsService) {
        this._stateService = _stateService;
        this._experimentsService = _experimentsService;
        this.title = 'Experiments Page';
        this.body = 'This is the about experiments body';
    }
    ExperimentsComponent.prototype.ngOnInit = function () {
        this.experiments = this._experimentsService.getExperiments();
        this.message = this._stateService.getMessage();
    };
    ExperimentsComponent.prototype.updateMessage = function (m) {
        this._stateService.setMessage(m);
    };
    ExperimentsComponent = __decorate([
        core_1.Component({
            selector: 'experiments',
            template: require('./experiments.component.html')
        }), 
        __metadata('design:paramtypes', [state_service_1.StateService, experiments_service_1.ExperimentsService])
    ], ExperimentsComponent);
    return ExperimentsComponent;
}());
exports.ExperimentsComponent = ExperimentsComponent;
