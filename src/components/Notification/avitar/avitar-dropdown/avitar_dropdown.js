import React, { Component } from 'react';
import AvitarIcon from '../../../../images/avitar.png';
import Avitartext from './avitar_dropdownhtml';


class avitar_dropdown extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} hasRound><img className="" src={AvitarIcon} /></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} hasRound haslg><img className="" src={AvitarIcon} /></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker"  avitar={AvitarIcon} hasRound hasDropdown> <img className="" src={AvitarIcon} /></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker"  avitar={AvitarIcon} hasRound hasDropdown haslg> <img className="" src={AvitarIcon} /></Avitartext> 
                </div>

                <div className="w-100 pull-left mb-50"></div>


                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} hasRound><span class=" bg-orange text-white">BS</span></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} hasRound  haslg><span class=" bg-primary text-white">BS</span></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker"  avitar={AvitarIcon} hasRound hasDropdown><span class=" bg-orange text-white">BS</span></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker"  avitar={AvitarIcon} hasRound hasDropdown haslg><span class=" bg-orange text-white">BS</span></Avitartext> 
                </div>

                <div className="w-100 pull-left mb-50"></div>

                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} ><img className="" src={AvitarIcon} /></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon}  haslg><img className="" src={AvitarIcon} /></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker"  avitar={AvitarIcon}  hasDropdown> <img className="" src={AvitarIcon} /></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker"  avitar={AvitarIcon}  hasDropdown haslg> <img className="" src={AvitarIcon} /></Avitartext> 
                </div>

                <div className="w-100 pull-left mb-50"></div>

                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon} ><span class=" bg-orange text-white">BS</span></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker" subtitle="Developer" avitar={AvitarIcon}   haslg><span class=" bg-primary text-white">BS</span></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker"  avitar={AvitarIcon}  hasDropdown><span class=" bg-orange text-white">BS</span></Avitartext> 
                </div>
                <div className="col-md-3">
                    <Avitartext title="Benjamin Parker"  avitar={AvitarIcon}  hasDropdown haslg><span class=" bg-orange text-white">BS</span></Avitartext> 
                </div>


             </div>
        );
    }
}

export default avitar_dropdown;