import React from "react"

export default function Home() {
  return (
    // <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    //   <div class="flex-shrink-0">
    //     <img className="h-12 w-12" src="https://i.pinimg.com/originals/7c/0c/d8/7c0cd845982ce44adcc12c4753620127.png" alt="ChitChat Logo"/>
    //   </div>
    //   <div>
    //     <div className="text-xl font-medium text-black">ChitChat</div>
    //     <p className="text-gray-500">You have a new message!</p>
    //   </div>
    // </div>
    <div class="max-w-md mx-auto bg-white  shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="h-48 w-full object-cover md:w-48" src="https://i.pinimg.com/474x/54/c5/42/54c54264bfb0d2085e8ea607bccdb44a.jpg" alt="Man looking at item at a store" />
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
          <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>
    </div>
  )
}
