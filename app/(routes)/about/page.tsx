import Container from "@/components/ui/container";

const AboutUsPage = () => {
  return (
    <Container>
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">About Our Bakery</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Crispy Dough Bakery, the heart of Universal City, Texas! We are a veteran-owned bakery dedicated to serving our community with the finest baked goods and treats.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 mb-6">
          The Crispy Dough Bakery was founded by Debra Schultz, a proud veteran who wanted to continue serving her community in a different capacity. After Debra retired from military service, she decided to pursue her passion for baking and opened Crispy Dough Bakery with the goal of providing delicious treats and warm hospitality to Universal City residents.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          At Crispy Dough, our mission is simple: to spread joy through our baked goods and to give back to the community that has supported us. We take pride in using only the finest ingredients and traditional recipes to create mouthwatering treats that bring people together.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Community</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are proud to be a part of the vibrant community of Universal City, Texas. We believe in supporting local initiatives and organizations, and we are committed to giving back through various community outreach programs and events.
        </p>
      </div>
    </Container>
  );
};

export default AboutUsPage;
