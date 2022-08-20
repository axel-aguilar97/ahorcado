import React from 'react';
import styled from 'styled-components';

/* Styles */
const DivGame = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
`;

const DivGameLetter = styled.div`
    width: 64px;
    height: 64px;
    margin: 4px;
    color: #fff;
    border-bottom: 3px solid #bbb;
    text-transform: uppercase;
    font-family: Arial, Arial, Helvetica, sans-serif;
    font-size: 32px;
`;

const DivGameGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
`;

const DivGameGridBox = styled.div`
    width: 60px;
    height: 60px;
    border-bottom: 2px solid #bbb;
    margin: 4px;
    color: #fff;
    text-transform: uppercase;
    display: grid;
    place-items: center;
    font-family: Arial, Arial, Helvetica, sans-serif;
    font-size: 2.4em;
`;

/* Interfaces */
interface IProps {

}

interface IState {
    letter?: string;
    word?: string;
    wordSecret?: Array<number>;
}

/* Classes */
class Game extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            letter: "",
            word: "Hola mundo",
            wordSecret: []
        }
    }

    registerKeyboardEvents() {
        document.body.onkeydown = (event) => {
            const key = event.key;

            if(this.isLetter(key)) {
                this.addLetter(key);
            }

            if(key === "Backspace") {
                this.removeLetter();
            }

            if(key === "Enter") {
                if(this.state.letter !== "") {
                    this.checLetterInkWord();
                } else {
                    alert("Debes ingresar una letra.");
                }
            }
        };
    }

    isLetter(key: string) {
        return (key.length === 1 && key.match(/[a-z]/i));
    }

    addLetter(key: string) {
        this.setState({letter: key});
    }

    removeLetter() {
        this.setState({letter: ""});
    }

    checLetterInkWord() {
        const wordLower = this.state.word?.toLocaleLowerCase();
        const letterLower = this.state.letter?.toLocaleLowerCase();
        const wordSecret = [...this.state.wordSecret!];

        if(!wordLower?.includes(letterLower!)) {
            this.setState({letter: ""});

            alert("La letra no está en la palabra.");
            return;
        }

        this.state.wordSecret?.map((value, index) => {
            if(wordLower[index] === letterLower) {
                wordSecret[index] = 0;
                return index;
            }

            return null;
        });

        this.setState({letter: ""});
        this.setState({wordSecret: wordSecret});
        
        setTimeout(() => {this.checkWordIsFull()});
    }

    checkWordIsFull() {
        let count = 0;

        for(let i = 0; i < this.state.word?.length!; ++i) {
            if(this.state.wordSecret![i] === 0) {
                ++count;
            }
        }

        if(count === (this.state.word?.length! - 1)) {
            alert("Has completado el juego.");
        }
    }

    hideGridBoxes() {
        let wordSecret = [...this.state.wordSecret!];

        for(let i = 0; i < this.state.word?.length!; ++i) {
            wordSecret[i] = 1;
        }

        this.setState({wordSecret: wordSecret});
    }
    
    drawGrid() {
        let gridBox = [];

        for(let i = 0; i < this.state.word?.length!; ++i) {
            if(this.state.word![i] === " ") {
                gridBox.push(
                    <div key={i} style={{paddingLeft: "25px"}}></div>
                );

                continue;
            }

            gridBox.push(
                <DivGameGridBox key={i}>
                    <span className={this.state.wordSecret![i] ? "cHidden" : ""}>{this.state.word![i]}</span>
                </DivGameGridBox>
            );
        }

        return gridBox;
    }

    componentDidMount() {
        this.registerKeyboardEvents();
        this.hideGridBoxes();
    }

    render() {
        const wordDiv = {paddingTop: "100px"};
        const grid = {gridTemplateColumns: "repeat(" + this.state.word?.length + ", auto)"};

        return (
            <DivGame>
                <h1>Escriba una letra</h1>

                <DivGameLetter>
                    {this.state.letter}
                </DivGameLetter>

                <div style={wordDiv}>
                    <DivGameGrid style={grid}>
                        {this.drawGrid()}
                    </DivGameGrid>
                </div>
            </DivGame>
        )
    }
}

export default Game;
