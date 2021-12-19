import Circle from "../components/Circle";

export const getNewPosition = (): number[] => {
    let screenWidth = window.innerWidth - 120;
    let screenHeight = window.innerHeight - 120;

    let x: number = Math.floor(Math.random() * screenWidth);
    let y: number = Math.floor(Math.random() * screenHeight);

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

export const validatePosition = (criclesArray: any[], centerPosition: number[]): boolean => {
    console.log('validator wywołany')
    let isPositionValid: boolean = false;
    let minValue = 80 * 80;
    for (let i = 0; i < criclesArray.length; i++) {
        // console.log(criclesArray[i].centerX, centerPosition[0]);
        let a2 = (criclesArray[i].centerX - centerPosition[0]) * (criclesArray[i].centerX - centerPosition[0]);
        // console.log(`a2= ${a2}`)
        let b2 = (criclesArray[i].centerY - centerPosition[1]) * (criclesArray[i].centerY - centerPosition[1]);
        // console.log(`b2= ${b2}`);
        let c2 = a2 + b2;
        // console.log(`c2= ${c2}`);
        if (c2 < minValue) {
            isPositionValid = false;
            console.log(isPositionValid);
            break;
        } else isPositionValid = true;
    }
    return isPositionValid;
}

