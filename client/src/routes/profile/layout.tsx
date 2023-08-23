import {
    $,
    component$,

    Slot,

    useVisibleTask$
} from '@builder.io/qwik';
import type {RequestHandler} from "@builder.io/qwik-city";
import {useNavigate} from '@builder.io/qwik-city';

import Header from "~/components/header";

import Footer from "~/components/footer";
import client from "~/feathersAPI";


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


export default component$(() => {

    const nav = useNavigate();


    useVisibleTask$(async () => {

        try {
            const x =
            await client.reAuthenticate()
            console.log(x)

        } catch (error) {
            await nav('/login');
        }


    })
const handleLogout = $(async ()=>{
try {
    await client.logout()
    await nav('/login');

} catch (e){
    console.log(e)
}
})

    return (
        <>
            <main>
                <Header/>

                <button type="button" onclick$={handleLogout}>log out</button>
                <Slot/>

            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
});
