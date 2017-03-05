import { sum } from '../../utils/chart'
import ModalController from '../components/ModalController'

class DashboardController {


  constructor($timeout, $uibModal) {
    this.sales = {
      myself: {
        title: "",
        value: "About"
      },
      performance: {
        title: "",
        value: "Performance"
      },
      location: {
        title: "",
        value: "Locations"
      },
	  find: {
	    title: "",
		value: "Find me"
	  },
	  donate: {
		title: "",
		value: "Donate"
	  },
	  phone: {
		title: "",
		value: "Contact"
	  }
    }
	navigator.geolocation.getCurrentPosition(showPosition);
	function showPosition(position) {
		var pinColor = "00cc00";
		var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
			new google.maps.Size(21, 34),
			new google.maps.Point(0,0),
			new google.maps.Point(10, 34));
		var map = new google.maps.Map(document.getElementById('map'), {
		  center: {lat:  position.coords.latitude, lng: position.coords.longitude},
		  zoom: 12
		});
		var marker = new google.maps.Marker({
          position: {lat: 41.39224, lng: 2.16504},
          map: map
        });
		var marker = new google.maps.Marker({
          position: {lat: 41.38506, lng: 2.1734},
		  icon: pinImage,
		  shadow: pinImage,
          map: map
        });
		var marker = new google.maps.Marker({
          position: {lat: 41.40392, lng:  2.17587},
          map: map
        });
		var marker = new google.maps.Marker({
          position: {lat: 41.39198, lng:  2.16238},
          map: map
        });
		var marker = new google.maps.Marker({
          position: {lat: 41.38701, lng:   2.17004},
          map: map
        });
	}
	this.modal = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'pages/modals/modal_performance.html',
		controller: ModalController,
		controllerAs: "md"
      })
    };
	this.modal2 = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'pages/modals/modal_phone.html',
		controller: ModalController,
		controllerAs: "md"
      })
    };
	this.modal3 = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'pages/modals/modal_myself.html',
		controller: ModalController,
		controllerAs: "md"
      })
    };
	this.modal4 = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'pages/modals/modal_locations.html',
		controller: ModalController,
		controllerAs: "md"
      })
    };
	this.modal5 = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'pages/modals/modal_findme.html',
		controller: ModalController,
		controllerAs: "md"
      })
    };
	this.modal6 = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'pages/modals/modal_donate.html',
		controller: ModalController,
		controllerAs: "md"
      })
    };



	/*var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: -34.397, lng: 150.644},
	  zoom: 8
	});*/
  }
}

export default DashboardController
