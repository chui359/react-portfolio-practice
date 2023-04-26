import styled from "styled-components";

export const StyledSkill = styled.section`
.skills-container{
    row-gap: 0;
}
.skills-header{
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
}
.skills-icon,
.skills-arrow{
    font-size: 2rem;
    color: var(--first-color);
}
.skills-icon{
    margin-right: var(--mb-0-75);
}
.skills-title{
    font-size: var(--h3-font-size);
}
.skills-subtitle{
    font-size: var(--smaill-font-size);
    color: var(--text-color-light);
}

.skills-arrow{
    margin-left: auto;
    transition: 0.4s;
}

.skills-list{
    display: flex;
    gap: 1rem;
    padding-left: 2.7rem;
    flex-wrap: wrap;
}

.skills-title{
    display:flex;
    justify-content:space-between;
    margin-bottom: var(--mb-0-5);
}
.skills-name{
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    background-color: var(--first-color);
    color: #fff;
    padding: 10px;
    display: inline-block;
    border-radius: 5px;
}

.skills-content[skills-open="false"]{
    .skills-list{
        height: 0;
        overflow: hidden;
    }
    }
    .skills-content[skills-open="true"]{
    .skills-list{
        height: max-content;
        margin-bottom: var(--mb-2-5);
    }
    .skills-arrow{
        transform:rotate(-180deg);
    }
    }

    /* For small devices */
    @media screen and(max-width: 350px) {
        .skills-title{
            font-size: var(--normal-font-size);
        }
    }

    /* For medium devices */
    @media screen and (min-width: 568px) {
    .skills-container{
        grid-template-columns: repeat(2, 1fr);
    }
}

`