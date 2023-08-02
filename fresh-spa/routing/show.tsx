import { useEffect, useState } from "preact/hooks";
export function FsShow(props: any) {
  const [show, setShow] = useState(false);
  const [child, setChild] = useState(props.children);

  useEffect(() => {
    let url_hashs = window.location.hash.split("#");
    // console.log(url_hashs[url_hashs.length - 1]);
    if (url_hashs.length < 1 || url_hashs[url_hashs.length - 1] == "") {
      setShow(props.path === "/");
    } else {
      let hash = url_hashs[url_hashs.length - 1];
      setShow(hash === "" ? props.path === "/" : props.path === hash);
    }
  }, []);

  return (
    <>
      {show ? props.children : <div frsh-spa-no-rendering></div>}
      <div frsh-child-info style={{ display: "none" }}>
        {child}
      </div>
    </>
  );
}
