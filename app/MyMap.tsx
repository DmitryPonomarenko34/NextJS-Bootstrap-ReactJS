"use client";
import React, { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function MyMap() {
  const libraries = useMemo(() => ["places"], []);

  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAZkLYw2T_Ou96UmEW5wvB7SZguGiX1KAs",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <GoogleMap
      options={mapOptions}
      mapContainerClassName="google-app-map"
      zoom={14}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{ width: "100%" }}
    />
  );
}
