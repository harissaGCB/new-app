import React, { useState, useEffect } from "react";
import "./payment.css"; // Import the CSS file
import axios from "axios";
import { useTranslation } from "react-i18next";

const Payment = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!amount || amount <= 0) {
      setMessage("Please enter a valid amount.");
      return false;
    }
    // if (!email || !/\S+@\S+\.\S+/.test(email)) {
    //   setMessage("Please enter a valid email.");
    //   return false;
    // }
    return true;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      await axios.post("http://localhost:313/createPayment", {
        amount,
        currency,
        paymentMethod,
        // email,
      });
      setMessage("Payment successful!");
    } catch (error) {
      setMessage("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get("http://localhost:313/getCurrencies");
        setCurrencies(response.data);
        setCurrency(response.data[0]);
      } catch (error) {
        setMessage("Failed to load currencies.");
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div className="payment-container">
      <h2 className="payment-title">{t("make_payment")}</h2>
      <input
        type="number"
        placeholder={t("amount")}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="payment-input"
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="payment-select"
      >
        {currencies.map((cur) => (
          <option key={cur.code} value={cur.code}>
            {cur.code}
          </option>
        ))}
      </select>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="payment-select"
      >
        <option value="credit_card">Credit Card</option>
        <option value="crypto">Cryptocurrency</option>
      </select>
      {/* <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="payment-input"
      /> */}
      <button
        onClick={handlePayment}
        disabled={loading}
        className="payment-button"
      >
        {loading ? "Processing..." : t("pay_now")}
      </button>
      {message && <p className="payment-message">{message}</p>}
    </div>
  );
};

export default Payment;
