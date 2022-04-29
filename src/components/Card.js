import styled from 'styled-components';
import logo from '../assets/7plus.png';

const StyledCard = styled.div`
    position: relative;
    cursor: pointer;
    flex-shrink: 0;
    max-width: 320px;
    width: 100%;
    margin: 10px;

    @media(min-width: 1024px) {
        max-width: 385px;
    }
`;

const CardImage = styled.div`
    width: 100%;
    padding-top: 56.25%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image url(${props => props.imageSrc});
`;

const CardFooter = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 55px;
    background-color: rgba(0,0,0,0.6);
    font-size: 18px;
    font-weight: bold;
    color: white;
    padding: 10px;

    @media(min-width: 1024px) {
        height: 65px;
        font-size: 24px;
    }
`;

const CardLogo = styled.img`
    height: 100%;
    margin: 0 10px 0 0;
    user-select: none;
`;

const CardTitle = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

function Card(props) {
    return (
        <StyledCard onClick={props.handleCardClick} role={props.role} aria-label="show-card">
            <CardImage imageSrc={props.itemData.image}></CardImage>
            <CardFooter>
                <CardLogo src={logo}></CardLogo>
                <CardTitle>{props.itemData.title}</CardTitle>
            </CardFooter>
        </StyledCard>
    );
}
  
export default Card;