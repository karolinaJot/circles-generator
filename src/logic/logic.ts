import { ICirclesArray } from "../components/Board";

export const getNewPosition = (): number[] => {
    let screenWidth = window.innerWidth - 120; // 120 (to make sure that circle fit the screen size)
    let screenHeight = window.innerHeight - 165; // 120 (to make sure that circle fit the screen size) + 45 (to make sure that buttons won't be overlap by circle)

    let x: number = Math.floor(Math.random() * screenWidth);
    let y: number = (Math.floor(Math.random() * screenHeight)) + 45; // +45 (to make sure that buttons won't be overlap by circle - button at the top of screen)

    return [x, y];
};

export const getCenterPosition = (x: number, y: number): number[] => {
    let centerX: number = 0;
    let centerY: number = 0;

    let tempX: number = x + 40;
    let tempY: number = y + 40;

    centerX = tempY + 40;
    centerY = tempX + 40;

    return [centerX, centerY]
};

export const getRandomColor = (): string => {
    let color: string = '#' + Math.round(0xffffff * Math.random()).toString(16);
    return color;
};
// make sure that new cricle doesn't overlap of other circle 
export const validatePosition = (criclesArray: ICirclesArray[], centerPosition: number[]): boolean => {
    let isPositionValid: boolean = false;
    let minValue: number = 80 * 80;
    for (let i = 0; i < criclesArray.length; i++) {
        let a2: number = (criclesArray[i].centerX - centerPosition[0]) * (criclesArray[i].centerX - centerPosition[0]);
        let b2: number = (criclesArray[i].centerY - centerPosition[1]) * (criclesArray[i].centerY - centerPosition[1]);
        let c2: number = a2 + b2;
        if (c2 < minValue) {
            isPositionValid = false;
            break;
        } else isPositionValid = true;
    }
    return isPositionValid;
};

