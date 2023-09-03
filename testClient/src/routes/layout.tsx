import {component$, createContextId, Slot, useContextProvider} from "@builder.io/qwik";
import type {RequestHandler} from "@builder.io/qwik-city";
import {routeLoader$} from "@builder.io/qwik-city";

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

export type ItemsType = {
    _id: number;
    price: number;
    name: string;
    image: string;
    comment: string
}


export const useItemsData = routeLoader$(async () => {
    const item = await fetch(`http://${import.meta.env.PUBLIC_BACKEND_URL}/items`);
    const itemJson = await item.json();
    return (itemJson.data);
});
export const itemsContextId = createContextId<ItemsType[]>("items");

export default component$(() => {

    const items = useItemsData();
    useContextProvider(itemsContextId, items.value);

    return <Slot/>;
});
