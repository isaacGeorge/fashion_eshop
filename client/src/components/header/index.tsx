import {$, component$, useContext, useSignal, useStore, useTask$} from "@builder.io/qwik";
import {
    CartContext,
    CountNumberContextId, IsInputHiddenContextId,
    IsSearchIconVisibleContextId,
    itemsContextId,
    QuerryContextId
} from "~/routes/layout";
import LineItem from "~/components/line-item/line-item";
import {Items} from "~/types";
import {Link} from "@builder.io/qwik-city";

export default component$(() => {

    const showText = useSignal("hello")
    const items = useContext(itemsContextId);
    const cart = useContext(CartContext);
    const countNumber = useContext(CountNumberContextId);
    const querry = useContext(QuerryContextId);
    const isSearchIconVisible = useContext(IsSearchIconVisibleContextId);
    const isInputHidden = useContext(IsInputHiddenContextId);
    const dialog = useSignal<HTMLDialogElement>()
    const checkout = $(() => {

    })

    return (
        <div class='sticky top-0 z-30 bg-white'>
            <nav class=' flex justify-between items-center w-[90%] mx-auto '>
                <div>
                    <img width="348" height="196"
                         class='w-16'
                         src='https://img.freepik.com/premium-vector/clothing-store-logo-design-inspiration-vector-illustration_500223-481.jpg'/>
                </div>
                <div>
                    <ul class='flex flex-row justify-center items-center'>
                        {isInputHidden.value ?

                            <li>
                                <input
                                    onfocusout$={() => {
                                        isSearchIconVisible.value = true;
                                        isInputHidden.value = false
                                    }}
                                    bind:value={querry}
                                    placeholder='Search'
                                    class='border border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 focus:text-gray-600 px-4 h-[45px] rounded-full '/>
                            </li>
                            :
                            null
                        }
                        {isSearchIconVisible.value ?
                            <li class='text-2xl '>
                                <ion-icon
                                    class='p-4 hover:bg-[#3b5998]/90 hover:text-white'
                                    name="search"
                                    onClick$={() => {
                                        isInputHidden.value = true
                                        isSearchIconVisible.value = false
                                    }}>
                                </ion-icon>
                            </li>
                            :
                            null
                        }
                        <li class='text-2xl '>
                            <ion-icon class='p-4 hover:bg-[#3b5998]/90 hover:text-white' name="person"></ion-icon>

                        </li>
                        <li class='text-2xl relative'>
                            <Link href='/checkout'>
                                <ion-icon class='p-4 hover:bg-[#3b5998]/90 hover:text-white' name="cart"></ion-icon>
                                <div
                                    class='absolute top-2 right-2 rounded-full h-4 w-4 inline-flex items-center justify-center bg-red-500 text-white text-sm'>{cart.value.length}
                                </div>
                            </Link>
                        </li>
                        <li class='ml-2' >
                            <Link href='/login'>
                                <button class='bg-orange-500 rounded-full px-4 py-2 text-sm text-white hover:bg-orange-600' type='button'>Login
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
})