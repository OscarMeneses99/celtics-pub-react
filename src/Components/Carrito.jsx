import { XMarkIcon } from "@heroicons/react/24/solid"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { useContext } from 'react'
import { CelticsContext } from "../Context/Context"

const OrderCard = () => {

    const { toggleMenu } = useContext(CelticsContext)
    return (
        <aside className="product-detail border border-black rounded-lg px-5">
            <button className="title-container items-center"
                onClick={toggleMenu}>
                <ChevronLeftIcon className="w-6 h-6" />
                <p className="title">MI ORDEN</p>
            </button>

            <div className="my-order-content">
                <div className="shopping-cart">
                    <p>Hamburguesa</p>
                    <p className="text-right">$250.00</p>
                    <XMarkIcon className="w-6 h-6 right-0 cursor-pointer" />
                </div>

                <div className="shopping-cart">
                    <p>Bohemia Obscura</p>
                    <p className="text-right">$60.00</p>
                    <XMarkIcon className="w-6 h-6 cursor-pointer" />
                </div>

                <div className="shopping-cart">
                    <p>Irish Mix</p>
                    <p className="text-right">$280.00</p>
                    <XMarkIcon className="w-6 h-6 cursor-pointer" />
                </div>

                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>$590.00</p>
                </div>

                <button className="primary-button">
                    Pedir
                </button>
            </div>
        </aside >
    )
}

export default OrderCard
