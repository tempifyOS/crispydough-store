"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ContactForm from "@/components/ui/contactform";
import Container from "@/components/ui/container";

const ContactPage = () => {
  return (
    <>
      <Container>
        <div className="py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h1>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Contact Information
            </h2>
            <p className="text-lg text-gray-700">
              Phone: (210)-906-4517 <br />
              Email: thecrispydough@gmail.com
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Ran Into a Problem?
            </h2>
            <p className="text-lg text-gray-700">
              Email:{" "}
              <a
                href="mailto:thecrispydough@gmail.com"
                className="text-blue-600"
              >
                thecrispydough@gmail.com
              </a>{" "} or{" "}
              <a href="mailto: ryan@ryanhunt.dev" className="text-blue-500">ryan@ryanhunt.dev</a>.
              <br />
              If you encounter any bugs or problems on our website, please
              contact{" "}
              <a href="mailto:ryan@ryanhunt.dev" className="text-blue-600">
                ryan@ryanhunt.dev
              </a>
              . We value your time and business on our website very seriously.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Send us a Message
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Have a question or comment? Fill out the form below and we will
              get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
