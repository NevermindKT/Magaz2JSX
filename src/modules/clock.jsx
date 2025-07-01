import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledClock = styled.div`
    width: 100px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    font-family: sans-serif;
    transform: translateY(10px);

    p {
        margin: 5px;
    }

    &.morning {
        background-color: #ffeaa7;
        color: #2d3436;
    }

    &.day {
        background-color: #fab1a0;
        color: #2d3436;
    }

    &.evening {
        background-color: #74b9ff;
        color: white;
    }

    &.night {
        background-color: #2d3436;
        color: #dfe6e9;
    }
`;

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString();
    const formattedDate = time.toLocaleDateString();

    const hour = time.getHours();
    const timeClass =
        hour >= 6 && hour < 12
            ? "morning"
            : hour >= 12 && hour < 18
                ? "day"
                : hour >= 18 && hour <= 23
                    ? "evening"
                    : "night";

    return (
        <StyledClock className={timeClass}>
            <p>{formattedTime}</p>
            <p>{formattedDate}</p>
        </StyledClock>
    );
}

export default Clock;
