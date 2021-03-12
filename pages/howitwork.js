import style from "../styles/Home.module.css";
import Image from 'next/image'


const howitwork = () => {
  return (
    <div className={style.container}>
      <div className={style.hero}></div>
      <div className={style.main}>
        <div className={style.title}>
          What is <span>Sentiment Analysis</span> ?
        </div>
        <div className={style.description}>
          <p>
            Sentiment Analysis is the process of determining whether a piece of
            writing is positive, negative or neutral. A sentiment analysis
            system for text analysis combines natural language processing (NLP)
            and machine learning techniques to assign weighted sentiment scores
            to the entities, topics, themes and categories within a sentence or
            phrase.
          </p>
          <p>
            Sentiment analysis helps data analysts within large enterprises
            gauge public opinion, conduct nuanced market research, monitor brand
            and product reputation, and understand customer experiences. In
            addition, data analytics companies often integrate third-party
            sentiment analysis APIs into their own customer experience
            management, social media monitoring, or workforce analytics
            platform, in order to deliver useful insights to their own
            customers.
          </p>
          <div className={style.main}>
          <h2>
            Basic sentiment analysis of text documents follows a straightforword
            process:
          </h2>
          <ol>
            <li>
              Break each text document down into its component parts (sentences,
              phrases, tokens and parts of speech)
            </li>
            <li>Identify each sentiment-bearing phrase and component</li>
            <li>
              Assign a sentiment score to each phrase and component (-1 to +1)
            </li>
            <li>
              Optional: Combine scores for multi-layered sentiment analysis
            </li>
          </ol>
          </div>
        </div>
        <Image src='/img2.jpg' alt="image" height={700} width={800} />
      </div>
    </div>
  );
};

export default howitwork;
