import { Product } from '@/types/product';
import Image from 'next/image'
import Link from 'next/link'

function getProducts(): Promise<Product[]> {
  return fetch("https://6331c51ecff0e7bf70f62b2c.mockapi.io/products", {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">
        E-commerce Colorido
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-max gap-6 m-10">
        {products.slice(0,9).map((product) => (
          <Link href={`/products/${product?.id}`} key={product?.id}>
            <Image
              src={product?.imageURL}
              alt={product?.name}
              width={600}
              height={600}
              quality={100}
              priority
              className='w-full object-cover aspect-square rounded-md'
            />
            <p className="text-center font-bold">{product?.name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
