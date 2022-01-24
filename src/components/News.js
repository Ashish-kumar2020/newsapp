import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
            "status": "ok",
            "totalResults": 1195,
            "articles": [
                {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Mat Smith",
                    "title": "The Morning After: The Steam Deck will support Epic's anticheat software",
                    "description": "Cheating is rife across many gaming platforms, but the biggest cheaters are usually found around PC gaming — despite games companies banning thousands, if not hundreds of thousands of the scamps. Valve's Steam Deck, its upcoming handheld, should make it harde…",
                    "url": "https://www.engadget.com/themorningafterthesteamdeckwillsupportepicsanticheatsoftware121518104.html",
                    "urlToImage": "https://s.yimg.com/os/creatrimages/201910/e793b180e45511e9b7d567981d4920db",
                    "publishedAt": "20220124T12:15:18Z",
                    "content": "Cheating is rife across many gaming platforms, but the biggest cheaters are usually found around PC gaming despite games companies banning thousands, if not hundreds of thousands of the scamps. Valve… [+3623 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "LIVE MARKETS New week, same trend  Reuters",
                    "description": "Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at <a href=\"mailto:markets.research@thomsonreuters.com\" target=\"_blank\">markets.research@thomsonreuters.com</a>",
                    "url": "https://www.reuters.com/markets/stocks/livemarketsnewweeksametrend20220124/",
                    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reutersdefault.png?d=69",
                    "publishedAt": "20220124T07:48:00Z",
                    "content": "Jan 24  Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at markets.research@thomsonreuters.com\r\nNEW WEEK, SAME TREND (0… [+627 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "LIVE MARKETS Bears at the gate  Reuters",
                    "description": "Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at <a href=\"mailto:markets.research@thomsonreuters.com\" target=\"_blank\">markets.research@thomsonreuters.com</a>",
                    "url": "https://www.reuters.com/markets/stocks/livemarketsbearsgate20220124/",
                    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reutersdefault.png?d=69",
                    "publishedAt": "20220124T07:58:00Z",
                    "content": "Jan 24  Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at markets.research@thomsonreuters.com\r\nBEARS AT THE GATE (0759… [+2700 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "LIVE MARKETS Many shades of market stress  Reuters",
                    "description": "Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at <a href=\"mailto:markets.research@thomsonreuters.com\" target=\"_blank\">markets.research@thomsonreuters.com</a>",
                    "url": "https://www.reuters.com/markets/stocks/livemarketsmanyshadesmarketstress20220124/",
                    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reutersdefault.png?d=69",
                    "publishedAt": "20220124T10:26:00Z",
                    "content": "Jan 24  Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at markets.research@thomsonreuters.com\r\nMANY SHADES OF MARKET S… [+5528 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "LIVE MARKETS Telco M&A fights the gloom  Reuters",
                    "description": "Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at <a href=\"mailto:markets.research@thomsonreuters.com\" target=\"_blank\">markets.research@thomsonreuters.com</a>",
                    "url": "https://www.reuters.com/markets/stocks/livemarketstelcomafightsgloom20220124/",
                    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reutersdefault.png?d=69",
                    "publishedAt": "20220124T08:36:00Z",
                    "content": "Jan 24  Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at markets.research@thomsonreuters.com\r\nTELCO M&amp;A FIGHTS TH… [+3931 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Bears at the gate  Reuters",
                    "description": "A look at the day ahead from Julien Ponthus",
                    "url": "https://www.reuters.com/markets/asia/bearsgate20220124/",
                    "urlToImage": "https://www.reuters.com/resizer/GL_ef8G7T1LdY0kLlw0o1HLYKk=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/XJ4NW2RST5NDRDI3MZT7QDAD2E.jpg",
                    "publishedAt": "20220124T07:57:00Z",
                    "content": "A look at the day ahead from Julien Ponthus\r\nWith a 14% fall from its November peak, not only is the Nasdaq deep in correction territory, it is also now within striking distance of the 20% fall bar w… [+2054 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Futures slide as Ukraine tensions dent mood at start of crucial week  Reuters",
                    "description": "U.S. stock index futures slid on Monday after a bruising selloff last week, as geopolitical tensions in Ukraine roiled risk appetite ahead of a Federal Reserve policy meeting later this week.",
                    "url": "https://www.reuters.com/business/futuresslideukrainetensionsdentmoodstartcrucialweek20220124/",
                    "urlToImage": "https://www.reuters.com/resizer/fbnSzjIx6tl1Lkppx3N0bLyWNIo=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/VBHYYI7Y4BK3TGIOLDOXHZVUPE.jpg",
                    "publishedAt": "20220124T12:31:00Z",
                    "content": "Jan 24 (Reuters)  U.S. stock index futures slid on Monday after a bruising selloff last week, as geopolitical tensions in Ukraine roiled risk appetite ahead of a Federal Reserve policy meeting later… [+2544 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "SPAC linked to Trump's venture outperforms others in sector  Reuters",
                    "description": "Shares of the blankcheck acquisition firm that agreed to merge with former President Donald Trump's social media venture have outperformed every other special purpose acquisition company (SPAC), despite the regulatory risks facing the deal and investors now …",
                    "url": "https://www.reuters.com/business/mediatelecom/spaclinkedtrumpsventureoutperformsotherssector20220124/",
                    "urlToImage": "https://www.reuters.com/resizer/zu_IIuifZgh_vu0paxoi0LTL9SE=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/FAKQOELZCBJRBKFWW54DAQPG4Y.jpg",
                    "publishedAt": "20220124T10:08:00Z",
                    "content": "Jan 24 (Reuters)  Shares of the blankcheck acquisition firm that agreed to merge with former President Donald Trump's social media venture have outperformed every other special purpose acquisition … [+3008 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "LIVE MARKETS Six reason to buy UK stocks  Reuters",
                    "description": "Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at <a href=\"mailto:markets.research@thomsonreuters.com\" target=\"_blank\">markets.research@thomsonreuters.com</a>",
                    "url": "https://www.reuters.com/markets/stocks/livemarketssixreasonbuyukstocks20220124/",
                    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reutersdefault.png?d=69",
                    "publishedAt": "20220124T13:17:00Z",
                    "content": "Jan 24  Welcome to the home for realtime coverage of markets brought to you by Reuters reporters. You can share your thoughts with us at markets.research@thomsonreuters.com\r\nSIX REASONS TO BUY UK S… [+7898 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Asia shares tense as Fed looms, Ukraine a concern  Reuters",
                    "description": "Asian share markets slipped on Monday with the Federal Reserve expected to confirm it will soon start draining the massive liquidity that has fuelled the huge gains in growth stocks in recent years.",
                    "url": "https://www.reuters.com/markets/europe/globalmarketswrapup1pix20220124/",
                    "urlToImage": "https://www.reuters.com/resizer/u3JYBcmaWOBRu9OH98h_5xmDYqg=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/IPLCLPYARJK45AHNKI4CTTGDUQ.jpg",
                    "publishedAt": "20220124T00:35:00Z",
                    "content": "SYDNEY, Jan 24 (Reuters)  Asian share markets slipped on Monday with the Federal Reserve expected to confirm it will soon start draining the massive liquidity that has fuelled the huge gains in grow… [+3790 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Android Central"
                    },
                    "author": "Jim Metzendorf",
                    "title": "AC Podcast 555: Pixel 6 Fixes; NVIDIA Shield TV Bugs",
                    "description": "The January 2022 update is available now for Pixel 6 phones. It brings some quality of life improvements for their users. But the the news isn't so good for NVIDIA Shield TV after an Android 11 update. However, NVIDIA says fixes for Plex, Kodi, and more are o…",
                    "url": "https://www.androidcentral.com/acpodcast555pixel6fixesnvidiashieldtvbugs",
                    "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/10/googlepixel6homescreenmaterialyou.jpg",
                    "publishedAt": "20220124T01:46:52Z",
                    "content": "The January 2022 update is available now for Pixel 6 phones. It brings some quality of life improvements for their users. But the the news isn't so good for NVIDIA Shield TV after an Android 11 updat… [+442 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zacks.com"
                    },
                    "author": "Zacks Equity Research",
                    "title": "Should Vanguard S&P 500 Growth ETF (VOOG) Be on Your Investing Radar?",
                    "description": "Style Box ETF report for VOOG",
                    "url": "http://www.zacks.com/stock/news/1855865/shouldvanguardsp500growthetfvoogbeonyourinvestingradar?cid=CSENTREPRENEURFTstyle_box_etf1855865",
                    "urlToImage": "https://assets.entrepreneur.com/providers/zacks/heroimagezacks414689.jpeg",
                    "publishedAt": "20220124T11:20:11Z",
                    "content": "Launched on 09/09/2010, the Vanguard S&amp;P 500 Growth ETF (VOOG) is a passively managed exchange traded fund designed to provide a broad exposure to the Large Cap Growth segment of the US equity ma… [+4733 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Zacks.com"
                    },
                    "author": "Zacks Equity Research",
                    "title": "Is SPDR MSCI USA StrategicFactors ETF (QUS) a Strong ETF Right Now?",
                    "description": "Smart Beta ETF report for QUS",
                    "url": "http://www.zacks.com/stock/news/1855869/isspdrmsciusastrategicfactorsetfqusastrongetfrightnow?cid=CSENTREPRENEURFTsmart_beta_etf1855869",
                    "urlToImage": "https://assets.entrepreneur.com/providers/zacks/heroimagezacks414691.jpeg",
                    "publishedAt": "20220124T11:20:10Z",
                    "content": "The SPDR MSCI USA StrategicFactors ETF (QUS) made its debut on 04/15/2015, and is a smart beta exchange traded fund that provides broad exposure to the Style Box  Large Cap Blend category of the mar… [+5294 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "MacRumors"
                    },
                    "author": "Tim Hardwick",
                    "title": "MediaTek Demos NextGen WiFi 7 Standard Boasting Near Thunderbolt 3 Speeds",
                    "description": "MediaTek has conducted the world's first live demo of WiFi 7 for \"key customers and industry collaborators,\" paving the way for the wireless network technology to enter mainstream consumer hardware as early as next year, according to the company.\n\n\n\n\n\nTaiwan…",
                    "url": "https://www.macrumors.com/2022/01/24/mediatekdemoswifi7tech/",
                    "urlToImage": "https://images.macrumors.com/t/CSasFgwgStQchoBXogl0lVvEdE=/1600x/articlenew/2022/01/wifi7.jpeg",
                    "publishedAt": "20220124T11:54:57Z",
                    "content": "MediaTek has conducted the world's first live demo of WiFi 7 for \"key customers and industry collaborators,\" paving the way for the wireless network technology to enter mainstream consumer hardware … [+3503 chars]"
                },
                {
                    "source": {
                        "id": "businessinsider",
                        "name": "Business Insider"
                    },
                    "author": "tmohamed@businessinsider.com (Theron Mohamed)",
                    "title": "Warren Buffett has nearly caught up with Cathie Wood after the techstock guru vastly outperformed him in 2020",
                    "description": "Berkshire Hathaway stock has climbed 34% since the start of 2020, not far behind the Ark Innovation ETF's 42% gain over the same period.",
                    "url": "https://markets.businessinsider.com/news/stocks/warrenbuffettberkshirehathawaycathiewoodarkkstockpandemicgains20221",
                    "urlToImage": "https://images2.markets.businessinsider.com/5f3aa95ae89ebf001f04541f?format=jpeg",
                    "publishedAt": "20220124T14:34:03Z",
                    "content": "Warren Buffett.Getty Images / Bill Pugliano\r\nCathie Wood eclipsed Warren Buffett in some people's minds due to her stellar returns during the first year of the pandemic. However, the Ark Invest chief… [+2304 chars]"
                },
                {
                    "source": {
                        "id": "businessinsider",
                        "name": "Business Insider"
                    },
                    "author": "hrobertson@businessinsider.com (Harry Robertson)",
                    "title": "US stock futures fall as investors shun risky assets ahead of the key Fed rate meeting, while the crypto selloff persists",
                    "description": "Stocks look set to lose more ground after the S&P 500 had its worst week since March 2020, as investors brace for this week's Federal Reserve meeting.",
                    "url": "https://markets.businessinsider.com/news/stocks/stockmarkettodayusfuturesdowsp500techfedrates20221",
                    "urlToImage": "https://images2.markets.businessinsider.com/618041a823745d00182484d2?format=jpeg",
                    "publishedAt": "20220124T11:22:59Z",
                    "content": "It's been a volatile start to the year on Wall Street.AP Photo/Richard Drew\r\nUS stock futures slid Monday following the worst week for the S&amp;P 500 since March 2020, as investors fretted about int… [+3586 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hipertextual"
                    },
                    "author": "Nicolás Rivera",
                    "title": "Apple prepara un nuevo procesador M1 aún más potente que el M1 Max",
                    "description": "El M1 fue el primer procesador Apple Silicon para el Mac que la compañía norteamericana presentó oficialmente. Lo hizo en 2020 y llegó en dos versiones diferentes: una con una GPU de siete núcleos –presente en el MacBook Air más económico– y otra con una GPU …",
                    "url": "https://hipertextual.com/2022/01/applepreparauncuartoprocesadorm1aunmaspotentequeelm1max",
                    "urlToImage": "https://hipertextual.com/wpcontent/uploads/2021/10/AppleM1ProM1Max.jpg",
                    "publishedAt": "20220124T12:24:34Z",
                    "content": "El M1 fue el primer procesador Apple Silicon para el Mac que la compañía norteamericana presentó oficialmente. Lo hizo en 2020 y llegó en dos versiones diferentes: una con una GPU de siete núcleos pr… [+2487 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Digital Trends"
                    },
                    "author": "Alex Blake",
                    "title": "Apple’s iMac Pro could get an allpowerful 12core chip",
                    "description": "Apple’s upcoming iMac Pro could have a brandnew 12core chip, according to a reliable leaker. That could take its performance a step above any other Mac.",
                    "url": "https://www.digitaltrends.com/computing/appleimacpro12corechipdylandkt/",
                    "urlToImage": "https://icdn.digitaltrends.com/image/digitaltrends/imac5k_review_11.jpg",
                    "publishedAt": "20220124T13:58:36Z",
                    "content": "Weve been talking about the upcoming iMac Pro redesign for many months with the expectation it will be fitted with one of Apples M1 Pro or M1 Max chips. According to a reliable leaker, though, theres… [+3017 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Blogger.com"
                    },
                    "author": "Calculated Risk",
                    "title": "Six High Frequency Indicators for the Economy",
                    "description": null,
                    "url": "https://www.blogger.com/comment.g?blogID=10004977&postID=2496723453028235020&bpli=1",
                    "urlToImage": null,
                    "publishedAt": "20220124T13:45:00Z",
                    "content": "These indicators are mostly for travel and entertainment.    It is interesting to watch these sectors recover as the pandemic subsides.There is a clear negative impact from the omicron variant of COV… [+4155 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "heise online"
                    },
                    "author": "Leo Becker",
                    "title": "Gnadenfrist verlängert: OnlineKurse müssen Apple später Provision zahlen",
                    "description": "Wegen des \"Wiederauflebens von Covid\" dürfen AppKurse länger direkt abgerechnet werden. Die umstrittene Provision will Apple ab Sommer eintreiben.",
                    "url": "https://www.heise.de/news/GnadenfristverlaengertOnlineKursemuessenApplespaeterProvisionzahlen6336610.html",
                    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/3/2/6/2/4/7/3/shutterstock_1218992125d2df6a146f592cbe.jpg",
                    "publishedAt": "20220124T13:38:00Z",
                    "content": "Anbieter von OnlineVeranstaltungen in iPhoneApps dürfen dies länger selbst abrechnen und müssen so vorerst keine Provision an Apple zahlen. Wegen des \"Wiederauflebens von Covid\" und den daraus resu… [+2091 chars]"
                }
            ]
        }
    ]
    constructor(){
        super();
        console.log("I am from constructor from News Component");
        this.state = {
            articles : this.articles,
            loading: false
        }
      }
    render() {
        return (
            <div className='container my-3'>
                <h2>SpiderNews Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="MyDesc" imageUrl="https://static.foxnews.com/foxnews.com/content/uploads/2022/01/Patrick-Mahomes5.jpg" newsUrl = "TODO" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="MyDesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="MyTitle" description="MyDesc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News;
