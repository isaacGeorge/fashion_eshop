import {$, component$, Signal, useComputed$, useContext, useSignal, useStore} from '@builder.io/qwik';
import type {DocumentHead} from "@builder.io/qwik-city";
import {
    CartContext,
    CartItem,
    CountNumberContextId,
    IsInputHiddenContextId, IsSearchIconVisibleContextId,
    itemsContextId,
    QuerryContextId
} from '~/routes/layout';
import productsData, {Store} from "~/store";
import ItemCard from "~/components/item-card";
import Subscribe from "~/components/subscribe";
import {Link} from "@builder.io/qwik-city";
import {getItemImage} from "~/routes/utils";
import {Items} from "~/types";
// import React from "react";
import Carousel from "~/components/carousel";


export default component$(() => {
    const items = useContext(itemsContextId);
    const cart = useContext(CartContext);
    const querry = useContext(QuerryContextId);
    // const products: Store = useStore(productsData);
    const activeTab = useSignal("");
    const isInputHidden = useContext(IsInputHiddenContextId);
    const isSearchIconVisible = useContext(IsSearchIconVisibleContextId);
    const tabs = useStore([

        {
            label: "ALL",
            name: ""
        },
        {
            label: "NEW ARRIVALS",
            name: "newArrivals"
        },
        {
            label: "BEST SELLERS",
            name: "best Sellers"
        },
        {
            label: "TOP RATED",
            name: "topRated"
        }
    ])
    const itemsData = useComputed$(() => {
        return items.filter(item => ((item.attributes.category === activeTab.value) || (activeTab.value === ""))).filter((eventData) => {
            if (querry.value === "") {
                return eventData;
            } else if (eventData.attributes.name.toLowerCase().includes(querry.value.toLowerCase())) {
                return eventData
            }
        }).map((item) => {
            const category = item.attributes.category;
            const itname = item.attributes.name;
            const itprice = "$" + item.attributes.price;
            const itID = item.id;

            return {
                tag: category,
                name: itname,
                price: itprice,
                image: getItemImage(item),
                id: itID
            }
        })
    })

    const dialog = useSignal<HTMLDialogElement>()
    const selected = useSignal()

    const openAddToCartDialog = $(() => {
        selected.value = itemsData.value;
        dialog.value?.showModal()
    })


    return (
        <div class='flex flex-col justify-center items-center mx-auto'>
            {isSearchIconVisible.value ? <Carousel/> : null}
            <div class='items-center'>
                <h1 class='text-xl text-center mt-16 mb-8'>Our featured <span class='font-bold'>Products</span></h1>
                {/*tabs here*/}
                <div class='flex justify-center flex-nowrap mb-10'>
                    <div class="tabs !flex-nowrap overflow-x-auto ">
                        {tabs.map((tab) => {
                            return (
                                <a
                                    class={`tab tab-lifted flex-shrink-0 ${activeTab.value === tab.name ? "bg-black text-white border-b-0" : null}`}
                                    onclick$={() => activeTab.value = tab.name}>
                                    {tab.label}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div
                class='grid grid-cols-1 min-w-[300px]   gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:px-8 lg:px-32  justify-center items-center'>
                {itemsData.value.map((product, index) => {

                    return (

                        <ItemCard {...product}/>


                    )
                })}
            </div>


            {/*    subscribe*/}
            <Subscribe/>

        </div>
    );
});

export const head: DocumentHead = {
    title: "Fashion Shop",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
