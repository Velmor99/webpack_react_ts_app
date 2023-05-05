import React from 'react';
import {styled} from '@mui/system';

const Separator = styled('div')({
    width: "95%",
    backgroundColor: "#b9bbbe",
    height: "1px",
    position: "relative",
    marginTop: "20px",
    marginBottom: "10px",
});

const DateLabel = styled('span')({
    backgroundColor: "#36393f",
    position: "absolute",
    left: "35%",
    top: "-10px",
    color: "#b9bbbe",
    padding: "0 5px",
    fontSize: "14px",
})

interface IProps {
    date: React.ReactNode
}

const DateSeparator = ({date}: IProps) => {
    return (
        <Separator>
            <DateLabel>{date}</DateLabel>
        </Separator>
    )
}

export default DateSeparator