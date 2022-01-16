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
    $(".showExchange").text(`Your exchange in ${response.base_code} = ${response.conversion_result} ${response.target_code}`);
  } else {
    $(".showErrors").text(`The following error occurred: ${response.message}`);
  }
}

async function makeApiCall(currency1, currency2, amount) {
  const response = await Exchange.getExchange(currency1, currency2, amount);
  getElements(response);
}

$(document).ready(() => {
  $("#enter").click (() => {
    $("#main").show();
    $("#splash").hide();
  });
  $("#exchange").click (() => {
    let currency1 = "USD";
    let currency2 = $("#exchangeCurrency option:selected").val();
    let amount = $("input#inputAmount").val();
    clearFields();
    makeApiCall(currency1, currency2, amount);
  });
});
