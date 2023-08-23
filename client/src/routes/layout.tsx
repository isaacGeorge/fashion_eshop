import {
    component$,
    createContextId,
    Signal,
    Slot,
    useContextProvider,
    useSignal,
    useStore,
    useVisibleTask$
} from '@builder.io/qwik';
import type {RequestHandler} from "@builder.io/qwik-city";
import {routeLoader$} from '@builder.io/qwik-city';
import {Items} from '~/types';
import Header from "~/components/header";
import {Store} from "~/store";
import Footer from "~/components/footer";


export const onGet: RequestHandler = async ({cacheControl}) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.builder.io/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    });
};

// define types for cart items
export type CartItem = {
    id: number;
    qty: number;
}

export type Items = {
    _id: number;
    price: number;
    name: string;
    image: string;
    comment: string
}

export const useItemsData = routeLoader$(async () => {
    const item = await fetch(
        `http://${import.meta.env.PUBLIC_BACKEND || "localhost"}:${import.meta.env.PUBLIC_BACKEND_PORT}/api/items?populate=image`,
        {
            method: "GET",
        }
    );
    const itemJson = await item.json();
    return (itemJson.data);
});

export const CountNumberContextId = createContextId('countNumber')
export const CartContext = createContextId<Signal<CartItem[]>>('cart');
export const itemsContextId = createContextId<Items[]>("items");
export const QuerryContextId = createContextId("querry");
export const IsInputHiddenContextId = createContextId("isInputHidden")
export const IsSearchIconVisibleContextId = createContextId("isSearchIconVisible")

export default component$(() => {
    const cart = useSignal<CartItem[]>([])
    const querry = useSignal("")
    const items = useItemsData();
    const isInputHidden = useSignal(false);
    const countNumber = useSignal(0);
    const isSearchIconVisible = useSignal(true);


    useContextProvider(CartContext, cart);
    useContextProvider(itemsContextId, items.value);
    useContextProvider(QuerryContextId, querry)
    useContextProvider(IsInputHiddenContextId, isInputHidden)
    useContextProvider(CountNumberContextId, countNumber)
    useContextProvider(IsSearchIconVisibleContextId, isSearchIconVisible)


    useVisibleTask$(() => {
        // when reload === initialize cart from localStorage

        // track(() => countNumber.value)
        // localStorage.setItem('pokeman', JSON.stringify(countNumber.value))


        const localStorageCart = localStorage.getItem('cart')
        if(localStorageCart) {
            cart.value = JSON.parse(localStorageCart);
        }
    })


    return (
        <>
            <main>
                <Header/>
                <Slot/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
});
