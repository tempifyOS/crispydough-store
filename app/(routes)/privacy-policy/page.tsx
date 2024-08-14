import Container from "@/components/ui/container";

const PrivacyPolicyPage = () => {
  return (
    <Container>
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <a href="/" className="text-blue-500 underline">The Crispy Dough Bakery</a>. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you make purchases through our website.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
        <p className="text-lg text-gray-700 mb-6">
          When you make a purchase on our website, we collect the following information:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Billing and shipping address</li>
          <li>Payment information (handled securely by Stripe)</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
        <p className="text-lg text-gray-700 mb-6">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>To process and fulfill your orders</li>
          <li>To communicate with you about your orders and provide customer support</li>
          <li>To improve our website and services</li>
          <li>To comply with legal requirements</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Processing</h2>
        <p className="text-lg text-gray-700 mb-6">
          We use <a className="text-blue-500 underline" href="https://stripe.com" target="blank">Stripe</a> to process all payments on our website. Stripe is a trusted payment processor that employs industry-leading security measures to protect your payment information. For more information on Stripe&apos;s security practices, please visit their <a className="text-blue-500 underline" href="https://stripe.com/docs/security" target="blank">Security Documentation</a>.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
        <p className="text-lg text-gray-700 mb-6">
          We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Information</h2>
        <p className="text-lg text-gray-700 mb-6">
          We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
        <p className="text-lg text-gray-700 mb-6">
          You have the right to access, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us at <a href="/contact" className="text-blue-500 underline">contact us</a>.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
        <p className="text-lg text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant changes by email if you have provided us with your email address.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          If you have any questions or concerns about this Privacy Policy, please <a href="/contact" className="text-blue-500 underline">contact us</a>.
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPolicyPage;
