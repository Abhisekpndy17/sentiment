import Image from "next/image";
import style from "../styles/Home.module.css";

const Info = () => {
  return (
    <div className={style.container}>
      <div>
        <h2 className={style.title}>
          Sentiment <span>Analyzer</span>
        </h2>
        <p className={style.description}>
          Sentiment analysis is contextual mining of text which identifies and
          extracts subjective information in source material, and helping a
          business to understand the social sentiment of their brand, product or
          service while monitoring online conversations. However, analysis of
          social media streams is usually restricted to just basic sentiment
          analysis and count based metrics.
          <br/> This is akin to just scratching the
          surface and missing out on those high value insights that are waiting
          to be discovered. So what should a brand do to capture that low
          hanging fruit? With the recent advances in deep learning, the ability
          of algorithms to analyse text has improved considerably. Creative use
          of advanced artificial intelligence techniques can be an effective
          tool for doing in-depth research.
          <br/> We believe it is important to
          classify incoming customer conversation about a brand based on
          following lines: Key aspects of a brand’s product and service that
          customers care about. Users’ underlying intentions and reactions
          concerning those aspects. These basic concepts when used in
          combination, become a very important tool for analyzing millions of
          brand conversations with human level accuracy. In the post, we take
          the example of Uber and demonstrate how this works. Read On!
        </p>
      </div>
    </div>
  );
};

export default Info;
