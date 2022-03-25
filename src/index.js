import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyService from "./js/currency-service";

function showExchangeRate(response) {
  if (response.result === "success") {
    $(".showExchangeRate").text(
      `The conversion rate of ${base.value} to ${target.value} is ${response.conversion_rate}. ${amount.value}  ${base.value}s, exchanged in ${target.value}, is ${response.conversion_result}.`
    );
  } else {
    $(".showErrors").text(`There was an error: "${response.message}"`);
  }
}

$(document).ready(function () {
  $("#exchangeRate").click(function () {
    let base = $("#base").val();
    let target = $("#target").val();
    let amount = $("#amount").val();
    if (amount <= 0) {
      return $(".showExchangeRate").text(
        `Please enter an amount greater than 0`
      );
    } else if (base === null || target === null) {
      return $(".showExchangeRate").text(
        `Please ensure a valid base and target currency are selected`
      );
    }
    CurrencyService.getExchangeRate(base, target, amount).then(function (
      response
    ) {
      showExchangeRate(response);
    });
  });
});
