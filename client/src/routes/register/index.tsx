import {$, component$, useSignal} from "@builder.io/qwik";
import client from "~/feathersAPI";
import {useNavigate} from "@builder.io/qwik-city";

export default component$(() => {
    const email = useSignal("");
    const password = useSignal("");
    const nav = useNavigate();
    const handleRegister = $(async () => {
        try {
            const formData = {email: email.value, password: password.value};
            //     submit
            await client.service("users").create(formData)
            // formData.strategy = "local"
            await client.authenticate({
                ...formData, strategy: "local"
            })
            email.value = "";
            password.value = "";
            await nav('/profile');
        } catch (e) {
            console.log(e)
        }
    })

    return (
        <div>
            <label>Email</label>
            <input bind:value={email} type="text"/>
            <label>Password</label>
            <input bind:value={password} type="password"/>
            <button type="button" onclick$={handleRegister}>Register</button>
        </div>
    )
})