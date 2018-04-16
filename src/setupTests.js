// import React, {Component} from 'react';
// import {apiCall} from "../lib/api";
// import cities from "../lib/largest1000cities";
//
// class LocalStorageMock extends Component {
//   constructor() {
//     super();
//
//     this.getData = () => {
//       // get data from local storage or return empty object
//       let inputApi = localStorage.getItem('key') || '';
//
//       apiCall(inputApi).then((wundergroundData) => {
//         this.setState({
//           location: inputApi,
//           weatherData: wundergroundData
//         });
//       });
//     };
//
//     this.state = {
//       location: this.getData(),
//       weatherData: {},
//       cities,
//       searchResults: [],
//       apiError: false
//     };
//
//     this.compareUserInput = this.compareUserInput.bind(this);
//     this.submitCity = this.submitCity.bind(this);
//   }
// }
//
//
// // export default LocalStorageMock;
// global.localStorage = new LocalStorageMock;
//
// // require('jest-localstorage-mock')
// //
// // global.localStorage = new LocalStorageMock;
