import Image from "next/image";
import style from "../styles/Home.module.css";

const Info = () => {
  return (
    <div className={style.main}>
      <p className={style.code}>
        Sentiment Analysis is the most common text classification tool that
        analyses an incoming message and tells whether the underlying sentiment
        is positive, negative our neutral. You can input a sentence of your
        choice
      </p>
    </div>
  );
};

export default Info;
