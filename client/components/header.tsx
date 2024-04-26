import { ModeToggle } from "@/components/ui/toggle";
import Wrapper from "./ui/wrapper";
import { Logo } from "./ui/logo";

export  function Header() {
  return (
    <header className="shadow">
      <Wrapper className="flex justify-between items-center">
        <Logo />
        <ModeToggle />
      </Wrapper>
    </header>
  );
}
