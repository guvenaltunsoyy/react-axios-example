import React from 'react';

class FilmName extends React.Component {
    state={
        name:{}
    };
    componentDidMount(){
        const { name } = this.props;
        name=JSON.parse(name);
        this.setState(name);
        console.log(this.state.name);
        
        
    }
    render() {
        
        return (
            <div>
                <h3>{this.props.name}</h3>
                </div>
        );
    }

} export default FilmName;