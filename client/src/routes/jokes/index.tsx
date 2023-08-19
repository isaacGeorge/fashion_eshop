import {component$} from "@builder.io/qwik";
import {Form, routeAction$, routeLoader$} from "@builder.io/qwik-city";
import React from "react";

interface JokesTypes{
    id: string
    status: number
    joke: string
}
export const useDadJoke = routeLoader$(async ()=>{
    const response = await fetch('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
    return(await response.json()) as JokesTypes
});
export const useJokeVoteAction = routeAction$((props) => {
    console.log('VOTE', props)
})
export default component$(() => {
    const dadJokeSignal = useDadJoke()
    const favoriteJoke = useJokeVoteAction()
    return (
        <div class=' p-40 bg-gray-900 text-white text-2xl'>
            <p>{dadJokeSignal.value.status} {dadJokeSignal.value.joke}</p>
            <p>Hey there</p>
            <Form>
                <input type="text" name="jokeID" value={dadJokeSignal.value.id} class="input input-bordered input-info w-full max-w-xs" />
                <button name="vote" value="up">👍</button>
                <button name="vote" value="down">👎</button>
            </Form>
        </div>
    )
});