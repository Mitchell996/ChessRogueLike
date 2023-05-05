import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import styles from "./Board.module.scss";
import {BoardLettersByNumber, Colors, FigureData, Figures} from "types";
import Cell from "./Cell";
import Figure from "components/Figure/Figure";
import {
	changeFigurePosition,
	removeFigure,
	selectColor,
	selectFigures,
	selectGameWon, setGameStarted,
	setGameWon
} from "redux/gameSlice";
import {useAppDispatch, useAppSelector} from "redux/hooks";
import store from "../../redux/store";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
const PrepBoard: React.FC = () => {
    const navigate = useNavigate();
  
    const figures = useAppSelector(selectFigures);
    const cellsFigure: { [key: string]: FigureData | null } = {}

    const cellClicked = (x: number, y: number): void => {
		//if (!choseFigurePos) return;
		//if (!choseFigurePos.availableCells[`${x}-${y}`]) return;

		//choose set up card to be chosen
	}
    const initCells = (): JSX.Element[] => {
		const cells: JSX.Element[] = [];
		for (let y = 8; y >= 1; y--) {
			for (let x = 1; x <= 8; x++) {
				cellsFigure[`${x}-${y}`] = null;
				const boardLetter = BoardLettersByNumber[x];
				if ((y + x) % 2 !== 0) {
					cells.push(<Cell
						color={Colors.BLACK} x={boardLetter} y={y}
						key={`${boardLetter}-${y}`}
						cellClicked={cellClicked}
					/>)
				} else {
					cells.push(<Cell
						color={Colors.WHITE} x={boardLetter} y={y}
						key={`${boardLetter}-${y}`}
						cellClicked={cellClicked}
					/>)
				}
			}
		}
		return cells;
	}
    const boardRef = useRef<HTMLDivElement>(null);
    const isSelectedFigure = (figure: FigureData): boolean => {
		//if (!choseFigurePos) return false;
		//return choseFigurePos.figure.id === figure.id;
        return true;
	}

    const startNewGame = () => {
		navigate("/game");
	}

    const figureClicked = (figure: FigureData) => {
		/*if (choseFigurePos && choseFigurePos.availableCells[`${figure.x}-${figure.y}`] && choseFigurePos.figure.color !== figure.color) {
			moveOrEat(choseFigurePos.figure, figure.x, figure.y);
			nextAIMoveDelayed();
			return;
		}

		if (choseFigurePos && choseFigurePos.figure.name === figure.name && figure.x === choseFigurePos.figure.x && choseFigurePos.figure.y === figure.y && choseFigurePos.figure.color === figure.color) {
			setChoseFigurePos(null);
			return;
		}

		if (sides.ally !== figure.color) return;

		if (isKingInCheck && figure.name !== Figures.KING) return;

		setChoseFigurePos({
			figure,
			availableCells: getAvailableCells(figure)
		});*/
	}

    const initFigures = (): JSX.Element[] => {
		const figuresJSX: JSX.Element[] = [];

		for (let item in figures) {
			if (!figures[item].id || !figures[item].color) continue;
			cellsFigure[`${figures[item].x}-${figures[item].y}`] = figures[item];
			figuresJSX.push(<Figure
				figureClicked={figureClicked}
				key={figures[item].id}
				figure={figures[item]}
				isSelected={isSelectedFigure(figures[item])}
			/>);
		}

		return figuresJSX;
	}

    return (<> 
        <div className={styles.boardWrapper} ref={boardRef}>
    <ul className={styles.boardLeft}>
        <li className={styles.boardLeftItem}>1</li>
        <li className={styles.boardLeftItem}>2</li>
        <li className={styles.boardLeftItem}>3</li>
        <li className={styles.boardLeftItem}>4</li>
        <li className={styles.boardLeftItem}>5</li>
        <li className={styles.boardLeftItem}>6</li>
        <li className={styles.boardLeftItem}>7</li>
        <li className={styles.boardLeftItem}>8</li>
    </ul>

    <ul className={styles.boardBottom}>
        <li className={styles.boardBottomItem}>A</li>
        <li className={styles.boardBottomItem}>B</li>
        <li className={styles.boardBottomItem}>C</li>
        <li className={styles.boardBottomItem}>D</li>
        <li className={styles.boardBottomItem}>E</li>
        <li className={styles.boardBottomItem}>F</li>
        <li className={styles.boardBottomItem}>G</li>
        <li className={styles.boardBottomItem}>H</li>
    </ul>

    <ul className={styles.board}>
        {initCells()}
        {initFigures()}
    </ul>
    
   
</div>
<a href="#" onClick={startNewGame} className={styles.button}>Start new game</a>
</>)


}

export default PrepBoard;