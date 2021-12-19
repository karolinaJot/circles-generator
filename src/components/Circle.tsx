import styled from 'styled-components';

const CircleBox = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    line-height: 80px;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    background-color: #eeff00;
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
        }}>lorem ipsum</CircleBox>
    );
}
export default Circle;