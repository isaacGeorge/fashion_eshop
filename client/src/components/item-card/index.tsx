import {component$, useContext} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";
import {itemsContextId} from "~/routes/layout";

interface ItemProps {
    name?: string
    tag?: string
    price?: string
    image?: string
    id?: number
}

export default component$<ItemProps>((props) => {

    const items = useContext(itemsContextId);
    return (

        <div class='flex flex-col bg-white  shadow-xl rounded-md overflow-clip'>
            <div class='w-full h-[200px]'>
                <img width='100%' height='100%' class='w-full h-full object-cover object-top' src={props.image}/>
            </div>

                <div class='flex flex-col p-4 text-black/60  '>
                    <p class='text-xs text-orange-500 font-semibold mt-3'>{props.tag}</p>
                    <p class='text-sm font-semibold'>{props.name}</p>
                    <p class='text-2xl font-semibold'>{props.price}</p>
                </div>

        </div>
    )
})