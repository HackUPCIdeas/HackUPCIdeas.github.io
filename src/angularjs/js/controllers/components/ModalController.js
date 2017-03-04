
class ModalController {
  constructor($uibModalInstance) {
    this.ok = () => {
      console.log("ok")
      $uibModalInstance.close();
    };

    this.cancel = () => {
      console.log("cancel")
      $uibModalInstance.dismiss('cancel');
    };
  }
}

export default ModalController;