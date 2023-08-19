import {$, component$, Signal, useComputed$, useContext, useSignal} from "@builder.io/qwik";
import {useLocation} from "@builder.io/qwik-city";
import {CartContext, CartItem, itemsContextId} from "~/routes/layout";
import {getItemImage} from "~/routes/utils";
import {Items} from "~/types";

export default component$(() => {
    const items = useContext(itemsContextId);
    const dialog = useSignal<HTMLDialogElement>();
    const selected = useSignal<Items>();
    const qty = useSignal('1');
    const location = useLocation();
    const cart = useContext<Signal<CartItem[]>>(CartContext);
    const itemDetails = useComputed$(() => {
        return items.find(detail => detail.id == parseInt(location.params.id, 10))
    })

    const openAddToCartDialog = $(() => {
        selected.value = itemDetails.value;
        dialog.value?.showModal()
    })

    const addToCart = $((id?: number, qt?: number) => {
        const cartItem: CartItem = {id, qty: qt} as CartItem;
        // Mutate the Cart do not do a pushs
        if (cart.value.some(item => item.id == id)) {
            // const comItem = cart.value.find(catItm => catItm.id == id) as CartItem;
            // comItem.qty += 1;
            // const index = cart.value.findIndex(catItm => catItm.id == id)
            // cart.value.splice(index, 1, comItem)
            // const product = items.find(prod => prod.id == id) as Items;
            // confirm(`Adding another ${items.attributes.name}?`);
        } else {
            cart.value = [...cart.value, cartItem]
        }

        // clear form
        selected.value = undefined;
        qty.value = '1'
        dialog.value?.close()
        // persist cart
        localStorage.setItem('cart', JSON.stringify(cart.value))
    })
    return (
        <div>
            <div class='container mx-auto p-16 md:flex flex-row gap-6 md:w-[1200px]'>
                <div class='mb-8 md:mb-0'>
                    <img width="600 " height="900" src={getItemImage(itemDetails.value)}/>
                </div>
                <div class='w-8/12 flex flex-col space-y-4'>
                    <p class='text-xl'>{itemDetails.value?.attributes.name.toUpperCase()}</p>
                    <p class='h-14 bg-orange-500 text-white p-4 w-fit rounded-xl font-bold'>$ {itemDetails.value?.attributes.price}</p>
                    <p class='text-md text-gray-500'>{itemDetails.value?.attributes.longDescription}</p>
                    <div class='flex space-x-3 '>
                        <div class='flex flex-row gap-4 px-4 border justify-center items-center '>
                            <button>&#8212;</button>
                            <p>{qty}</p>
                            <button>+</button>
                        </div>
                        <button onclick$={() => openAddToCartDialog(itemDetails.value, parseInt(qty.value, 10))}
                                class=' bg-orange-500 hover:bg-orange-600 p-4 text-white text-xs '> ADD TO CART
                        </button>
                    </div>
                    <div class='text-xs flex flex-col space-y-2'>
                        <p><span class='text-xl'>♡</span>ADD TO WHITELIST</p>
                        <p><span class='font-bold'>CATEGORIES:</span> {itemDetails.value?.attributes.category}</p>
                    </div>
                </div>
            </div>

            {/*    dialo>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <dialog ref={dialog} class='rounded-xl'>
                <form class='w-[400px] p-8'>
                    <p class='border-b text-xl mb-3'>{selected.value?.attributes.name}</p>
                    <div>
                        <p>Qty</p>
                        <input type='number' bind:value={qty} min={1}/>
                    </div>
                    <div>
                        <p>Price</p>
                        <p class='text-gray-700'>${parseInt(qty.value, 10) * (selected.value?.attributes.price || 0)}</p>
                    </div>
                    <div class='flex flex-row space-x-3 mt-2'>
                        <button
                            type='button'
                            class='bg-orange-500 p-2 rounded-md text-white '
                            onclick$={() => addToCart(itemDetails.value, parseInt(qty.value, 10))}> Add To Cart
                        </button>
                        <button class='border p-2 rounded-md' type='button'
                                onclick$={() => dialog.value?.close()}> Cancel
                        </button>
                    </div>
                </form>
            </dialog>

            {/*    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
        </div>
    )
})