import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-10 bg-gray-100 text-sm text-gray-600  '>
            <div class='m:w-3/12'  >
                <h1 class='text-red-700 mb-3' >ECOMMER</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat
                </p>
            </div>

            <div class='flex flex-col space-y-2'>
                <h1 class='font-bold text-gray-900'> About Us</h1>
                <p>Careers</p>
                <p>Our Stores</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>

            <div class='flex flex-col space-y-2' >
                <h1 class='font-bold text-gray-900' >Customer Care</h1>
                <p>Help Center</p>
                <p>Track Your Order</p>
                <p>Corporate & Bulk Purchasing</p>
                <p>Returns & Refunds</p>
            </div>

            <div class='flex flex-col space-y-2' >
                <h1 class='font-bold text-gray-900' >Contact Us</h1>
                <p>50 north Whatever Blvd, Washington, DC 10501</p>
                <p>Email: mredwardroh@gmail.com</p>
                <p>(222)333-4444</p>
            </div>

        </div>
    )
})