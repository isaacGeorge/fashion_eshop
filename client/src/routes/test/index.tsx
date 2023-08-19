import {$, component$, useComputed$, useContext, useSignal, useStore, useTask$} from "@builder.io/qwik";
import {Link, server$} from "@builder.io/qwik-city";
import {getItemImage} from "~/routes/utils";
import {CartContext, itemsContextId, QuerryContextId} from "~/routes/layout";
import ItemCard from "~/components/item-card";

export default component$(() => {
    const count = useSignal(0);
    const dialog = useSignal<HTMLDialogElement>()
    const selected = useSignal();
    const items = useContext(itemsContextId);
    const querry = useContext(QuerryContextId);
    const cart = useContext(CartContext);
    const products = useStore([
        {
            id: 1,
            name: "cloth",
            qty: 1
        },
        {
            id: 2,
            name: "jacket",
            qty: 1
        },
        {
            id: 3,
            name: "bag",
            qty: 1
        }
    ])
    const openAndAddToCartDialog = $((id: number) => {
        selected.value = products.find(prod => prod.id == id);
        dialog.value?.showModal()
    })
    const showText = useSignal("")

    const displayProducts = useComputed$(() => {
        return products.filter((eventData) => {
            if (showText.value === "") {
                return eventData;
            } else if (eventData.name.toLowerCase().includes(showText.value.toLowerCase())) {
                return eventData
            }
        }).map((prod) => {
            const name = prod.name;
            return name
        })
    })


    const itemsData = useComputed$(() => {
        return items.filter((eventData) => {
            if (showText.value === "") {
                return eventData;
            } else if (eventData.attributes.name.toLowerCase().includes(showText.value.toLowerCase())) {
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

    return (
        <div>



            <div class='card'>

            </div>
            {/*{JSON.stringify(cart.value)}*/}

            {cart.value.map((item)=>{
                return(
                    <div>
                        <p>{item.id.attributes.name}</p>
                        <img width="600 " height="900" src={getItemImage(item.id)}/>
                    </div>
                )
            })}
        </div>
    )
})