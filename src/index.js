import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange.js';

const clearFields = () => {
  $(".showExchange").val("");
  $(".showErrors").val("");
};

function getElements(response) {
  if (response) {
    $("#main").show();
    $("#splash").hide();
  } else {
    $("showError").text(`The following error occurred: ${response.message}`);
  }
}

async function makeApiCall() {
  const response = await Exchange.getExchange();
  getElements(response);
}

$(document).ready(() => {
  $("#enter").click (() => {
    clearFields();
    makeApiCall();
  });
});