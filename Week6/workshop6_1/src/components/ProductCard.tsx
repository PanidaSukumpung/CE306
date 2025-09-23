import React from "react";
import Button from "./Button";

interface ProductCardProps {
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({imageUrl,title,description,price,onAddToCart}) => {

    return(
        <div className="bg-white shadow-md rounded-md md:w-60 w-full h-100">
            <img src={imageUrl} className="w-full h-40 object-cover"/>
            <div className="p-4 flex flex-col items-start ">
                <p className="text-[20px] font-bold">{title}</p>
                <p className="text-[14px] text-left m-0">{description}</p>

                <p className="font-bold text-blue-500 text-[20px] mt-6 mb-2">${price}</p>
                <div className="w-full flex justify-center">
                    <Button variant="primary" size="md" onClick={onAddToCart}>
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    )

}

export default ProductCard