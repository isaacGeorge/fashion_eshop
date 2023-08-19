import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="w-[75vw] my-8  text-center">
            <ion-icon class='w-6 h-6' name="mail"></ion-icon>

            <h1 class=''>Subscribe To Our Newsletter</h1>
            <p>and receive $20 coupon for your first order when you checkout</p>

            <div class="flex flex-col gap-3 mt-4">

                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Username"/>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-grow-0" >Subscribe</button>
            </div>
            {/*<div class="w-fit flex flex-row mt-5  justify-center">*/}

            {/*    <div class=" bg-gray-200">*/}
            {/*        <div class=" ">*/}
            {/*            <div class="relative">*/}
            {/*                <div class="absolute top-4 left-3">*/}
            {/*                    <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>*/}
            {/*                </div>*/}
            {/*                <input type="text"*/}
            {/*                       class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"*/}
            {/*                       placeholder="Search anything..."/>*/}
            {/*                <div class="absolute top-2 right-2">*/}

            {/*                    <button class="h-10  text-gray-700 rounded-lg  ">Search</button>*/}

            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
})