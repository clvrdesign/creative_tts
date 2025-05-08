import Container from "./components/Container";
import { TTSInterface } from "./components/TTSInterface";
import Aside from "./components/Aside";

export default function Home() {
  return (
    <>
      <Container>
        <div className="w-full flex md:flex-row flex-col gap-4">
          <TTSInterface />
          <Aside/>
        </div>
      </Container>
    </>
  );
}
