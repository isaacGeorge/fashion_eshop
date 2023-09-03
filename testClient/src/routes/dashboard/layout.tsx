import {component$, Slot, useVisibleTask$} from "@builder.io/qwik";
import client from "~/api/feathersAPI";
import {useNavigate} from "@builder.io/qwik-city";

export default component$(()=>{
    const nav = useNavigate()

    useVisibleTask$(async ()=>{
        try {

            await client.reAuthenticate()

        } catch (error) {
           await nav('/')
        }

    })
    return(
        <div>
            <nav style='display: flex; flex-direction: row; justify-content: end; align-items: center; '>
                <button>Log out</button>
            </nav>
            <Slot />
        </div>
    )
})