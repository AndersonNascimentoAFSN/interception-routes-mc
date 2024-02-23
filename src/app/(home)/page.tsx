import Image from 'next/image'
import Link from 'next/link'


interface Product {
  id: string
  title: string
  url: string
  thumbnailUrl: string
}

function getProducts(): Promise<Product[]> {
  return fetch("https://jsonplaceholder.typicode.com/photos")
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
              src={product?.url}
              alt={product?.title}
              width={600}
              height={600}
              quality={100}
            />
            <p className="text-center font-bold">{product?.title}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
