
import {$, component$, useComputed$, useContext, useSignal} from "@builder.io/qwik";
import {CartContext, CartItem, itemsContextId} from "~/routes/layout";

// export type LineItemProps = {}



export default component$((props:{item: CartItem}) =>{
    const items = useContext(itemsContextId);
    const cart = useContext(CartContext);

    const lineItem = useComputed$(() => {
        const product = items.find(prod => prod.id === props.item.id)
        return {
            name: product?.attributes.name,
            unitPrice: product?.attributes.price,
            ...props.item
        }
    })

    const  qty = useSignal(lineItem.value.qty)

    const changeItemQty = $((val: string)=>{
        qty.value = parseInt(val,10)
        cart.value = cart.value.map((itm)=>{
            if(itm.id == props.item.id) {
                itm.qty = parseInt(val,10)
            }
            return itm;
        })
        localStorage.setItem('cart',JSON.stringify(cart.value))
    })
    const removeFromCart = $((e: Event)=>{
        e.preventDefault()
        cart.value = cart.value.filter(itm => itm.id !== props.item.id)
        localStorage.setItem('cart',JSON.stringify(cart.value))
    })

    const total = useComputed$(()=>(lineItem.value.unitPrice || 0) * qty.value)

    return (<div style='display: flex; gap:5px;'>
        <input
            min={1}
            type='number'
            value={qty.value}
            onInput$={(event, element) => changeItemQty(element.value) }
        />
        <div>{lineItem.value.name}{qty.value > 1 ? 's': ''}</div>
        <div> at </div>
        <div>$<strong>{total.value}</strong></div>
        <div>
            <button  onclick$={removeFromCart}>x</button>
        </div>
    </div>);
})
