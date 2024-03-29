import React from "react";
import Button from "@mui/material/Button";

const BtnTimer = (props) => {
    return (
        <div>
            {props.status === 0 ? (
                <Button
                    color="success"
                    variant="contained"
                    onClick={props.start}
                >
                    Start
                </Button>
            ) : (
                ""
            )}

            {props.status === 1 ? (
                <div>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={props.stop}
                    >
                        Stop
                    </Button>{" "}
                    <Button variant="contained" onClick={props.reset}>
                        Reset
                    </Button>
                </div>
            ) : (
                ""
            )}

            {props.status === 2 ? (
                <div>
                    <Button
                        color="success"
                        variant="contained"
                        onClick={props.resume}
                    >
                        Resume
                    </Button>{" "}
                    <Button variant="contained" onClick={props.reset}>
                        Reset
                    </Button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default BtnTimer ;
