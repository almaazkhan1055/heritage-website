import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: {product: ProductType}) => {
    return (
      <Link href={`/products/${product.slug}`}>
        <div className="w-full h-full flex flex-col items-center justify-center p-3 bg-[#f0f1f3]">
        <Image
          alt={product.name}
          src={`/content/products/${product.image}`}
          quality={100}
          width={1000}
          height={1000}
          className="h-[150px] lg:h-[350px] w-auto p-4 object-scale-down"
        />
        <div className="w-full h-12 px-3 py-3">
          <p className="text-primary font-canelaThin text-center font-bold">
            {product.name}
          </p>
        </div>
      </div>
        </Link>
    )
  }

export default ProductCard;