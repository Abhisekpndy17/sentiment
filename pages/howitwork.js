import Info from "../components/Info";
import style from "../styles/How.module.css";

const howitwork = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        What is <span>Sentiment Analysis</span> ?
      </h1>
      <p className={style.description}>
        Sentiment analysis (also known as opinion mining or emotion AI) refers
        to the use of natural language processing, text analysis, computational
        linguistics, and biometrics to systematically identify, extract,
        quantify, and study affective states and subjective information.
        Sentiment analysis is widely applied to voice of the customer materials
        such as reviews and survey responses, online and social media, and
        healthcare materials for applications that range from marketing to
        customer service to clinical medicine.
      </p>
      <br />
      <Info />
      <hr/>
      <div className={style.hero}>
        <a href="https://towardsdatascience.com/sentiment-analysis-concept-analysis-and-applications-6c94d6f58c17">Click here for more from towardsdatascience.com</a>
      <a href="https://en.wikipedia.org/wiki/Sentiment_analysis">Click here for more about Sentiment from wikipedia</a>
    </div>
    </div>
  );
};

export default howitwork;
