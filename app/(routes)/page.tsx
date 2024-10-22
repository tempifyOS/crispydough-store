import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import ExpandableNote from "@/components/ExpanableNote"; // Import the client component

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("5c7d383b-31c7-4543-9ed3-dd1fdd4e4e11");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="w-1/2 max-w-md mx-auto">
          <Billboard 
            data={billboard}
          />
          <ExpandableNote /> {/* Use the client component */}
          <p className="text-red-600 text-center">Please view the note!</p>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
