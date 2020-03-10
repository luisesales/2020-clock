import React, {Component} from 'react';

class APIClock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            local: props.local ? props.local : "Europe/London", 
            date: null
        };
    }

    componentDidMount() {
        setInterval(() => this.Load(), 1000)
    }

    render(){
        let {isLoaded, date, error, local} = this.state;
        if(error){
            return(
                <div>
                    <p>Error "{error}" was detected</p>
                </div>
            )
        } 
        else if(!isLoaded){
            return (
                <div>
                    <p>The Date is Loading</p>
                </div>
            )
        }
        else{
            return (
                <div>
                    <p>The {local ? local : "Not Defined"} Date is:</p>
                    <p>{date ? date.toLocaleTimeString() : "Not Defined"}</p>
                </div>  
            )
        }
    }
    

    Load(){        
        const BASE_URL = 'http://worldtimeapi.org/api/timezone/'+this.props.local;
        fetch(BASE_URL).then(results => {
             return  results ? results.json() : {datetime: null};
        }).then((results)=> this.JsonResult(results), (error) => this.JsonError(error))
    }
    
    JsonResult(results) {
        this.setState({
            isLoaded : true,
            error: null,
            local: this.props.local,
            date: new Date(results.datetime)                
        })                
    }

    JsonError(error) {        
        this.setState({            
            error : error.message                  
        })
    }
}
export default APIClock