import React from "react";
import Link from "next/link";

export default () => (
  <div>
    <h1>Home</h1>
    <p>Note that Web3 is not loaded for this page.</p>
    {/* <div><Link href='/dapp'><a>My Dapp</a></Link></div> */}
    <div>
      <Link href="/account">
        <a>My Account</a>
      </Link>
    </div>
    <div>
      <Link href="/launchpad">
        <a>Launchpad</a>
      </Link>
    </div>
    <div>
      <Link href="/presale">
        <a>Presale</a>
      </Link>
    </div>
    <div>
      <Link href="/auth">
        <a>Auth</a>
      </Link>
    </div>
  </div>
);
