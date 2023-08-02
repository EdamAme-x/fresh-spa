import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { changeRoute, FsRouter, FsShow, SPALink } from "../fresh-spa/mod.ts";

export default function Home() {
  const count = useSignal(3);

  // function changePage() {
  //   changeRoute("/foo/bar");
  // } // bad! changeRoute is reactive only in islands

  return (
    <>
      <Head>
        <title>FreshSPA</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac] text-3xl font-bold text-center font-mono text-white">
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
          class="my-6 mx-auto"
        />
        <FsRouter>
          <FsShow path="/">
            <p>Welcome to FreshSPA Here is "/" .</p>
            <SPALink
              to="/counter"
              className="text-black border border-white px-2 py-1 my-4 rounded-md bg-white hover:bg-gray-200 transition-colors"
            >
              change page
            </SPALink>
          </FsShow>
          <FsShow path="/counter">
            <div className="w-full px-4 py-8 flex justify-center text-3xl font-bold text-center font-mono text-black">
              <Counter count={count} />
            </div>
            <SPALink
              to="/"
              className="text-black border border-white px-2 py-1 my-4 rounded-md bg-white hover:bg-gray-200 transition-colors"
            >
              change page
            </SPALink>
          </FsShow>
        </FsRouter>
        <p>
          Developer:{" "}
          <a
            href={Math.random() > 0.5
              ? "https://github.com/EdamAme-x"
              : "https://twitter.com/amex2189"}
          >
            EdamAme-x / @amex2189
          </a>
        </p>
      </div>
    </>
  );
}
