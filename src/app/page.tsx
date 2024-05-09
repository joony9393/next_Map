import CurrentLocationButton from "@/component/CurrentLocationButton";
import Map from "@/component/Map";
import Markers from "@/component/Markers";
import StoreBox from "@/component/StoreBox";
import { StoreType } from "@/interface";

export default async function Home() {
  const stores: StoreType[] = await getData();
  return (
    <>
      <Map />
      <Markers stores={stores} />
      <StoreBox />
      <CurrentLocationButton />
    </>
  );
}

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
