import Container from "@/components/Container";
import useAuth from "@/hooks/useAuth";

function ProtectedPage() {
  return (
    <Container>
      <h1 className="fontSizeFromXl text-main-colors font-semibold">
        Protected Content
      </h1>
      <p className="fontSizeFromBase text-secondary-colors">
        This page is only visible to authenticated users.
      </p>
    </Container>
  );
}
export default useAuth(ProtectedPage);
