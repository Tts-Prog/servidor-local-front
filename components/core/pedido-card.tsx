import Image from "next/image";
import { Card, CardContent } from "../ui/card";

interface CategoriaType {
  id: string;
  nome: string;
  icone: string;
}

interface PedidoCardProps {
  title: string;
  desciption: string;
  image: string;
  category: CategoriaType;
}

export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
  return (
    <Card>
      <CardContent>
        <div className="">
          <Image src={pedidoCardProps.image} alt={pedidoCardProps.title} fill />
        </div>
      </CardContent>
    </Card>
  );
};
