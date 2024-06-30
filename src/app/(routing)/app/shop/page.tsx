import { CharacterGood } from "@/entities/shop-slice/characterGood";
import { MainGood } from "@/entities/shop-slice/mainGood";
import { ShopTimeBanner } from "@/entities/shop-slice/shopTimeBanner";
import { BackgroundGoodRender } from "@/features/shop-slice/backgroundGoodRender";
import { CharacterGoodsRender } from "@/features/shop-slice/characrerGoodsRender";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          gap: "16px",
        }}
      >
        <ShopTimeBanner />
        <MainGood />
        <BackgroundGoodRender />
        <CharacterGoodsRender />
      </div>
    </>
  );
}
