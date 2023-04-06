import { CircleBox } from '../styles/CircleStyles';
interface ICircleProps {
    xValue: string,
    yValue: string,
    color: string
}

const Circle = (props: ICircleProps) => {
    
    return (
        <CircleBox style={{
            "top": props.yValue,
            "left": props.xValue,
            "backgroundColor": props.color
        }}>
            <p>lorem ipsum</p>
        </CircleBox>
    );
}
export default Circle;