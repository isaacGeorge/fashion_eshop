
import type {DocumentHead} from "@builder.io/qwik-city";
import {component$} from "@builder.io/qwik";



export default component$(() => {



    return (
       <p>Welcom</p>
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
