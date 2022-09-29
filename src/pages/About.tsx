export function About() {
  return (
    <div className="mx-3 flex flex-col gap-4">
      <h1 className="mb-3 text-3xl">About</h1>
      <section className="bg-white drop-shadow-md rounded-b">
        <img
          className="w-full h-20 sm:h-28 lg:h-40 object-cover rounded-t"
          src="/images/computer.jpg"
          alt=""
        />
        <div className="p-3">
          <p>This web app is built with React, TypeScript, and Tailwind CSS. The main function which is the shopping cart can be found on the "Store" page.</p>
          <p>
            I create this app with <a className="text-sky-500" href="https://youtu.be/lATafp15HWA">
            the tutorial
            </a> made by Kyle on Web Dev Simplified.
             While I choose Tailwind CSS rather than Bootstrap for the UI framework.
          </p>
        </div>
      </section>
    </div>
  );
}
