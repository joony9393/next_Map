import Map from "@/component/Map";
import Markers from "@/component/Markers";
import StoreBox from "@/component/StoreBox";
import { StoreType } from "@/interface";
import { useState } from "react";

import axios from "axios";

export default function Home({ stores }: { stores: StoreType[] }) {
  const [map, setMap] = useState(null);
  const [currentStore, setCureentStore] = useState(null);

  return (
    <>
      <Map setMap={setMap} />
      <Markers stores={stores} map={map} setCureentStore={setCureentStore} />
      <StoreBox store={currentStore} setStore={setCureentStore} />
    </>
  );
}

export async function getStaticProps() {
  const stores = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);

  return {
    props: { stores: stores.data },
    revalidate: 60 * 60,
  };
}
