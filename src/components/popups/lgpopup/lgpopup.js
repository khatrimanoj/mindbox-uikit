import React, { Component } from 'react';
import offerbg from '../../../images/bg-popup.png';
import { Icon } from 'react-icons-kit';
import {downloadCloud} from 'react-icons-kit/feather/downloadCloud'


class lgpopup extends Component {
    render() {
        return (
            <>
             <div className="col-md-6">
                     <div className="modal lg-popup">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="offer-img">
                                     <img src={offerbg}/>
                                </div>
                               <div className="modal-header">
                                  <div className="h5">Special Offer</div>
                              </div>
                              <div className="modal-body">
                                    <div class="body2 text-gray">The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well.</div>
                              </div>
                                <div className="modal-footer">
                                        <button class="btn btn-sm btn-line-primary">Cancel</button>
                                        <button class="btn btn-sm btn-primary">Download</button>
                                </div>

                            </div>
                        </div>
                    </div>
             </div>  
             <div className="col-md-6">
             <div className="modal lg-popup">
                        <div className="modal-dialog">
                            <div className="modal-content text-center">
                                <div className="offer-img">
                                     <img src={offerbg}/>
                                </div>
                               <div className="modal-header">
                                  <div className="h5">Special Offer</div>
                              </div>
                              <div className="modal-body">
                                    <div class="body2 text-gray">The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down what seemed to be a very deep well.</div>
                              </div>
                                <div className="modal-footer">
                                       
                                        <button class="btn btn-sm btn-primary"> <Icon icon={downloadCloud} size={20} />&nbsp;&nbsp; Download</button>
                                </div>

                            </div>
                        </div>
                    </div>
             </div>  
            </>
        );
    }
}

export default lgpopup;