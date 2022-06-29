import React from "react";
import UserResults from "../Components/Users/UserResults";
import UserSearch from "../Components/Users/UserSearch";

function Home() {
  return (
    <>
      {/* <h1>Home</h1> */}
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
