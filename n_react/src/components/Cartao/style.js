const {styled} = require("styled-components");

const CartaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 8em;
    border: 2px solid black;
    box-shadow: 5px 5px rgba(0, 0, 0, .8);
 

    p{
        text-align: center;
        font-weight: bold;
    }
`;

const Titulo = styled.h3`
    color: red;
    text-align: center;
`;

export {CartaoContainer, Titulo}