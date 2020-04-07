import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import {alignLeft} from 'react-icons-kit/feather/alignLeft';
import {alignCenter} from 'react-icons-kit/feather/alignCenter';
import {alignRight} from 'react-icons-kit/feather/alignRight';

class togglbtn extends Component {
    render() {
        return (
            <>
            <div class="radiobuttons mb-30">
                 <div class="radio-inline"> 
                     <input name="radio" value="1" id="radio1" type="radio"  />
                     <label for="radio1">One</label>
                 </div>  
                 <div class="radio-inline">
                     <input name="radio" value="2" id="radio2" type="radio" />
                     <label for="radio2">two</label>
                 </div>
                 <div class="radio-inline">
                     <input name="radio" value="3" id="radio3" type="radio" />
                     <label for="radio3">Three</label>
                 </div>
             </div>
             <div class="radiobuttons mb-30 primary-chack">
                <div class="radio-inline"> 
                    <input name="radio" value="4" id="s" type="radio"  />
                    <label for="s"><Icon icon={alignLeft} size={20} /></label>
                </div>  
                <div class="radio-inline">
                    <input name="radio" value="5" id="m" type="radio" />
                    <label for="m"><Icon icon={alignCenter} size={20} /></label>
                </div>
                <div class="radio-inline">
                    <input name="radio" value="6" id="l" type="radio" />
                    <label for="l"><Icon icon={alignRight} size={20} /></label>
                </div>
               
            </div>
             <div class="radiobuttons mb-30">
                <div class="radio-inline"> 
                    <input name="radio" value="7" id="s" type="radio"  />
                    <label for="s">S</label>
                </div>  
                <div class="radio-inline">
                    <input name="radio" value="8" id="m" type="radio" />
                    <label for="m">M</label>
                </div>
                <div class="radio-inline">
                    <input name="radio" value="9" id="l" type="radio" />
                    <label for="l">L</label>
                </div>
                <div class="radio-inline">
                    <input name="radio" value="10" id="xl" type="radio" />
                    <label for="xl">XL</label>
                </div>
            </div>

            <div className="w-100"></div>

            <div class="radiobuttons wb mb-30">
                 <div class="radio-inline"> 
                     <input name="radio" value="11" id="radio21" type="radio"  />
                     <label for="radio21">One</label>
                 </div>  
                 <div class="radio-inline">
                     <input name="radio" value="12" id="radio22" type="radio" />
                     <label for="radio22">two</label>
                 </div>
                 <div class="radio-inline">
                     <input name="radio" value="13" id="radio23" type="radio" />
                     <label for="radio23">Three</label>
                 </div>
             </div>
             <div class="radiobuttons wb primary-chack mb-30">
                <div class="radio-inline"> 
                    <input name="radio" value="14" id="2s" type="radio"  />
                    <label for="2s"><Icon icon={alignLeft} size={20} /></label>
                </div>  
                <div class="radio-inline">
                    <input name="radio" value="15" id="2m" type="radio" />
                    <label for="2m"><Icon icon={alignCenter} size={20} /></label>
                </div>
                <div class="radio-inline">
                    <input name="radio" value="16" id="2l" type="radio" />
                    <label for="2l"><Icon icon={alignRight} size={20} /></label>
                </div>
               
            </div>
             <div class="radiobuttons wb mb-30">
                <div class="radio-inline"> 
                    <input name="radio" value="17" id="22s" type="radio"  />
                    <label for="s">S</label>
                </div>  
                <div class="radio-inline">
                    <input name="radio" value="18" id="22m" type="radio" />
                    <label for="22m">M</label>
                </div>
                <div class="radio-inline">
                    <input name="radio" value="19" id="22l" type="radio" />
                    <label for="22l">L</label>
                </div>
                <div class="radio-inline">
                    <input name="radio" value="20" id="22xl" type="radio" />
                    <label for="22xl">XL</label>
                </div>
            </div>
            </>
        );
    }
}

export default togglbtn;