import { useState } from "react";
import {
    getCenterPosition,
    getNewPosition,
    getRandomColor,
    validatePosition
} from "../logic/logic";
import Circle from "./Circle";
import { AddButton, ButtonWrapper, RemoveButton } from "../styles/BoardStyles";


 export interface ICircle {
    x: number,
    y: number,
    color: string
}

const Board = () => {

    const [circlesArray, setCirclesArray] = useState<ICircle[]>([]);
    
    const handleAddClick = () => {
        const newColor: string = getRandomColor();
        let newPosition: number[] = getNewPosition();
        let newCenterPosition: number[] = getCenterPosition(newPosition[0], newPosition[1]);
        if (circlesArray.length === 0) {
            setCirclesArray([...circlesArray, {
                x: newPosition[0],
                y: newPosition[1],
                color: newColor
            }]);
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
                    color: newColor
                }]);
            } else alert("Sorry, probably, there isn't enough room for new circle.")
        }
    }

    const handleDeleteClick = () => {
        if (circlesArray.length === 0) return
        const tempArray: ICircle[] = [...circlesArray];
        tempArray.pop();
        setCirclesArray(tempArray)
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