import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    bodyColor: 'hsl(0, 0%, 98%)',
    fontColor: 'hsl(235, 19%, 35%)',
    formColor: 'hsl(0, 0%, 98%)',
    boxShadow: '0px 0px 20px hsl(236, 33%, 92%), 0px 0px 20px hsl(236, 9%, 61%)',
    backgroundImg: 'url("../bg-desktop-light.jpg")',
}

export const darkTheme = {
    bodyColor: 'hsl(235, 21%, 11%)',
    fontColor: 'hsl(234, 39%, 85%)',
    formColor: 'hsl(235, 24%, 19%)',
    boxShadow: '0px 0px 20px hsl(235, 21%, 11%)',
    itemColor: 'hsl(0, 0%, 98%)',
    borderBottomColor: 'hsl(235, 21%, 11%)',
    backgroundImg: 'url("../bg-desktop-dark.jpg")',
}

export const GlobalStyles = createGlobalStyle`
    :root {
        --bright-blue: hsl(220, 98%, 61%);
        --check-bg: hsl(192, 100%, 67%) to hsl(280, 87%, 65%);

        /* Light Theme colors */ 
        --lm-very-light-gray: hsl(0, 0%, 98%);
        --lm-very-light-grayish-blue: hsl(236, 33%, 92%);
        --lm-light-grayish-blue: hsl(233, 11%, 84%);
        --lm-dark-grayish-blue: hsl(236, 9%, 61%);
        --lm-very-dark-grayish-blue: hsl(235, 19%, 35%);

        /* Dark Theme colors */

        --dm-very-dark-blue: hsl(235, 21%, 11%);
        --dm-dark-desaturated-blue: hsl(235, 24%, 19%);
        --dm-light-grayish-blue: hsl(234, 39%, 85%);
        --dm-light-grayish-blue-hover: hsl(236, 33%, 92%);
        --dm-dark-grayish-blue: hsl(234, 11%, 52%);
        --dm-very-dark-grayish-blue-one: hsl(233, 14%, 35%);
        --dm-very-dark-grayish-blue-two: hsl(237, 14%, 26%);

        /* Font Size */
        --font-size: 18px;
        --font-weight: 400;
        --font-weight-bold: 700;
    }

    body {
        animation: transtions 0.5s linear ease-in-out;
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.bodyColor};

    }

    form.add, form.add input {
        background-color: ${props => props.theme.formColor};
        color: ${props => props.theme.fontColor};
    }

    form.add {
        box-shadow: ${props => props.theme.boxShadow};
    }

    .list {
        width: 100%;
    }

    form.todo-item-form {
        background-color: ${props => props.theme.formColor};
        color: ${props => props.theme.itemColor};
        border-bottom: 1px solid ${props => props.theme.borderBottomColor};
    }

    .list:last-child {
        border-bottom: none;
    }

    .bg-box {
        background-image: ${props => props.theme.backgroundImg};
    }

    .btn-active, .btn-completed {
        color: ${props => props.theme.fontColor};
        border: none;
        background: none;
        cursor: pointer;
    }
    
    .btn-clear-completed {
        color: ${props => props.theme.fontColor};
        border: none;
        background: none;
    }

    .btn-set-complete {
        border-radius: 50%;
        width: 17px;
        height: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-set-complete i {
        font-size: 10px;
    }

    .todo-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        top: -48px;
        max-width: 45vw;
        margin: auto;
        border-radius: 4px;
        box-shadow: ${props => props.theme.boxShadow};
    }

    @keyframes transtions {
        from {
            background-color: hsl(235, 21%, 11%);
        } 

        to {
            background-color: hsl(0, 0%, 98%);
        }
    }
`