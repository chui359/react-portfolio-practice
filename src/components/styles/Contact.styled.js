import styled from "styled-components";

export const StyleContact = styled.div`

.contact p i{
    color: #ff004f;
}
.social-icon a{
    text-decoration: none;
    font-size: 30px;
    margin-right: 15px;
    color: #ababab;
    display: inline-block;
    transition: transform 0.5s;
}
.social-icon a:hover{
    color: #ff004f;
    transform: translateY(-5px);
}
.contact {
    text-align: center;
    margin: 0 auto;
    width: 80%;
}
form input, form textarea {
    width: 100%;
    border: 0;
    outline: none;
    background: #262626;
    padding: 15px;
    margin: 15px 0;
    color: #fff;
    font-size: 18px;
    border-radius: 6px;
}

textarea {
    height: 150px;
}

form .btn2 {
    padding: 14px 60px;
    font-size: 18px;
    margin-top: 20px;
}
.copyright {
    width: 100%;
    text-align: center;
    padding: 25px 0;
    background: #262626;
    font-weight: 300;
    margin-top: 20px;
}

`