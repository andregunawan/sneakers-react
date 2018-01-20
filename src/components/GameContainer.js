import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Main from "./Main";
import Footer from "./Footer";

class GameContainer extends Component {
    state = {
        score: 0,
        topScore: 0,
        clickStatus:"",
        results: [
            {
                imgId:0,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/09/Off-White-x-Nike-Air-Vapormax.png",
                imgAlt: "vapormax",
                imgClickStatus: false
            },
            {
                imgId:1,
                imgUrl: "https://static.wixstatic.com/media/fbcaf4_6e9233937ba04800ba128aff9bcd56db~mv2.png",
                imgAlt: "jordanoffwhite",
                imgClickStatus: false
            },
            {
                imgId:2,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/09/Balenciaga-Triple-S-Blue-Red.png",
                imgAlt: "balenciaga",
                imgClickStatus: false
            },
            {
                imgId:3,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/11/Pharrell-Williams-x-adidas-NMD-Hu-Trail-Pale-Nude-AC7361-1.png",
                imgAlt: "pharell",
                imgClickStatus: false,
            },
            {
                imgId:4,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/09/adidas-nmd.png",
                imgAlt: "nmdog",
                imgClickStatus: false
            },
            {
                imgId:5,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/09/Comme-des-Garcons-Play-x-Converse-Chuck-Taylor-All-Star-70-Low-Black.png",
                imgAlt: "cdg",
                imgClickStatus: false
            },
            {
                imgId:6,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/09/Yeezy-Boost-350-V2-Pirate-Black-1.png",
                imgAlt: "yeezy",
                imgClickStatus: false
            },
            {
                imgId:7,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/09/Yeezy-Boost-350-Brown.png",
                imgAlt: "yeezy350",
                imgClickStatus: false
            },
            {
                imgId:8,
                imgUrl: "https://www.jordasneakers.com/pic/180-13954.png",
                imgAlt: "yeezy700",
                imgClickStatus: false
            },
            {
                imgId:9,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/09/Kaws-x-Jordan-4.png",
                imgAlt: "jordan4",
                imgClickStatus: false
            },
            {
                imgId:10,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/09/Supreme-x-Nike-Air-More-Uptempo-Suptempo-Red.png",
                imgAlt: "supreme",
                imgClickStatus: false
            },
            {
                imgId:11,
                imgUrl: "https://cdn.thesolesupplier.co.uk/2017/09/Bape-Camo-NMD-760x459.png",
                imgAlt: "bape",
                imgClickStatus: false
            }
        ]
    };

    componentDidMount = () => {
        this.shuffle(this.state.results);
    };

    shuffle = resultsArr => {
        let currentIndex = resultsArr.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = resultsArr[currentIndex];
            resultsArr[currentIndex] = resultsArr[randomIndex];
            resultsArr[randomIndex] = temporaryValue;
        }
        this.setState({
            results:resultsArr
        });
    };

    updateScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    };

    updateTopScore = () => {
        this.setState({
            topScore: this.state.topScore + 1
        });
    };

    emptyScore = () => {
        this.setState({
            score: 0
        });
    };

    handleImageClick = imgId => {
        let result = this.state.results;
        let resultIdx = -1;
        for(let i=0;i<result.length;i++)
        {
            if(result[i].imgId === imgId) resultIdx = i;
        }
        if(!this.state.results[resultIdx].imgClickStatus)
        {
            result[resultIdx].imgClickStatus = true;
            this.updateScore();
            if(this.state.score >= this.state.topScore)
            {
                this.updateTopScore();
            }
            this.setState({
                clickStatus:"true",
                result
            });
        }
        else
        {
            this.setState({
                clickStatus:"false"
            });
            this.state.results.map(data => data.imgClickStatus = false);
            this.emptyScore();
        }
        this.shuffle(this.state.results);
    };

    render() {
        return (
            <div>
                <Banner />
                <Header
                    score={this.state.score}
                    topScore={this.state.topScore}
                    clickStatus={this.state.clickStatus}
                />
                <Main
                    results={this.state.results}
                    handleImageClick={this.handleImageClick}
                />
                <Footer />
            </div>
        );
    }
}

export default GameContainer;