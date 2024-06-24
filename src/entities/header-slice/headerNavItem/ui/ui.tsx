"use client";

import {
  IHeaderRoutItem,
  THeaderRoutItemTitle,
} from "@/shared/interface/header";
import Link from "next/link";
import styles from "./ui.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { getActiveIconByActiveTitle } from "../model";
export const HeaderRouteItem = ({
  routerItem,
}: {
  routerItem: IHeaderRoutItem;
}) => {
  const pathName = usePathname();
  const [activeTapBarItem, setActiveTapBarItem] = useState<
    THeaderRoutItemTitle | undefined
  >(routerItem.path === pathName ? routerItem.title : undefined);
  const [activeIcon, setActiveIcon] = useState<StaticImport | undefined>(
    undefined
  );
  useEffect(() => {
    setActiveTapBarItem(
      routerItem.path === pathName ? routerItem.title : undefined
    );
    setActiveIcon(getActiveIconByActiveTitle(activeTapBarItem));
  }, [activeTapBarItem, pathName, routerItem.path, routerItem.title]);

  return (
    <>
      <Link
        id={routerItem.id.toString()}
        className={styles.headerRouteItem}
        href={routerItem.path}
      >
        <div className={styles.navItem}>
          <Image
            src={activeIcon ? activeIcon : routerItem.icon}
            width={20}
            height={20}
            alt={routerItem.title}
          />
          <nav
            style={{
              fontWeight: routerItem.path === pathName ? "800" : "700",
              color: routerItem.path === pathName ? "#222" : "#8c888a",
            }}
            className={styles.title}
          >
            {routerItem.title}
          </nav>
        </div>
        <span
          style={{ opacity: routerItem.path === pathName ? "1" : "0" }}
          className={styles.divider}
        />
      </Link>
    </>
  );
};
