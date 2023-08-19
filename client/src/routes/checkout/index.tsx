import {component$, useContext, useStore} from "@builder.io/qwik";
import {CartContext} from "~/routes/layout";
import {getItemImage} from "~/routes/utils";

export default component$(() => {

    const cart = useContext(CartContext);
    const products = useStore([
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            name: "Chuck Taylor",
            price: 25,
            comment: "Remaining few items"

        },
        {
            id: 2,
            image: "https://c1.wallpaperflare.com/preview/585/370/573/various-footwear-shoe-shoes.jpg",
            name: "Soccer shoes",
            price: 55,
            comment: "Remaining few items"

        },

        {
            id: 3,
            image: "https://c0.wallpaperflare.com/preview/246/353/310/person-wearing-white-blue-and-orange-high-top-shoes.jpg",
            name: "Basketball shoes",
            price: 35,
            comment: "Remaining few items"

        }
    ])
    return (
        <div class='bg-gray-100 p-8'>
            <p>Cart ({products.length})</p>
            <div class=''>
                <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3  '>
                    {products.map((item) => {
                        return (
                            <div class='bg-white flex flex-col border-b p-4 w-[200px]'>
                                <div class='flex flex-col space-y-5'>
                                    <img class='w-[90px] h-[90px] object-cover ' src={item.image}/>
                                </div>

                                <div class='flex flex-col '>
                                    <p class='text-xl'>{item.name}</p>
                                    <p class='text-sm text-gray-500'>"Remaining few items"</p>
                                </div>

                                <div class='flex flex-col'>
                                    <p class='text-xl'>{item.price} USD</p>
                                    <div class='flex flex-row  space-x-3 mt-8'>
                                        <button
                                            class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>-
                                        </button>
                                        <p>2</p>
                                        <button
                                            class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>+
                                        </button>
                                    </div>
                                    <butto
                                        class='flex flex-row px-3 py-2 text-red-700 text-sm cursor-pointer '>
                                        <ion-icon class='mr-2' name="trash-bin"></ion-icon>
                                        Remove
                                    </butto>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div class='flex flex-col bg-white rounded-md p-8 sm:w-[25%] mt-2 sm:mt-0 h-fit '>
                    <p class='border-b '>CART SUMMERY</p>
                    <div class='flex flex-col sm:flex-row justify-between border-b '>
                        <p>Subtotal </p>
                        <p class=' text-4xl'>25000 </p>
                    </div>
                    <button class='bg-orange-500 text-white p-2 mt-3 shadow-xl'>Checkout 25000</button>
                </div>

            </div>
        </div>
    )

})

// {cart.value.map((item) => {
//     return (
//
//         <div class='flex flex-row justify-between   mb-8 border-b '>
//             <div class='flex flex-row space-x-3'>
//                 <div class='flex flex-col space-y-5'>
//                     <img class='w-[90px] h-[90px] object-cover ' src={getItemImage(item.id)}/>
//                     <butto
//                         className='flex flex-row  justify-center items-center px-3 py-2 text-red-700 text-sm cursor-pointer '>
//                         <ion-icon className='mr-2' name="trash-bin"></ion-icon>
//                         Remove
//                     </butto>
//                 </div>
//
//                 <div class='flex flex-col '>
//                     <p class='text-xl'>{item.id.attributes.name}</p>
//                     <p class='text-sm text-gray-500'>"Remaining few items"</p>
//
//
//                 </div>
//             </div>
//             <div class='flex flex-col items-end'>
//                 <p class='text-xl'>{item.id.attributes.price} USD</p>
//
//                 <div class='flex flex-row justify-center items-center space-x-3 mt-8'>
//                     <button
//                         class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>-
//                     </button>
//                     <p>{item.qty}</p>
//                     <button
//                         class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>+
//                     </button>
//                 </div>
//             </div>
//         </div>
//
//     )
// })}