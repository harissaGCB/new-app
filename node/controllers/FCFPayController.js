import axios from "axios";

export const getCurrencies = async (req, res) => {
  try {
    const response = await axios.get(
      "https://client.crassula.io/api/public/currencies"
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPayment = async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const response = await axios.post(
      "https://api.fcfpay.com/payment",
      {
        amount,
        currency,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.FCF_PAY_API_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
