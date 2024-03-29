import { Dock } from "react-dock"
import { useEffect, useState, useContext } from "react"
import ProdutoCart from "../produto-cart/produto-cart.jsx"
import "./cart.css"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../contexts/cart-context.jsx"
import back from "../../assets/back.png"
import bag from "../../assets/bag.png"

function Cart() {

    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const { cartItems, totalCart } = useContext(CartContext)


    useEffect(function () {
        window.addEventListener('openSidebar', function () {
            setShow(true)
        })

        //setCartItems(carrinho)
    }, [])

    function checkout() {
        navigate('/checkout')
    }

    return <Dock position="right"
        isVisible={show}
        fluid={false} size={360}
        onVisibleChange={function (visible) {
            setShow(visible)
        }}>

        {
            cartItems.length == 0 ?
                <div className="cart-empty">
                    <img onClick={(e) => setShow(false)} src={back} className="cart-btn-close" />
                    
                    <div className="text-center">
                        <img src={bag} />
                        <p>Sua sacola está vazia</p>
                    </div>
                </div>
                :

                <>
                    <div className="text-center">
                        <img onClick={(e) => setShow(false)} src={back} className="cart-btn-close" />
                        <h1>Meu pedido</h1>
                    </div>

                    <div className="lista-produtos">
                        {
                            cartItems.map(function (item) {
                                return <ProdutoCart key={item.id} id={item.id} foto={item.foto} nome={item.nome} qtd={item.qtd} preco={item.preco} />
                            })
                        }
                    </div>

                    <div className="footer-cart">
                        <div className="footer-cart-valor">
                            <span>Total</span>
                            <span><strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalCart)}</strong></span>
                        </div>
                        <div>
                            <button className="btn-checkout" onClick={checkout}>Finalizar pedido</button>
                        </div>
                    </div>
                </>
        }
    </Dock>
}

export default Cart