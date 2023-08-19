import {component$} from "@builder.io/qwik";
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import {RouterHead} from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Don't remove the `<head>` and `<body>` elements.
     */

    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8"/>
                <link rel="manifest" href="/manifest.json"/>
                {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
                {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>*/}
                <link
                    href="https://fonts.googleapis.com/css2?family=Belleza&family=Cinzel&family=Fauna+One&display=swap"
                    rel="stylesheet"/>
                <RouterHead/>
            </head>
            <body lang="en">
            <RouterOutlet/>
            <ServiceWorkerRegister/>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            </body>
        </QwikCityProvider>
    );
});
