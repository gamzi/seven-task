import { useState } from 'react';
import styled from 'styled-components';

import Card from './components/Card';

const itemList = [
    {
        id: '1',
        title: 'Gold Digger',
        image: require(`./assets/Gold_Digger.jpeg`)
    },
    {
        id: '2',
        title: 'Liar',
        image: require(`./assets/Liar.jpeg`)
    },
    {
        id: '3',
        title: 'Little Women: LA',
        image: require(`./assets/Little_Women-LA.jpeg`)
    },
    {
        id: '4',
        title: 'My Kitchen Rules',
        image: require(`./assets/MKR.jpeg`)
    },
    {
        id: '5',
        title: 'Pooch Perfect',
        image: require(`./assets/Pooch_Perfect.jpeg`)
    },
    {
        id: '6',
        title: 'Revolution',
        image: require(`./assets/Revolution.jpeg`)
    },
    {
        id: '7',
        title: 'Smallville',
        image: require(`./assets/Smallville.jpeg`)
    },
    {
        id: '8',
        title: 'The Good DoctorThe Good DoctorThe Good DoctorThe Good Doctor',
        image: require(`./assets/The_Good_Doctor.jpeg`)
    },
    {
        id: '9',
        title: 'The Resident',
        image: require(`./assets/The_Resident.jpeg`)
    },
    {
        id: '10',
        title: 'Transformed',
        image: require(`./assets/Transformed.jpeg`)
    }
];

const SidePanel = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 50%;
    right: 0;
    padding: 10px;
    right: ${props => props.showSidePanel ? '50%' : '100%'};
    transition: right 400ms;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    @media(max-width: 425px) {
        width: 100%;
        right: ${props => props.showSidePanel ? 0 : '100%'};
    }
`;

const CardGridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    list-style-type: none;
    justify-content: space-between;

    @media(max-width: 425px) {
        justify-content: space-around;
    }
`;

function App() {
    const [focusedCard, setFocusedCard] = useState({});
    const [showSidePanel, setShowSidePanel] = useState(false);

    function handleItemFocus(cardData) {
        if (cardData.id === focusedCard.id) {
            setShowSidePanel(!showSidePanel);
        } else {
            setShowSidePanel(true);
            setFocusedCard(cardData);
        }
    };

    return (
        <>
            <CardGridWrapper role="list">
                {
                    itemList.map((item) =>
                        <Card key={item.id} role="listitem" itemData={item} handleCardClick={() => handleItemFocus(item)}></Card>
                    )
                }
            </CardGridWrapper>

            <SidePanel showSidePanel={showSidePanel} aria-label="side-panel">
                <Card itemData={focusedCard} handleCardClick={() => setShowSidePanel(false)} ></Card>
            </SidePanel>
        </>
    );
}

export default App;
