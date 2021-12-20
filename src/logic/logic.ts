import { ICircle } from "../components/Board";

export const getNewPosition = (): number[] => {
    const screenWidth = window.innerWidth - 120; // 120 (to make sure that circle fit the screen size)
    const screenHeight = window.innerHeight - 170; // 120 (to make sure that circle fit the screen size) + 50 (to make sure that buttons won't be overlap by circle)

    const x: number = Math.floor(Math.random() * screenWidth);
    const y: number = (Math.floor(Math.random() * screenHeight)) + 50; // +45 (to make sure that buttons won't be overlap by circle - button at the top of screen)

    return [x, y];
};

export const getCenterPosition = (x: number, y: number): number[] => {
    let centerX: number = 0;
    let centerY: number = 0;

    const tempX: number = x + 40;
    const tempY: number = y + 40;

    centerX = tempY + 40;
    centerY = tempX + 40;

    return [centerX, centerY]
};

export const getRandomColor = (): string => {
    const color: string = '#' + Math.round(0xffffff * Math.random()).toString(16);
    return color;
};
// make sure that new cricle doesn't overlap of other circle 
export const validatePosition = (criclesArray: ICircle[], centerPosition: number[]): boolean => {
    let isPositionValid: boolean = false;
    const minValue: number = Math.pow(80, 2);
    for (let i = 0; i < criclesArray.length; i++) {
        const a2: number = Math.pow(criclesArray[i].centerX - centerPosition[0], 2);
        const b2: number = Math.pow(criclesArray[i].centerY - centerPosition[1], 2);
        const c2: number = a2 + b2;
        if (c2 < minValue) {
            isPositionValid = false;
            break;
        } else isPositionValid = true;
    }
    return isPositionValid;
};

