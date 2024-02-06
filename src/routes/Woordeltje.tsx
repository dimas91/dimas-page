import React, { useEffect, useRef, useState } from 'react';
import { WORDS } from '../constants/wordlist';

export default function Woordeltje() {
    return (
        <div id="game" style={{ padding: "1rem 0" }}>
            <header>
                <div className="menu"></div>
                <div className="title">Woordeltje</div>
                <div className="menu"></div>
            </header>
            <div id="board-container">
                <Board />
            </div>
        </div>

    );
}

type RowType = { length: number, letters: string }

const Board = () => {
    const [rows, setRows] = useState<RowType[]>([]);
    const [currentRow, setCurrentRow] = useState(0);
    const [wordOfTheDay, setWordOfTheDay] = useState(WORDS[0]);
    const [currentTileIndex, setCurrentTileIndex] = useState(0);

    useEffect(() => {
        let arr: { length: number, letters: string }[] = [];
        for (var i = 0; i < 6; i++) {
            arr.push({ length: 5, letters: "" });
        }
        setRows(arr);
    }, []);

    const useEventListener = (eventName: any, handler: any, element = window) => {
        const savedHandler: any = useRef();

        useEffect(() => {
            savedHandler.current = handler;
        }, [handler]);

        useEffect(() => {
            const eventListener = (event: any) => savedHandler.current(event);
            element.addEventListener(eventName, eventListener);
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        }, [eventName, element]);
    };

    const handler = ({ key }: any) => {
        console.log(String(key));
        //if ( key.length == 1 && String(key).toLowerCase() != String(key).toUpperCase()) {
            if (String(key).length === 1 && String(key).match(/[a-z]/i) && rows[currentRow].letters.length < rows[currentRow].length) {
            // TODO: Add letter here
            let newRows = [...rows];
            let oldLetters = rows[currentRow].letters;
            let row = {
                ...rows[currentRow],
                letters: oldLetters + String(key).toLowerCase()
            }
            newRows[currentRow] = row;
            setRows(newRows);
        }
        else if (String(key) === "Backspace") {
            // TODO: Remove letter here
            //console.log("Backspace pressed!");
            if (rows[currentRow].letters.length > 0) {
                let newRows = [...rows];
                let oldLetters = rows[currentRow].letters;
                let row = {
                    ...rows[currentRow],
                    letters: oldLetters.slice(0, -1)
                }
                newRows[currentRow] = row;
                setRows(newRows);
            }
            
        }
        else if (String(key) === "Enter") {
            // TODO: Submit row
            //console.log("Enter pressed!");
            if (rows[currentRow].letters.length < 6 - 1) {
                alert("Not enough letters!");
            }
            else if (currentRow < 6 - 1) {
                // TODO: Check word list
                setCurrentRow(currentRow + 1);
            }
        }
    };

    const submitRow = () => {
        if (rows[currentRow].letters.length < 6 - 1) {
            alert("Not enough letters!");
        }
        else if (currentRow < 6 - 1) {
            // TODO: Check word list
            setCurrentRow(currentRow + 1);
        }
    }

    const evaluateRow = () => {

    }

    useEventListener("keydown", handler);

    return (
        <div>
            {rows.map((row, i) => {
                return (
                    <GameRow key={i} length={row.length} letters={row.letters} />
                )
            })}
        </div>
    )
}

const GameRow = ({ length, letters }: RowType) => {
    const [letterArray, setLetterArray] = useState<string[]>([]);

    useEffect(() => {
        const newArray = []
        for (var i = 0; i < length; i++) {
            newArray.push(letters.charAt(i));
        }
        setLetterArray(newArray);
    }, [letters, length])

    return (
        <div className='row'>
            {letterArray.map((letter, i) => {
                return <GameTile key={i} letter={letter} />
            })}
        </div>
    )
}

enum Evaluation {
    TBD = "tbd",
    Absent = "absent",
    Present = "present",
    Correct = "correct"
}

type TileType = { letter: string }

const GameTile = ({ letter }: TileType) => {
    const [evaluation, setEvaluation] = useState(Evaluation.TBD);
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className='tile'>
            {letter}
        </div>
    )
}