import React from "react";
import Header from "components/Island/Header";
import PlaceToVisit from "components/Island/PlaceToVisit";
import images from "common/images";

export default function Travel() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${images.BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Header />
      <PlaceToVisit />
    </div>
  );
}
