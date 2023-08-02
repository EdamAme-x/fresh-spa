import { useEffect, useState } from "preact/hooks";
import { Children, cloneElement } from "preact/compat";

export function FsRouter(props: any) {
  let [render, setRender] = useState(0);

  function reload() {
    setRender((render) => render + 1);
  }

  useEffect(() => {
    window.addEventListener("hashchange", reload);
    return () => {
      window.removeEventListener("hashchange", reload);
    };
  }, []);

  return (
    <>
      {Children.map(props.children, (child, index) =>
        cloneElement(child, { key: render + index }))}
    </>
  );
}
