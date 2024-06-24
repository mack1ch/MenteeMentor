import Link from "next/link";
import styles from "./ui.module.scss";
import Image from "next/image";
import MenteeMentor from "../../../../../public/assets/logos/menteeMentor_logo.png";
import { DHeaderRouterItems } from "../data";
import { HeaderRouteItem } from "@/entities/header-slice/headerNavItem";
import { Tooltip } from "antd";
import Coins from "../../../../../public/icons/header/coins.svg";
import Tickets from "../../../../../public/icons/header/tickets.svg";
import Avatar from "../../../../../public/assets/avatars/avatar.png";
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <div className={styles.menteeMentorAndDivider}>
            <Link href="/main">
              <Image
                src={MenteeMentor}
                width={91}
                height={44}
                alt="MenteeMentor"
              />
            </Link>
            <span className={styles.divider} />
          </div>
          <div className={styles.routerItemsRender}>
            {DHeaderRouterItems.map((headerRouteItem) => (
              <HeaderRouteItem
                key={headerRouteItem.id}
                routerItem={headerRouteItem}
              />
            ))}
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.currencyWrap}>
            <Tooltip title="Coins are used in the store">
              <button className={styles.currency}>
                <Image src={Coins} width={20} height={20} alt="Coins" />
                120
              </button>
            </Tooltip>
            <Tooltip title="Tickets are used to create questions">
              <button className={styles.currency}>
                <Image src={Tickets} width={24} height={24} alt="Tickets" />2
              </button>
            </Tooltip>
          </div>
          <span className={styles.divider} />
          <Link href="/profile" className={styles.profile}>
            <Image
              className={styles.userAvatar}
              src={Avatar}
              width={48}
              height={48}
              alt="User avatar"
            />
            <div className={styles.userWrap}>
              <h4 className={styles.h4}>Dmitriy Stepanov</h4>
              <h5 className={styles.h5}>Premium</h5>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};
