import { useState } from "react";
import styled from "styled-components";

import {
    getCenterPosition,
    getNewPosition,
    getRandomColor,
    validatePosition
} from "../logic/logic";
import Circle from "./Circle";

const ButtonWrapper = styled.div`
    text-align: center;
    height: 40px;
`;
const AddButton = styled.button`
    height: 100%;
    margin-right: 10px;
    background-color: #12be12;
    color: #ffffff;
`;

const RemoveButton = styled.button`
    height: 100%;
    margin-left: 10px;
    background-color: #e20d0d;
    color: #ffffff;
`;

 export interface ICircle {
    x: number,
    y: number,
    centerX: number,
    centerY: number,
    color: string
}

const Board = () => {

    const [circlesArray, setCirclesArray] = useState<ICircle[]>([]);
    const [arrayLenght, setArrayLenght] = useState<number>(0);

    const handleAddClick = () => {
        const newColor: string = getRandomColor();
        let newPosition: number[] = getNewPosition();
        let newCenterPosition: number[] = getCenterPosition(newPosition[0], newPosition[1]);
        if (arrayLenght === 0) {
            setCirclesArray([...circlesArray, {
                x: newPosition[0],
                y: newPosition[1],
                centerX: newCenterPosition[0],
                centerY: newCenterPosition[1],
                color: newColor
            }]);
            setArrayLenght(arrayLenght + 1);
        } else {
            let isPositionValid: boolean = validatePosition(circlesArray, newCenterPosition);
            let counter: number = 0;
            while (!isPositionValid && counter < 300) {
                newPosition = getNewPosition();
                newCenterPosition = getCenterPosition(newPosition[0], newPosition[1]);
                isPositionValid = validatePosition(circlesArray, newCenterPosition);
                counter++;
            }
            if (isPositionValid) {
                setCirclesArray([...circlesArray, {
                    x: newPosition[0],
                    y: newPosition[1],
                    centerX: newCenterPosition[0],
                    centerY: newCenterPosition[1],
                    color: newColor
                }]);
                setArrayLenght(arrayLenght + 1);
            } else alert("Sorry, probably, there isn't enough room for new circle.")
        }
    }

    const handleDeleteClick = () => {
        if (arrayLenght === 0) return
        const tempArray: ICircle[] = [...circlesArray];
        tempArray.pop();
        setCirclesArray(tempArray)
        setArrayLenght(arrayLenght - 1);
    }

    return (
        <>
            <ButtonWrapper>
                <AddButton onClick={handleAddClick}>Add</AddButton>
                <RemoveButton onClick={handleDeleteClick}>Remove</RemoveButton>
            </ButtonWrapper>
            <div>
                {
                    circlesArray.map((circle: any, index: any) => (
                        <Circle key={index}
                            xValue={(circle.x).toString() + "px"}
                            yValue={(circle.y).toString() + "px"}
                            color={circle.color}
                        />
                    ))
                }
            </div>
        </>
    )
}
export default Board;