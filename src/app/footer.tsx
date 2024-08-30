import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Container, Section } from "./craft";


;

export default function Footer() {
  return (
    <footer className="not-prose border-t relative">
      <section>
        <div className="grid gap-6">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
             
            </Link>
            <p>
              <Balancer>
                Checkout some of my personal projects below
              </Balancer>
            </p>
            <div className="mb-6 flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:mb-0 md:flex-row">
              <Link href="https://dev.pixelayout.site">PixeLayout Dev</Link>
              <Link href="https://pixelayout.site">Pixel Pulse</Link>
              <Link href="https://fundme.pixelayout.site">Fundeme.ke</Link>
            </div>
            <p className="text-muted-foreground">
              ©{" "}
              <a href="https://www.linkedin.com/in/justine-gichana-879904155/">Justine Gichana</a>
              . All rights reserved. 2024-present.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
