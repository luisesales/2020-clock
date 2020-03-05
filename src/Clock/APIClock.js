import React, {Component} from 'react';

class APIClock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            local: props.local ? props.local : "Europe/London", 
            date: new Date()
        };
    }

    componentDidMount() {
        setInterval(() => this.Load(), 1000)
    }

    render(){
        let {isLoaded, date, error, local} = this.state;
        if(!error){
            if(!isLoaded){
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
                        <p>{date ? date : "Not Defined"}</p>
                    </div>  
                )
            }
        }
        else{
            return(
                <p>Error "{error}" was detected</p>
            )
        }
    }

    Load(){        
        const BASE_URL = 'http://worldtimeapi.org/api/timezone/'+this.props.local;
        fetch(BASE_URL).then(results => {
             results.json();
        }).then((results)=> this.JsonResult(results), (error) => this.JsonError(error))
    }
    
    JsonResult(results) {
        if(!results){this.setState({
            error : null,                    
            local: null,
            date : new Date()
        })}     
        else{         
            this.setState({
                isLoaded : true,
                error: null,
                local: this.props.local,
                date: results.datetime
                
            })
        }
    }

    JsonError(error) {
        console.info(error)
    }
}
export default APIClock