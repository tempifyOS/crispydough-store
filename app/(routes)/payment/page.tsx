import Container from "@/components/ui/container";

const PaymentSafetyPage = () => {
  return (
    <Container>
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Payment Safety</h1>
        <p className="text-lg text-gray-700 mb-6">
          At <a href="/" className="text-blue-500 underline">Crispy Dough Bakery</a>, we take your payment security seriously. That is why we utilize Stripe, a trusted and secure payment processing platform, to handle all transactions on our website.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          <a className="text-blue-500 underline" href="https://docs.stripe.com/security" target="blank">Stripe</a> employs industry-leading security measures to ensure that your payment information is protected. When you make a purchase with us, you can rest assured that your sensitive data is encrypted and safeguarded.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Additionally, <a className="text-blue-500 underline" href="https://docs.stripe.com/security" target="blank">Stripe</a> is certified as a PCI Level 1 Service Provider, the highest level of certification available in the payment industry. This means that they adhere to the most stringent security standards to protect your financial information.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Your trust and confidence in our payment process are paramount to us. If you have any questions or concerns about payment safety or our use of Stripe, please <a href="/contact" className="text-blue-500 underline">contact us</a>.
        </p>
      </div>
    </Container>
  );
};

export default PaymentSafetyPage;