import React from "react";
import like from '../assets/like.png';
import liked from '../assets/liked.png';

class Likes extends React.Component {

    state = {
        likes:0,
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1,
        })

    }

    render() {
        return (
            <div className="flex items-center">
                <button className="ml-12 p-1 rounded-lg border-zinc-400 hover:scale-110" onClick={this.handleClick}><img className='w-8' src={like} alt="like" /></button>

                <div className="mx-2 p-2">{this.state.likes}</div>
                
            </div>
        
        )
    }
}

export default Likes;