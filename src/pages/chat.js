function Chat() {
  return (
    <section>
      <section className="flex items-center px-6 pt-4 gap-1 ">
        <h1 className="text-4xl font-bold dark:text-white grow">Moments</h1>
        <button
          type="button"
          className=" focus:ring-4  font-medium text-sm p-2.5 text-center inline-flex items-center rounded-md border-2 "
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Icon description</span>
        </button>
        <button
          type="button"
          className=" focus:ring-4  font-medium text-sm p-2.5 text-center inline-flex items-center rounded-md border-2"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
      </section>
    </section>
  );
}

export default Chat;
