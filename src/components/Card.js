import styled from 'styled-components';
import logo from '../assets/7plus.png';

const Root = styled.div`
    position: relative;
    cursor: pointer;
    max-width: 320px;
    width: 100%;
    margin: 10px;

    @media(min-width: 812px) {
        max-width: 350px;
    }

    @media(min-width: 1024px) {
        max-width: 385px;
    }
`;

const Image = styled.div`
    width: 100%;
    padding-top: ${9/16 * 100}%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image url(${({imageSrc}) => imageSrc});
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.6);
    height: 55px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding: 10px;

    @media(min-width: 812px) {
        height: 60px;
        font-size: 22px;
    }

    @media(min-width: 1024px) {
        height: 65px;
        font-size: 25px;
    }
`;

const Logo = styled.img`
    height: 100%;
    margin: 0 14px 0 0;
    user-select: none;
`;

const Title = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Card = ({onClick, role, itemData}) => {
    return (
        <Root 
            onClick={onClick}
            role={role}
            aria-label="show-card"
        >
            <Image imageSrc={itemData.image}/>
            <Footer>
                <Logo src={logo}/>
                <Title>{itemData.title}</Title>
            </Footer>
        </Root>
    );
}
  
export default Card;