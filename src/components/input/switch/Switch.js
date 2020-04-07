import React, { Component } from 'react';
import Switchtoggle from'./switchtoggle/Switch_toggle';
class Switch extends Component {
    render() {
        return (
            <>
             <div className="col-md-3">
                  <Switchtoggle id="switch" label="Enabled" type="switch" />
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch1" label="Enabled" type="switch" checked/>
             </div>
             <div className="col-md-3">
                   <Switchtoggle id="switch2" label="style1" style="style1" type="switch" />
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch3" label="style2" style="style2" type="switch" />
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch4" label="style3" style="style3" type="switch" />
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch5" label="style4" style="style4" type="switch" />
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch6" label="style5" style="style5" type="switch" />
             </div>
             <div className="pull-left w-100 mb-30"></div>
             <div class="col-md-12 mb-30">
                  <p class="body1 ">Disable</p>
             </div>
             
             <div className="pull-left w-100 mb30"></div>
             <div className="col-md-3">
                  <Switchtoggle id="switch7" label="Enabled" type="switch" disabled/>
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch8" label="Enabled" type="switch" checked disabled/>
             </div>
             <div className="col-md-3">
                   <Switchtoggle id="switch9" label="style1" style="style1" type="switch" disabled/>
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch10" label="style2" style="style2" type="switch" disabled/>
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch11" label="style3" style="style3" type="switch" disabled/>
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch12" label="style4" style="style4" type="switch" disabled/>
             </div>
             <div className="col-md-3">
                 <Switchtoggle id="switch13" label="style5" style="style5" type="switch" />
             </div>
            </>
        );
    }
}

export default Switch;