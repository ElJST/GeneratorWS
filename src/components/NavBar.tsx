import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Tooltip,
} from "@heroui/react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <section className="h-[80px]">
      <section className="sm:hidden h-8 w-full bg-black text-white grid place-content-center">
        <TextAnimate animation="scaleUp" by="text" className="text-xl">
          Generador Web
        </TextAnimate>
      </section>

      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <Tooltip content="Pagina principal">
            <section className="cursor-pointer">
              <a
                href="https://www.wdwebsites.com"
                target="_blank"
                className="font-semibold text-inherit flex underline items-center"
              >
                wdwebsites
                <LuSquareArrowOutUpRight className="translate-y-0.5" />
              </a>
            </section>
          </Tooltip>
        </NavbarBrand>

        <NavbarContent className=" hidden sm:flex gap-4 " justify="center">
          <TextAnimate
            animation="scaleUp"
            by="text"
            className="text-xl font-semibold"
          >
            Generador Web
          </TextAnimate>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link to={"/contact"}>
              <Button color="primary" variant="shadow" radius="full">
                Contactanos
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </section>
  );
};
