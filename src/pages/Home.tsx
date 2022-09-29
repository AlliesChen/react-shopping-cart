import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="mx-3 flex flex-col gap-4">
      <h1 className="mb-3 text-3xl">Lorem Ipsum </h1>
      <NavLink to="/store" className="bg-white drop-shadow-md rounded-b">
        <img
          className="w-full h-20 sm:h-28 lg:h-40 object-cover rounded-t"
          src="/images/book.jpg"
          alt=""
        />
        <div className="p-3">
          <h3 className="mb-3 text-xl">Store</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            exercitationem consequuntur dolorum maxime. Temporibus, aspernatur
            beatae. Sed nisi molestias cum ducimus doloremque ut assumenda
            asperiores, provident explicabo eum, voluptatem tempora.
          </p>
        </div>
      </NavLink>
      <NavLink to="/about" className="bg-white drop-shadow-md rounded-b">
        <img
          className="w-full h-20 sm:h-28 lg:h-40 object-cover rounded-t"
          src="/images/banana.jpg"
          alt=""
        />
        <div className="p-3">
          <h3 className="mb-3 text-xl">About</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            exercitationem consequuntur dolorum maxime. Temporibus, aspernatur
            beatae. Sed nisi molestias cum ducimus doloremque ut assumenda
            asperiores, provident explicabo eum, voluptatem tempora.
          </p>
        </div>
      </NavLink>
    </div>
  );
}
