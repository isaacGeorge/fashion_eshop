import {component$, useContext} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {itemsContextId} from "~/routes/layout";

export default component$(() => {
  const items = useContext(itemsContextId);
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      {items.map((item)=>{
        return(
            <p>{item.name}</p>
        )
      })}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
