import { useState } from "react";
import { getCenterPosition, getNewPosition, getRandomColor, validatePosition } from "../logic/logic";
import Circle from "./Circle";

const Board = () => {

    const [circlesArray, setCirclesArray] = useState<any>([]);
    const [arrayLenght, setArrayLenght] = useState<number>(0);

    const handleAddClick = () => {
        let newColor = getRandomColor();
        let newPosition = getNewPosition();
        let newCenterPosition = getCenterPosition(newPosition[0], newPosition[1]);
        console.log(`circlesArray lenght: ${circlesArray.lenght}`);
        if (arrayLenght === 0) {
            setCirclesArray([...circlesArray, {
                x: newPosition[0],
                y: newPosition[1],
                centerX: newCenterPosition[0],
                centerY: newCenterPosition[1],
                color: newColor
            }]);
            setArrayLenght(arrayLenght + 1);
            console.log(arrayLenght);
        } else {
            let isPositionValid = validatePosition(circlesArray, newCenterPosition);
            let counter: number = 0;
            while (isPositionValid === false && counter < 300) {
                newPosition = getNewPosition();
                newCenterPosition = getCenterPosition(newPosition[0], newPosition[1]);
                isPositionValid = validatePosition(circlesArray, newCenterPosition);
                counter++;
            }
            console.log(isPositionValid, newPosition, newCenterPosition);
            if(isPositionValid){

                setCirclesArray([...circlesArray, {
                    x: newPosition[0],
                    y: newPosition[1],
                    centerX: newCenterPosition[0],
                    centerY: newCenterPosition[1],
                    color: newColor
                }]);
                setArrayLenght(arrayLenght + 1);
                console.log(circlesArray);
            }else alert("Probably, there isn't enough room for new circle. Sorry.")
        }
    }

    const handleDeleteClick = () => {
        if(arrayLenght === 0) return
        circlesArray.pop();
        setCirclesArray([...circlesArray]);
        setArrayLenght(arrayLenght -1);
    }

    return (
        <>
            <div className="board">
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
            <div>
                <button onClick={handleAddClick}>Add</button>
                <button onClick={handleDeleteClick}>Remove</button>
            </div>
        </>
    )
}

export default Board;