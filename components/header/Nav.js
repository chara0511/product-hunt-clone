import React from "react";
import { MoreIcon } from "../icons";
// import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {/* <Link href="/">Home</Link>
      <Link href="/">Popular</Link>
      <Link href="/">New Product</Link> */}

      <button>
        <MoreIcon />
      </button>
    </nav>
  );
};

export default Nav;
