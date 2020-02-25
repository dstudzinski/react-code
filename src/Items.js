import React from "react";

function Items() {
  // can't do this:
  // return (
  //   <div>One</div>
  //   <div>Two</div>
  // )

  // but you can do this
  // return (
  //   <React.Fragment>
  //     <div>One</div>
  //     <div>Two</div>
  //   </React.Fragment>
  // )

  // or simply
  return (
    <>
      <div>One</div>
      <div>Two</div>
    </>
  )
}

export {
  Items
}