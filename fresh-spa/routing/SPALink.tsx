import { changeRoute } from "../utils/changeRoute.ts";
import { useEffect } from "preact/hooks";

interface propType {
  to: string;
  children: any;
  [key: string]: any;
}

export function SPALink(props: propType) {
  return (
    <button
      onClick={() => {
        changeRoute(props.to);
      }}

      {...props}
    >
      {props.children}
    </button>
  );
}
