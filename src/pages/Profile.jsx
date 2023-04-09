import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfilePic from "../assets/gaurav.jpg";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Input, Paper, TextField } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Profile = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="m-0">
            <Navbar type={"verified"} />

            <div className="flex items-center px-20">
                <div className="mx-20 mt-10 flex gap-0 border border-grey-500 flex-col">
                    <div className="flex flex-row px-5 py-1 items-center">
                        <div className="flex overflow-clip w-20 h-20 rounded-full">
                            <img src={ProfilePic} className="object-contain" alt="Profile" width={'100%'} />
                        </div>
                        <div className=" flex flex-col p-5 gap-5">
                            <div>Upload your Image</div>
                            <div>
                                <button className="border border-purple-700 text-purple-700 text-lg rounded-md w-full">Choose Image</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="py-1">
                            Gaurav Rai Bhandya
                        </div>
                        <div className="py-1">
                            Professional Title
                        </div>
                        <div className="py-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <form action="" method="post">
                        <div>
                            <span className="text-[40px] font-bold">Settings</span>
                            <Paper elevation={2} sx={{ marginTop: '5px' }}>
                                <div className="shadow-md  w-[768px] p-3 flex flex-col gap-5">
                                    <div className="text-[25px] font-bold p-3">Profile</div>
                                    <div className="px-5">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        ex fuga officia eius odio nemo.
                                    </div>

                                    <div className="flex items-stretch gap-5">
                                        <div className="flex flex-col">
                                            <label htmlFor="">Full Name</label>
                                            <div className="border-2 rounded-md border-gray-300 p-2 w-[346px] h-[36px] flex items-center">
                                                <input
                                                    style={{ outline: 'none', border: 'none', background: "none", width: '340px' }}
                                                    type="text"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="">Username</label>
                                            <div className="border-2 rounded-md border-gray-300 p-2 w-[346px] h-[36px] flex items-center">
                                                <input
                                                    style={{ outline: 'none', border: 'none', background: "none", width: '340px' }}
                                                    type="text"
                                                    placeholder="Your username"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" flex flex-col">
                                        <label htmlFor="">Profession</label>
                                        <div>
                                            <Select sx={{ outline: 'none', border: 'none', background: "none", width: '340px', height: '40px' }}
                                                id="profession"
                                                name="profession"
                                                label="Profession">
                                                <MenuItem value="volvo">option</MenuItem>
                                                <MenuItem value="saab">option 1</MenuItem>
                                                <MenuItem value="fiat">option 2</MenuItem>
                                                <MenuItem value="audi">option 3</MenuItem>
                                                <MenuItem value="audi">option 4</MenuItem>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="">E-mail</label>
                                        <div className="border-2 rounded-md border-gray-300 p-2 w-[346px] h-[36px] flex items-center">
                                            <input
                                                style={{ outline: 'none', border: 'none', background: "none", width: '340px' }}
                                                type="Email" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="">Bio</label>
                                        <div className="w-full" >
                                            <TextField size="medium" maxRows={2} multiline sx={{ width: '720px' }}></TextField>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
