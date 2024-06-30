import Image from "next/image";
import styles from "./ui.module.scss";
import Photo from "../../../../../public/assets/avatars/avatar.png";
import Coin from "../../../../../public/icons/price/coins-purple.svg";
import Ticket from "../../../../../public/icons/price/ticket-blue.svg";
import Clock from "../../../../../public/icons/price/clock-grey.svg";

export const QuestionCard = () => {
  return (
    <>
      <article className={styles.questionCard}>
        <div className={styles.left}>
          <div className={styles.userProfile}>
            <Image
              className={styles.userPhoto}
              src={Photo}
              width={48}
              height={48}
              alt="Photo"
            />
            <span className={styles.user}>
              <h3 className={styles.h3}>Дмитрий Степанов</h3>
              <span className={styles.userStatus}>
                <span className={styles.dot} />
                <h4 className={styles.h4}>Online</h4>
              </span>
            </span>
          </div>
          <h2 className={styles.h2}>
            Вычислить сумму первых N членов ряда, значения N и x ввести с
            клавиатуры. Помогите, пожалуйста. С++
          </h2>
          <p className={styles.p}>54 минуты назад, в “Программирование”</p>
        </div>
        <div className={styles.right}>
          <div className={styles.price}>
            <span className={styles.price__item}>
              <Image src={Coin} width={20} height={20} alt="Coin" />
              120
            </span>
            <span className={styles.divider} />
            <span className={styles.price__item}>
              <Image src={Ticket} width={20} height={20} alt="Coin" />
              120
            </span>
            <span className={styles.divider} />
            <span className={styles.price__item}>
              <Image src={Clock} width={20} height={20} alt="Coin" />
              120
            </span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.plane}>Запланировать ответ</button>
            <button className={styles.answerNow}>Ответить сейчас</button>
          </div>
        </div>
      </article>
    </>
  );
};
