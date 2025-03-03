import { Collection } from "./components/ui/collection";
import { Destaque } from "./components/ui/destaque";
import { Entrega } from "./components/ui/entrega";
import { Header } from "./components/ui/header";
import { PlayStation } from "./components/ui/playstation";
import { Main } from "./components/ui/main";
import { TopHeader } from "./components/ui/topheader";
import { ProductsPlay } from "./components/ui/products-playstation";
import { Newsletter } from "./components/ui/newsletter";
import { Footer } from "./components/ui/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <TopHeader />
      <Header />
      <Main />
      <Destaque />
      <Collection />
      <PlayStation />
      <ProductsPlay />
      <Entrega />
      <Newsletter />
      <Footer />
    </div>
  );
}
