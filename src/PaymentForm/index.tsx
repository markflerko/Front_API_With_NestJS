import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import usePaymentForm from "./usePaymentForm";

const PaymentForm = () => {
  const { handleSubmit } = usePaymentForm();

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>Pay</button>
    </form>
  );
};

export default PaymentForm;
