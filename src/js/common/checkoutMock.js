export const chekoutFormData = {
  formtitle: "PaymentForm",
  steps: ["Shipping address", "Payment details", "Review your order"],
  buttons: {
    next: "Next",
    back: "Back",
    place: "Place order"
  },
  addressForm: {
    title: "Shipping address",
    firstName: "First name *",
    lastName: "Last name *",
    addressLn1: "Address Line 1 *",
    addressLn2: "Address Line 2",
    country: "Country *",
    city: "City *",
    state: "State/Province/Region",
    zipcode: "Zip / Postal code",
    chkSave: "Use this address for payment details"
  },
  paymentMehod: {
    title: "Payment method",
    nameCard: "Name on card",
    cardNumber: "Card number",
    expiryDate: "Expiry date",
    cvvNumber: "CVV",
    chkRem: "Remember credit card details for next time"
  },
  reviewOrder: {
    title: "Order summary",
    products: [
      { name: "Product 1", desc: "A nice thing", price: "$9.99" },
      { name: "Product 2", desc: "Another thing", price: "$3.45" },
      { name: "Product 3", desc: "Something else", price: "$6.51" },
      { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
      { name: "Shipping", desc: "", price: "Free" }
    ],
    shipping: {
      text: "Shipping",
      name: "Edwin Morales",
      addresses: ["1 Material-UI Drive", "Reactville", "Anytown", "99999", "USA"]
    },
    payments: [
      { name: "Card type", detail: "Visa" },
      { name: "Card holder", detail: "Mr John Smith" },
      { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
      { name: "Expiry date", detail: "04/2024" }
    ]
  },
  confirmation: {
    title: "Thank you for your order.",
    description: "Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."
  }
};
