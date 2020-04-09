import React from 'react';


import  styles from  './components/App.module.css';
import {Cards,Chart,CountryPicker}from  './components';

import {fetchData} from './api/index';
import image from './image/image.png';
class App  extends  React.Component{

    state={

        data :{},
        country:'',

    }
    async componentDidMount(){

        const fetchedData =await fetchData();

        this.setState({data:fetchedData});
       
    }  
    handleCountryChange = async(country) =>{

       const fetchedData=await fetchData(country);

this.setState({data:fetchedData,country:country});

}
    render(){
        const {data,country}=this.state;

        return (
            

            <div className={styles.Container}>
               <img className={styles.image} src={image} alt="COVID-19" />
               <Cards data ={data} />
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
                 <Chart data={data} country={country}/>
            </div>  
        );
    }
}
export default App;
