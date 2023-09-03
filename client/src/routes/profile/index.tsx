
import type {DocumentHead} from "@builder.io/qwik-city";
import {component$} from "@builder.io/qwik";



export default component$(() => {



    return (
       <div>
           <p>welcome to dashboard</p>
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
