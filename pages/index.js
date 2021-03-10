import Head from "next/head";
import styles from "../styles/Home.module.css";
import Sentiment from "sentiment";
import { useState } from "react";

const sentiment = new Sentiment();

export default function Home() {
  const [score, setScore] = useState("");
  const [genralSentiment, setGenralSentiment] = useState("");
  const [token, setToken] = useState("");
  const [positiveWords, setPositiveWords] = useState([]);
  const [negativeWords, setNegativeWords] = useState([]);

  const changeHappen = (e) => {
    const result = sentiment.analyze(e.target.value);

    setScore(result.score);
    if (result.score < 0) {
      setGenralSentiment("Negative");
    } else if (result.score > 0) {
      setGenralSentiment("Positive");
    } else {
      setGenralSentiment("Neutral");
    }
    setToken(result.tokens.length);
    setPositiveWords(result.positive);
    setNegativeWords(result.negative);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello nextjs</h1>
 
      <textarea name="text" cols="30" rows="10" onChange={changeHappen} />
      <div className={styles.grid}>
        <div className={styles.card}>
          <p> Sentiment Score : {score}</p>
          <p>The Length of token : {token}</p>
          <p>Genral Sentiment : {genralSentiment}</p>
          
          </div>
          <div className={styles.card}>
          <h3>Positive words</h3>
          {positiveWords.map((positive, index) => (
            <p className={styles.textmuted} key={index}>
              {positive} 
            </p>
          ))}
          </div>
          <div className={styles.card}>
          <h3>Negative Words</h3>
          {negativeWords.map((negative, index) => (
            <p className={styles.textmuted} key={index}>{negative}</p>
            
          ))}
          </div>
          </div>
    </div>
  );
}
