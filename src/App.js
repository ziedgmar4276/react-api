import React from 'react';


import  styles from  './components/App.module.css';
import {Cards,Chart,CountryPicker}from  './components';

import {fetchData} from './api/index';
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
               <h2 className={styles.h2}>covid-19</h2>
               <Cards data ={data} />
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
                 <Chart data={data} country={country}/>
                 <h5 className={styles.h5}>by zied gmar</h5>
            </div>  
        );
    }
}
export default App;
