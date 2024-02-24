import { Modal } from "@/components/modal"
import { ProductFrame } from "@/components/product-frame"
import { Product } from "@/types/product"
import Image from "next/image"

async function fetchProduct(id: string): Promise<Product> {
  return fetch(`https://6331c51ecff0e7bf70f62b2c.mockapi.io/products/${id}`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export default async function ModalProduct({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id)

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto flex flex-col items-center gap-2">
        <Modal id={params.id}>
          <ProductFrame {...product} />
        </Modal>
      </div>
    </div>
  )
}
