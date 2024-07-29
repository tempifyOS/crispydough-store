import Container from "@/components/ui/container";

const TermsOfUsePage = () => {
  return (
    <Container>
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Terms of Use</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <a href="/" className="text-blue-500 underline">The Crispy Dough Bakery</a>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully before using our site.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
        <p className="text-lg text-gray-700 mb-6">
          By accessing or using our website, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Site</h2>
        <p className="text-lg text-gray-700 mb-6">
          You may use our website for lawful purposes only. You agree not to use our website:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>In any way that violates any applicable local, state, national, or international law or regulation.</li>
          <li>To engage in any fraudulent or harmful activity.</li>
          <li>To transmit any unsolicited or unauthorized advertising, promotional materials, or spam.</li>
          <li>To impersonate or attempt to impersonate The Crispy Dough Bakery, our employees, other users, or any other person or entity.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
        <p className="text-lg text-gray-700 mb-6">
          The content, design, and other materials on our website are the intellectual property of The Crispy Dough Bakery or our licensors. You may not use, reproduce, distribute, or create derivative works based on any content on our website without our express written permission.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Descriptions</h2>
        <p className="text-lg text-gray-700 mb-6">
          We strive to ensure that the product descriptions and images on our website are accurate and complete. However, we do not warrant that the descriptions, images, or other content on our website are accurate, complete, reliable, current, or error-free.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Availability</h2>
        <p className="text-lg text-gray-700 mb-6">
          All prices are subject to change without notice. We reserve the right to modify or discontinue any product at any time. We are not liable for any changes in price or availability of products.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment</h2>
        <p className="text-lg text-gray-700 mb-6">
          All payments are processed through <a className="text-blue-500 underline" href="https://stripe.com" target="blank">Stripe</a>. By making a purchase, you agree to Stripe&apos;s terms and conditions. We are not responsible for any issues related to payment processing.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
        <p className="text-lg text-gray-700 mb-6">
          To the fullest extent permitted by law, The Crispy Dough Bakery shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or the products purchased through our website.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
        <p className="text-lg text-gray-700 mb-6">
          These Terms of Use are governed by and construed in accordance with the laws of the jurisdiction in which The Crispy Dough Bakery operates, without regard to its conflict of law principles.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
        <p className="text-lg text-gray-700 mb-6">
          We may update these Terms of Use from time to time. Any changes will be posted on this page, and we will notify you of significant changes by email if you have provided us with your email address.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          If you have any questions or concerns about these Terms of Use, please <a href="/contact" className="text-blue-500 underline">contact us</a>.
        </p>
      </div>
    </Container>
  );
};

export default TermsOfUsePage;
