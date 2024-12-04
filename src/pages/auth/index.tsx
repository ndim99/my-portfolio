import NextBox from "@/components/Auth/Next";
import PrivyBox from "@/components/Auth/Privy";
import Container from "@/components/Container";

export default function Auth() {
  return (
    <Container className="flex lg:flex-row flex-col">
      <PrivyBox />
      <NextBox />
    </Container>
  );
}
