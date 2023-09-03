import {$, component$, useSignal} from "@builder.io/qwik";
import client from "~/feathersAPI";
import {useNavigate} from "@builder.io/qwik-city";


export default component$(() => {
    const email = useSignal("");
    const password = useSignal("");
    const nav = useNavigate();

    const handleRegister = $(async () => {
        try {
            const formData = {strategy: 'local', email: email.value, password: password.value};
            //     submit
            await client.authenticate(formData)
            email.value = "";
            password.value = "";
            await nav('/profile');

        } catch (e) {
            console.log(e)
        }
    })

    return (
        <div class='bg-gray-50 h-[900px] flex justify-center items-center'>
            <div
                class='flex flex-col md:flex-row overflow-clip shadow-md rounded sm:w-[80vw] bg-white md:h-[65%] justify-center mx-auto'>
                <div class='h-full'>
                    <img
                        class='object-cover h-full'
                        src='https://img.freepik.com/free-photo/positive-mixed-race-shopaholic-stands-near-rack-with-clothes-uses-credit-card-smartphone-making-purchasing_273609-34336.jpg?w=996&t=st=1692951394~exp=1692951994~hmac=5b26498d89a438c44ab325bc2aee81dedf00822e720f30bc4b04d4b30a4aa36f'/>
                </div>

                <div class="w-full h-full ">

                    <form class="  px-8 pt-6 pb-8 h-full flex flex-col justify-center ">
                        <div class=' mb-4 flex flex-col justify-center items-center'>
                            <p class='text-3xl text-center ' >Hello Again</p>
                            <p class='text-sm text-gray-500 text-center'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                                graphic or web designs.</p>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username" >
                                Email
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="e.g, someone@gmail.com" bind:value={email}/>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input
                                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="******************" bind:value={password}/>

                        </div>
                        <div class="flex items-center justify-between">
                            <button
                                class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onclick$={handleRegister}
                                type="button">
                                Login
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-orange-500  hover:text-orange-800"
                               href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
                {/*<div>*/}
                {/*    <label>Email</label>*/}
                {/*    <input bind:value={email} type="text"/>*/}
                {/*    <label>Password</label>*/}
                {/*    <input bind:value={password} type="password"/>*/}
                {/*    <button type="button" onclick$={handleRegister}>Login</button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
})