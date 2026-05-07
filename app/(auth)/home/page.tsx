import { PedidoCard } from "@/components/core/pedido-card";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <PedidoCard
        title="Instalar porta de entrada"
        desciption="preciso instalar uma porta de entrada em uma casa de alvenaria na quadra 10 lote 14 seto b"
        image="/placeholder.png"
        category={{
          id: "1",
          nome: "Construção Civil",
          icone: "/icone-placeholder.png",
        }}
      />
    </div>
  );
}
