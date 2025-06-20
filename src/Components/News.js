import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Financial Times",
      },
      author: "Sarah Provan, Philip Georgiadis, William Sandlund",
      title:
        "Israel-Iran latest: Vladimir Putin says solution to conflict is up to Iran and Israel - Financial Times",
      description: null,
      url: "https://www.ft.com/content/f25e90af-f621-4583-b826-2aff1f53dc0f",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F89bd7bf2-a559-40eb-9c11-d383f0fa5e53.jpg?source=next-barrier-page",
      publishedAt: "2025-06-19T05:13:57Z",
      content:
        "Complete digital access to quality analysis and expert insights, complemented with our award-winning Weekend Print edition.\r\n<ul><li></li>Everything in Print<li></li>Weekday Print Edition<li></li>FT … [+202 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Mitch Fink",
      title:
        "Meet Mark Walter, the billionaire who agreed to buy Lakers in historic $10B deal - New York Post",
      description:
        "After shelling out a record-breaking sum of approximately $10 billion, Mark Walter is soon to be the new owner of the Lakers.",
      url: "https://nypost.com/2025/06/18/sports/meet-mark-walter-the-billionaire-who-agreed-to-buy-the-lakers/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2025/06/newspress-collage-7vjxg1pco-1750303605602.jpg?quality=75&strip=all&1750289275&w=1024",
      publishedAt: "2025-06-19T03:40:00Z",
      content:
        "After shelling out a record-breaking sum of approximately $10 billion, Mark Walter is soon to be the new owner of the Lakers.\r\nThe 65-year-old Walter, a businessman with a net worth of $12.5 billion,… [+2661 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: null,
      title:
        "US resumes visas for foreign students but demands access to social media accounts - AP News",
      description:
        "The U.S. State Department says it’s restarting the suspended process for foreigners applying for student visas but says all applicants will now be required to unlock their social media accounts for review. The department says consular officers will be on the …",
      url: "https://apnews.com/article/student-visas-trump-social-media-6632a2c585245edcd6a63594345dd8c7",
      urlToImage:
        "https://dims.apnews.com/dims4/default/c4db25b/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa8%2Fcb%2F370ade1d2a78a955c340e12c247e%2Faba8f400e5564b35a7391e5d1f897ca7",
      publishedAt: "2025-06-19T03:22:00Z",
      content:
        "WASHINGTON (AP) The U.S. State Department said Wednesday it is restarting the suspended process for foreigners applying for student visas but all applicants will now be required to unlock their socia… [+4588 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Alicia Victoria Lozano",
      title:
        "Salt Lake City volunteer's account of deadly shooting questioned after new video emerges - NBC News",
      description:
        "A new picture of the Salt Lake City protester arrested in a deadly “No Kings” shooting is emerging, and it is different from the one safety volunteers at the event provided to officials.",
      url: "https://www.nbcnews.com/news/us-news/salt-lake-city-volunteers-account-deadly-shooting-questioned-new-video-rcna213871",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-06/250618-Salt-Lake-City-memorial-ew-656p-6c76ec.jpg",
      publishedAt: "2025-06-19T02:21:00Z",
      content:
        "A new picture of the Salt Lake City protester arrested in a deadly No Kings shooting is emerging, and it is different from the one safety volunteers at the event provided to officials. \r\nArturo Gambo… [+4758 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Texas Instruments to make 'historic' $60bn US chip investment - BBC",
      description:
        "The announcement comes as Trump pressures big technology firms to increase manufacturing in America.",
      url: "https://www.bbc.com/news/articles/c5yl0877zzmo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/097b/live/cfefd460-4cb8-11f0-ba4c-7f16eba7c93a.jpg",
      publishedAt: "2025-06-19T02:19:57Z",
      content:
        "Computer chip giant Texas Instruments (TI) will invest more than $60bn (£44.74bn) in the US, as President Donald Trump pressures big technology firms to increase manufacturing in the country.\r\nThe co… [+1853 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Lim Hui Jie",
      title:
        "Israeli president denies pursuing regime change in Iran — goal is to 'remove' nuclear program - CNBC",
      description:
        'Herzog accused Teheran of "cheating," saying that the country was "rushing to the bomb."',
      url: "https://www.cnbc.com/2025/06/19/israeli-president-denies-pursuing-regime-change-in-iran.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/108161405-1750292840488-gettyimages-2214121401-_k_12139-ss.jpeg?v=1750292861&w=1920&h=1080",
      publishedAt: "2025-06-19T02:13:00Z",
      content:
        "Israeli President Isaac Herzog said Wednesday that his country was not pursuing regime change in Iran, and its attack on Tehran was aimed at eliminating its nuclear capabilities.\r\nSpeaking to CNBC's … [+2107 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "Jasper Goodman",
      title:
        "Trump calls on House GOP to quickly adopt ‘clean’ version of Senate-passed crypto bill - Politico",
      description:
        "House Republicans are weighing how much to change the Senate bill and whether to include it in a larger package of crypto legislation.",
      url: "https://www.politico.com/live-updates/2025/06/18/congress/trump-calls-on-house-gop-to-quickly-adopt-clean-version-of-senate-passed-crypto-bill-00414161",
      urlToImage:
        "https://www.politico.com/dims4/default/6b92a4c/2147483647/resize/1200x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F1b%2F9b%2F629a6918428bad70205db67785f1%2Ftrump-crypto-dinner-47871.jpg",
      publishedAt: "2025-06-19T01:38:29Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "The Spun",
      },
      author: "Andrew Holleran",
      title:
        "There's Growing Push For Caitlin Clark To Leave The WNBA - Yahoo Sports",
      description:
        "There's a growing push for Caitlin Clark to \"leave\" the WNBA following Tuesday night's incident. Clark, the No. 1 overall pick in the 2024 WNBA Draft, was...",
      url: "https://thespun.com/wnba/theres-growing-push-for-caitlin-clark-to-leave-the-wnba",
      urlToImage:
        "https://media.zenfs.com/en/the_spun_articles_751/bf4fd19b1e88153ebc5cecfb1ed6814c",
      publishedAt: "2025-06-19T01:36:12Z",
      content:
        "There's Growing Push For Caitlin Clark To Leave The WNBA originally appeared on The Spun.\r\nThere's a growing push for Caitlin Clark to \"leave\" the WNBA following Tuesday night's incident.\r\nClark, the… [+2651 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5google.com",
      },
      author: "Ben Schoon",
      title:
        "Report: Google's switch to TSMC for Pixel 10 chip was a 'shock' and wake-up call for Samsung - 9to5Google",
      description:
        "According to a report, Google's shift to TSMC for the Pixel 10's Tensor G5 chip was a \"shock\" to Samsung and is serving as a wake-up call.",
      url: "http://9to5google.com/2025/06/18/google-tsmc-pixel-10-chip-samsung-shock-report/",
      urlToImage:
        "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/08/google-tensor-g4-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2025-06-19T01:10:00Z",
      content:
        "According to a new report, Google’s switch from Samsung’s foundry to TSMC for the Tensor G5 chip in the upcoming Pixel 10 series was a “shock” for Samsung, and is serving as a wake-up call for the co… [+1912 chars]",
    },
    {
      source: {
        id: null,
        name: "Boston Herald",
      },
      author: "Flint McColgan",
      title:
        "Not Guilty: Jury acquits Karen Read on murder, manslaughter charges, guilty on OUI - Boston Herald",
      description:
        "Karen Read wept and the crowd outside burst into cheers after a jury cleared the 45-year-old of every count against her except for one — drunken driving — in a grueling retrial for the …",
      url: "https://www.bostonherald.com/2025/06/18/karen-read-found-not-guilty-on-murder-manslaughter-guilty-on-oui/",
      urlToImage:
        "https://www.bostonherald.com/wp-content/uploads/2025/06/AP25169728202659.jpg?w=1024&h=739",
      publishedAt: "2025-06-19T00:45:00Z",
      content:
        "Karen Read wept and the crowd outside burst into cheers after a jury cleared the 45-year-old of every count against her except for one — drunken driving — in a grueling retrial for the death of her B… [+4845 chars]",
    },
    {
      source: {
        id: "axios",
        name: "Axios",
      },
      author: "Jason Lalljee",
      title:
        "The U.S. could join Israel's war with Iran to deploy this 30,000-pound bomb - Axios",
      description:
        "The U.S. is in possession of a 30,000lb bomb designed to take out a bunker like Iran's Fordow facility.",
      url: "https://www.axios.com/2025/06/19/israel-attacks-iran-us-bomb",
      urlToImage:
        "https://images.axios.com/UNda32WGW5_wrYtWqdU2Y4XoQYs=/0x0:2400x1350/1366x768/2025/06/18/1750281559639.png",
      publishedAt: "2025-06-19T00:08:16Z",
      content:
        'Zoom in: The bomb in question is 30,000 pounds and precision-guided: the GBU-57 E/B Massive Ordnance Penetrator, also known as the "MOP."\r\n<ul><li>In 2015, the U.S. Air Force said that the MOP was "d… [+2492 chars]',
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Gene Maddaus",
      title:
        "Justin Baldoni Can Seek Messages Between Taylor Swift and Blake Lively, Judge Rules - Variety",
      description:
        "Justin Baldoni can obtain messages between Taylor Swift and Blake Lively, a judge ruled Wednesday.",
      url: "https://variety.com/2025/film/news/justin-baldoni-seek-taylor-swift-blake-lively-judge-rules-1236435847/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2025/01/swift-baldoni-lively-split.jpg?w=1000&h=563&crop=1",
      publishedAt: "2025-06-19T00:05:00Z",
      content:
        "A judge ruled Wednesday that Justin Baldoni can obtain messages between Blake Lively and Taylor Swift that pertain to “It Ends With Us” and the legal melee between the film’s co-stars.\r\nLively had as… [+1636 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5google.com",
      },
      author: "Abner Li",
      title:
        "Google Messages rolling out Delete for everyone, Snooze notifications, & more - 9to5Google",
      description:
        "Google Messages is widely rolling out features like “Snooze notifications” and “Delete for everyone” to the stable channel.",
      url: "http://9to5google.com/2025/06/18/google-messages-delete-everyone-more/",
      urlToImage:
        "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/06/Google-Messages-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2025-06-18T23:02:00Z",
      content:
        "Following last weeks announcement, Google Messages is widely rolling out features like Snooze notifications and Delete for everyone to the stable channel.\r\nFrom the apps homepage, long-pressing on a … [+1162 chars]",
    },
    {
      source: {
        id: null,
        name: "BaltimoreRavens.com",
      },
      author: null,
      title:
        "Marlon Humphrey, Kyle Hamilton React to Ravens Adding Jaire Alexander | News & Notes - Baltimore Ravens",
      description:
        "The Ravens have a plan to help Jaire Alexander avoid injuries. John Harbaugh gives an update on Emery Jones Jr. Baltimore’s dates for joint practices with the Colts and Commanders have been announced.",
      url: "https://www.baltimoreravens.com/news/marlon-humphrey-kyle-hamilton-john-harbaugh-reaction-jaire-alexander",
      urlToImage:
        "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/ravens/tvjqdg3mdwnnr02sfjm6",
      publishedAt: "2025-06-18T22:50:40Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Aaron Couch",
      title:
        "Danny Boyle Talks ‘28 Years Later’ Trilogy Plan, Turning Down ‘Alien’ and the Time ‘127 Hours’ Made Pixar Animators Faint - The Hollywood Reporter",
      description:
        "In a career-spanning interview, the Oscar-winning auteur also reflects on Ewan McGregor shaving his \"incredible hair\" before being cast in 'Trainspotting,' Cillian Murphy landing '28 Days Later' thanks to a single sentence, and why Bond isn't in his future: \"…",
      url: "http://www.hollywoodreporter.com/movies/movie-features/danny-boyle-talks-28-years-later-trilogy-plan-1236293456/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2025/06/DF-08687-e1750190889360.jpg?w=1440&h=810&crop=1",
      publishedAt: "2025-06-18T21:46:04Z",
      content:
        "On Danny Boyle’s 11th birthday, he and his twin sister were given a special treat, when their parents took them to the movies for the first time. Boyle and his father saw the Henry Fonda war epic Bat… [+14327 chars]",
    },
    {
      source: {
        id: null,
        name: "Live Science",
      },
      author: "Jane Palmer",
      title:
        "Just 1 dose of magic mushroom compound eases depression for at least 5 years in most patients, small study suggests - Live Science",
      description:
        "Half a decade after receiving a psychedelic treatment for depression, two-thirds of patients in a new study remained in remission.",
      url: "https://www.livescience.com/health/mind/one-psychedelic-psilocybin-dose-eases-depression-for-years-study-reveals",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/zpjpV9CguFXkFSbyCNDf5n.jpg",
      publishedAt: "2025-06-18T21:31:45Z",
      content:
        "DENVER—Psilocybin\r\n, the main psychoactive ingredient in magic mushrooms, can alleviate depression for at least five years after a single dose, a new study finds.\r\nThe research, presented June 18 at … [+4959 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "Giselle Ruhiyyih Ewing",
      title:
        "MAGA allies deride attacking Iran — but won’t criticize Trump directly - Politico",
      description:
        '“The Israelis have to finish what they started. They started this," says Steve Bannon.',
      url: "https://www.politico.com/news/2025/06/18/trump-iran-conservatives-maga-00413634",
      urlToImage:
        "https://static.politico.com/72/a0/81f4604a44f98e5378bb436d23c5/young-republican-gala-new-york-88477.jpg",
      publishedAt: "2025-06-18T21:26:28Z",
      content:
        "Take screenshots of every single right winger who is shit talking Trump right now, conservative social media personality Laura Loomer wrote on X on Monday, encouraging her followers to post the evide… [+4187 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: null,
      title:
        "Stanley Cup damaged as the Florida Panthers celebrate a second straight championship - AP News",
      description:
        "The Stanley Cup is a little banged up, thanks to the Florida Panthers’ celebration of back-to-back titles. The bowl of the famous trophy is cracked and the bottom is dented. The Panthers won their second consecutive championship on home ice Tuesday night, bea…",
      url: "https://apnews.com/article/panthers-stanley-cup-crack-60bd5610c41f16885a09ade63557f880",
      urlToImage:
        "https://dims.apnews.com/dims4/default/7ef351a/2147483647/strip/true/crop/3251x1829+0+170/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc5%2F76%2F4e171dcdeb73b799c3c601c387ce%2F13044ae9fb2c44cc97c553c9c3f5d90f",
      publishedAt: "2025-06-18T21:25:00Z",
      content:
        "FORT LAUDERDALE, Fla. (AP) The Stanley Cup is a little banged up, thanks to the Florida Panthers celebration of back-to-back titles.\r\nThe bowl of the famous trophy is cracked and the bottom is dented… [+1078 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

//   async componentDidMount(){
//     let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=979f1e008c4d45ef8377f020074d12dd";
//     let data = await fetch(url); 
//     let formatedData = await data.json();
//     this.setState({articles:formatedData.articles});
//   }

  render() {
    return (
      <div className="container my-3 w-100">
        <h1 className="text-dark text-center">Trending  News</h1>
        <div className="container d-flex justify-content-center align-items-center flex-wrap gap-4">
          {this.state.articles.map((element) => {
            return <NewsItem key={element.url}
              title={element.title.slice(0,45)}
              description={element.content !== null?element.content.slice(0,88):element.content}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
            />;
          })}
        </div>
      </div>
    );
  }
}

export default News;
