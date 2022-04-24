import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Title from "./Title";

export default class News extends Component {
  articales = [
    {
      source: {
        id: null,
        name: "Detroit Free Press",
      },
      author: "Clara Hendrickson, Detroit Free Press",
      title:
        "Mich. GOP supports Trump-backed candidates for SOS, AG - Detroit Free Press",
      description:
        "The Michigan GOP formally endorsed  Kristina Karamo for secretary of state and Matt DePerno for attorney general.",
      url: "https://www.freep.com/story/news/politics/2022/04/23/gop-endorsement-convention-results-ag-sos/9483378002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/04/23/PDTF/f877a017-32ac-4a67-9165-7b2123de216f-04232022_gopconvention-65.jpeg?auto=webp&crop=2399,1350,x0,y0&format=pjpg&width=1200",
      publishedAt: "2022-04-24T02:03:45Z",
      content:
        "GRAND RAPIDS – The Michigan GOP party faithful Saturday supported two political outsidersbacked by former President Donald Trump to serve as the state's next chief elections officer and top law enfor… [+15237 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Robert D. McFadden",
      title:
        "Orrin Hatch, Longtime Senator Who Championed Right-Wing Causes, Dies at 88 - The New York Times",
      description:
        "A Utah Republican, he overcame poverty to become a powerful force in Washington, helping to build a conservative majority on the Supreme Court.",
      url: "https://www.nytimes.com/2022/04/23/us/politics/orrin-hatch-dead.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/04/23/multimedia/23hatch-1/merlin_141106002_977fb3dd-ab65-4346-9084-5445089442c7-facebookJumbo.jpg",
      publishedAt: "2022-04-24T01:50:29Z",
      content:
        "Similarly, after his brief run for the Republican presidential nomination in 2000, he conceded the race to the eventual winner, George W. Bush, with centrist magnanimity. I like the fact that he can … [+2471 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "John Bonifield and Emma Tucker, CNN",
      title:
        "1 death, 17 liver transplants in multi-country outbreak of hepatitis in children, WHO says - CNN",
      description:
        "At least 169 cases of acute hepatitis in children aged one month to 16 years old have been identified in an outbreak that now involves 11 countries, the World Health Organization (WHO) said on Saturday.",
      url: "https://www.cnn.com/2022/04/23/health/multi-country-outbreak-of-hepatitis-in-children/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220423194846-multi-country-outbreak-of-hepatitis-in-children-super-tease.jpg",
      publishedAt: "2022-04-24T01:03:00Z",
      content:
        "(CNN)At least 169 cases of acute hepatitis in children aged one month to 16 years old have been identified in an outbreak that now involves 11 countries, the World Health Organization (WHO) said on S… [+2604 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: null,
      title: "Russia-Ukraine Latest News: April 23, 2022 - Bloomberg",
      description: null,
      url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=f1d4c235-c379-11ec-9617-4742695a6e61&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wNC0yMy91a3JhaW5lLWxhdGVzdC16ZWxlbnNraXktYXNrcy13aG8tcy1uZXh0LWFmdGVyLWdlbmVyYWwtcy1yZW1hcms=",
      urlToImage: null,
      publishedAt: "2022-04-24T00:36:00Z",
      content:
        "To continue, please click the box below to let us know you're not a robot.",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Christine Idzelis",
      title:
        "What's next for stock market as Federal Reserve moves toward 'peak hawkishness' - MarketWatch",
      description:
        "‘Sadly, implementation of a dual-pronged quantitative tightening plan requires a level of finesse that the Fed is not known for,’ says Osterweis Capital Management",
      url: "https://www.marketwatch.com/story/peak-hawkishness-investors-watch-for-next-inflation-gauge-after-stocks-were-rattled-by-fed-suggesting-large-interest-rate-rises-ahead-11650718235",
      urlToImage: "https://images.mktw.net/im-529726/social",
      publishedAt: "2022-04-24T00:10:00Z",
      content:
        "Investors will watch for another gauge of U.S. inflation in the week ahead after the stock market was rattled by the Federal Reserve ramping up its hawkish tone and suggesting large interest rate hik… [+8172 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Mike Florio",
      title:
        "Decent crowd shows up for USFL’s Saturday night Stallions-Gamblers game - NBC Sports",
      description:
        "The Birmingham Stallions are technically the road team on Saturday night against the Houston Gamblers. But with every game being played in Birmingham, every Stallions game is a home game.And the fans are far more likely to show up for Stallions games.A week a…",
      url: "https://profootballtalk.nbcsports.com/2022/04/23/decent-crowd-shows-up-for-usfls-saturday-night-stallions-gamblers-game/",
      urlToImage:
        "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/04/GettyImages-1393222559-e1650758518800.jpg",
      publishedAt: "2022-04-24T00:04:00Z",
      content:
        "The Birmingham Stallions are technically the road team on Saturday night against the Houston Gamblers. But with every game being played in Birmingham, every Stallions game is a home game.\r\nAnd the fa… [+868 chars]",
    },
    {
      source: {
        id: null,
        name: "Sky.com",
      },
      author: "Connor Sephton",
      title:
        "Ebola: New outbreak declared as officials warn 'time is not on our side' - Sky News",
      description: "",
      url: "https://news.sky.com/story/ebola-new-outbreak-declared-as-officials-warn-time-is-not-on-our-side-12597624",
      urlToImage:
        "https://e3.365dm.com/22/04/1600x900/skynews-ebola-congo_5749560.jpg?20220423232035",
      publishedAt: "2022-04-24T00:01:15Z",
      content:
        "An outbreak of Ebola has been declared in the Democratic Republic of the Congo - four months after the last one ended.\r\nA case was confirmed in a 31-year-old man on 5 April. He was admitted to an Ebo… [+1320 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Paul Davenport",
      title:
        "Fires hit Southwest, New Mexico's season 'dangerously early' - The Associated Press - en Español",
      description:
        "New Mexico faces a long and potentially devastating wildfire season, Gov. Michelle Lujan Grisham said Saturday, as Southwestern wildfires cause destruction and force people from their homes.  Hundreds of structures were lost in a growing number of wind-driven…",
      url: "https://apnews.com/article/wildfires-environment-new-mexico-arizona-colorado-54e9063bee22b3b50d201e6f022758e1",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/11625f1d40014cc7937e74d94500b94c/3000.jpeg",
      publishedAt: "2022-04-23T23:48:45Z",
      content:
        "New Mexico faces a long and potentially devastating wildfire season, Gov. Michelle Lujan Grisham said Saturday, as Southwestern wildfires cause destruction and force people from their homes. \r\nHundre… [+5146 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Associated Press",
      title:
        "County grants approval for Amazon's helix-shaped HQ tower - Fox Business",
      description:
        "On Saturday the Arlington County Board gave approval for Amazon to build a helix-shaped tower as the centerpiece for its second headquarters based outside of Washington, D.C.",
      url: "https://www.foxbusiness.com/technology/county-grants-approval-amazon-helix-shaped-hq-tower",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/0/0/AP22113624115726.jpg?ve=1&tl=1",
      publishedAt: "2022-04-23T23:44:29Z",
      content:
        "The Arlington County Board gave unanimous approval Saturday to Amazon's plans to build a unique, helix-shaped tower as the centerpiece of its emerging second headquarters in northern Virginia.\r\nAmazo… [+1770 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Adam Conway",
      title:
        "Real-world images of Google’s Pixel Watch may have just leaked - XDA Developers",
      description:
        "Real-world images of Google's Pixel Watch may have just leaked, and it might just be a complete look at the company's upcoming smartwatch.",
      url: "https://www.xda-developers.com/real-world-images-google-pixel-watch-leak/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/04/Google-Pixel-Watch-Real-Pics-Leak-1.jpg",
      publishedAt: "2022-04-23T23:41:00Z",
      content:
        "Shortly after the first image of the Pixel Watch leaked, it seems that we’re getting a complete look at the full device for the first time. According to a report from Android Central, one of the publ… [+1948 chars]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Abbey White",
      title:
        "‘American Gigolo’ Showrunner David Hollander Let Go by Showtime - Hollywood Reporter",
      description:
        "David Hollander, set to helm Showtime’s reboot of American Gigolo, has been fired by the network, The Hollywood Reporter has confirmed. “David Hollander is no longer on the drama series American Gigolo and Paramount Television Studios no longer has a producin…",
      url: "https://www.hollywoodreporter.com/tv/tv-news/american-gigolo-showrunner-david-hollander-fired-showtime-1235134415/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2022/04/GettyImages-1043396556.jpg?w=1024",
      publishedAt: "2022-04-23T23:40:49Z",
      content:
        "David Hollander, set to helm Showtime’s reboot of American Gigolo, has been fired by the network, The Hollywood Reporter has confirmed.\r\n“David Hollander is no longer on the drama series American Gig… [+2399 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author:
        'By <a href="/profiles/jessie-yeung">Jessie Yeung</a>, <a href="/profiles/brad-lendon">Brad Lendon</a>, Amy Woodyatt, Sana Noor Haq, <a href="/profiles/emma-tucker">Emma Tucker</a>, <a href="/profiles/angela-dewan">Angela Dewan</a>, <a href="/profiles/adrienne-vogt">Adrienne Vogt</a> and <a href="/profiles/joe-ruiz">Joe Ruiz</a>, CNN',
      title: "Live updates: Russia's war in Ukraine - CNN",
      description:
        'Ukrainian officials and satellite images point to evidence of mass graves outside the besieged city of Mariupol as Russian President Vladimir Putin claimed its "liberation." Follow here for live updates.',
      url: "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-04-23-22/index.html",
      urlToImage:
        "https://dynaimage.cdn.cnn.com/cnn/digital-images/org/a6f6d64c-5899-440f-93d9-62320077db85.jpg",
      publishedAt: "2022-04-23T23:15:00Z",
      content:
        "Russian opposition leader. Anti-corruption campaigner. Assassination attempt survivor. Prisoner.\r\nAlexey Navalny's crusade against the Kremlin has brought him many labels.\r\nAnd with the eyes of the w… [+4991 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "Brent Brookhouse",
      title:
        "Tyson Fury vs. Dillian Whyte fight results, highlights: 'Gypsy King' thrills with uppercut knockout to retain - CBS Sports",
      description:
        "Fury landed a picturesque right hand that sent Whyte thudding to the floor for the finish inside Wembley Stadium",
      url: "https://www.cbssports.com/boxing/news/tyson-fury-vs-dillian-whyte-fight-results-highlights-gypsy-king-thrills-with-uppercut-knockout-to-retain/live/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/04/23/61b5cb29-8516-438b-932e-cdf63650fb91/thumbnail/1200x675/c697109ea42aad396b943294c917767f/tyson-fury-whyte-ko-punch.png",
      publishedAt: "2022-04-23T23:14:01Z",
      content:
        'Dillian Whyte waited years as the "next man up" for the WBC heavyweight championship. Whyte\'s opportunity finally came on Saturday night in London and the dream opportunity turned into a nightmare as… [+3508 chars]',
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Aaron Pellish, CNN",
      title:
        "Court-martial results in first conviction of general officer in Air Force history - CNN",
      description:
        "A US Air Force general officer was found guilty of abusive sexual contact in military court in Ohio on Saturday, marking the first-ever court-martial trial and conviction of a general officer in the history of the military branch, the Air Force said in a stat…",
      url: "https://www.cnn.com/2022/04/23/politics/air-force-general-officer-conviction/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220423143453-william-t-cooley-air-force-super-tease.jpg",
      publishedAt: "2022-04-23T23:08:00Z",
      content:
        "Washington, DC (CNN)A US Air Force general officer was found guilty of abusive sexual contact in military court in Ohio on Saturday, marking the first-ever court-martial trial and conviction of a gen… [+1389 chars]",
    },
    {
      source: {
        id: "marca",
        name: "Marca",
      },
      author: "LW",
      title:
        "Amber Heard caught in a lie after makeup brand exposes her in Johnny Depp trial - Marca English",
      description:
        "Amber Heard has seemingly been caught in a lie after her lawyer Elaine Bredehoft claimed the actress used a makeup product by Milani Cosmetics to cover up her bruises that Johnny D",
      url: "https://www.marca.com/en/lifestyle/celebrities/2022/04/24/62647ff022601d40108b45ae.html",
      urlToImage:
        "https://phantom-marca.unidadeditorial.es/f0f874985ced41acaf363adee8f104bf/resize/1200/f/jpg/assets/multimedia/imagenes/2022/04/24/16507543626402.jpg",
      publishedAt: "2022-04-23T23:07:39Z",
      content:
        "Amber Heard has seemingly been caught in a lie after her lawyer Elaine Bredehoft claimed the actress used a makeup product by Milani Cosmetics to cover up her bruises that Johnny Depp allegedly gave … [+1105 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Emma Roth",
      title:
        "Apple App Store appears to be widely removing outdated apps - The Verge",
      description:
        "Apple is warning a number of developers that their outdated apps could be at risk of deletion if they fail to update them within 30 days.",
      url: "https://www.theverge.com/2022/4/23/23038870/apple-app-store-widely-remove-outdated-apps-developers",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/qWqxfJ6iajy_bC-tfxO0knFIOJM=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22817754/acastro_210831_1777_0003.jpg",
      publishedAt: "2022-04-23T22:44:31Z",
      content:
        "Wiping apps that havent been updated in a significant amount of time\r\nIllustration by Alex Castro / The Verge\r\nApple may be cracking down on apps that no longer receive updates. In a screenshotted em… [+3866 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Tyler Kepner",
      title:
        "Miguel Cabrera of Detroit Tigers Reaches 3,000 Hits - The New York Times",
      description:
        "Cabrera’s first manager recalls his star pupil always being in the middle of things. On Saturday, Cabrera collected hits 3,000 and 3,001 of his 20-year career.",
      url: "https://www.nytimes.com/2022/04/23/sports/baseball/miguel-cabrera-3000-hits.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/04/23/multimedia/23kepner-cabrera-sub2/23kepner-cabrera-sub2-facebookJumbo.jpg",
      publishedAt: "2022-04-23T22:19:48Z",
      content:
        "Back in 2003, the first hit of Cabreras career had been fitting: a two-run, game-winning home run in the bottom of the 11th inning on June 20, 2003, in Miami Gardens, Fla. He had hit 502 homers enter… [+1355 chars]",
    },
    {
      source: {
        id: null,
        name: "Push Square",
      },
      author: "Sammy Barker",
      title:
        "Ubisoft Announces PS5, PS4 Multiplayer Game Project Q, Not a Battle Royale and No NFTs - Push Square",
      description: "French publisher promises FUN",
      url: "https://www.pushsquare.com/news/2022/04/ubisoft-announces-ps5-ps4-multiplayer-game-project-q-not-a-battle-royale-and-no-nfts",
      urlToImage: "https://images.pushsquare.com/2889f2adc95e1/1280x720.jpg",
      publishedAt: "2022-04-23T21:25:30Z",
      content:
        "After a leak earlier this week which, frankly, flew under the radar: a team shooter being in development at Ubisoft is hardly mind-blowing news the French publisher has revealed Project Q, a team bat… [+1145 chars]",
    },
    {
      source: {
        id: null,
        name: "MLB Trade Rumors",
      },
      author: "Mark Polishuk",
      title:
        "Eloy Jimenez Leaves Game With Hamstring Injury - MLB Trade Rumors",
      description:
        "White Sox outfielder Eloy Jimenez left today's game with what the team described as right hamstring soreness.  While trying to &hellip;",
      url: "https://www.mlbtraderumors.com/2022/04/eloy-jimenez-leaves-game-with-hamstring-injury.html",
      urlToImage:
        "https://cdn.mlbtraderumors.com/files/2021/09/eloyjimenez-2021-1024x751.jpg",
      publishedAt: "2022-04-23T21:21:27Z",
      content:
        "White Sox outfielder Eloy Jimenez left today’s game with what the team described as right hamstring soreness.  While trying to beat out a grounder in the second inning, Jimenez seemingly took a bad s… [+1506 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Sophie Kasakove, Eduardo Medina",
      title:
        "Charges Dropped Against Pamela Moses, Who Was Jailed Over Voter Fraud - The New York Times",
      description:
        "Pamela Moses, who was sentenced in January to six years in a case that outraged voting rights supporters, will not face a new trial, a district attorney said.",
      url: "https://www.nytimes.com/2022/04/23/us/pamela-moses-voter-fraud-charges-dropped.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/04/23/us/23fraud-reversal1/23fraud-reversal1-facebookJumbo.jpg",
      publishedAt: "2022-04-23T20:08:46Z",
      content:
        "These prosecutions also unfairly blame individuals for failing to navigate a voter restoration process that is unclear, she said, adding that state officials are responsible for putting adequate proc… [+1682 chars]",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      articales: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b3c616a339df4825bf748b4074fa4261&page=${this.state.page}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articales: [...this.state.articales, ...parseData["articles"]],
      loading: false,
    });
  }

  fetchMoreData() {
    this.setState({
      page: this.state.page + 1,
    });
    this.fetchData();
  }
  render() {
    return (
      <div className="container">
        <Title title="Top Headlines" />
        <InfiniteScroll
          dataLength={this.state.articales.length}
          next={this.fetchMoreData.bind(this)} //To put endMessage and loader to the top.
          loader={this.state.loading && <h4>Loading...</h4>}
          hasMore={true}
          children={this.state.articales}
        >
          <div className="row">
            {this.state.articales &&
              this.state.articales.map((artical, index) => {
                return (
                  <div className="col-md-4 my-3" key={index}>
                    <NewsItem
                      title={artical?.title}
                      desc={artical?.description}
                      imageUrl={artical?.urlToImage}
                      writer={artical?.author}
                      newsUrl={artical?.url}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
