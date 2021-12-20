import styled from 'styled-components';

const CircleBox = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 20px;
    position: absolute;
    background-color: #eeff00;
    display: flex;
    justify-content: center;
    text-align: center;
`;
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