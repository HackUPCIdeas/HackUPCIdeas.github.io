import ModalController from './ModalController'

class ModalPerformers {
  constructor($uibModal) {

    this.modal = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'pages/modals/modal_performance.html',
        controller: ModalPerformersController,
        controllerAs: 'mpc'
      })
    };
  }
}

export default ModalPerformers