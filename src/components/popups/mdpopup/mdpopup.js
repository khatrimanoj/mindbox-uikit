import React, { Component } from 'react';
import Inputtext from '../../input/inputs/inputtext/input_html';
import AvitarIcon from '../../../../src/images/avitar.png';
import Avitar from '../../Notification/avitar/avitar-dropdown/avitar_dropdownhtml';
import { Icon } from 'react-icons-kit';
import {plus} from 'react-icons-kit/feather/plus'

class mdpopup extends Component {
    render() {
        return (
            <>
            <div className="col-md-4">
                <div className="modal">
                    <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-body">
                                    <div class="subtitle2">Discard changes?</div>
                              </div>
                              <div className="modal-footer">
                                     <button class="btn btn-sm btn-line-primary">Cancel</button>
                                     <button class="btn btn-sm btn-primary">Discard</button>
                              </div>

                          </div>
                    </div>

                </div>
                <div className="modal">
                    <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-body">
                                    <div class="subtitle2">Discard changes?</div>
                              </div>
                              <div className="modal-footer">
                                     <button class="btn btn-sm btn-text-primary">Cancel</button>
                                     <button class="btn btn-sm btn-text-primary">Discard</button>
                              </div>

                          </div>
                    </div>

                </div>
                <div className="modal">
                    <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                   <div className="h5">Add a comment</div>
                              </div>
                              <div className="modal-body">
                              <Inputtext  msg="Assistive message"> </Inputtext>
                              </div>
                              <div className="modal-footer">
                                     <button class="btn btn-sm btn-text-primary">Cancel</button>
                                     <button class="btn btn-sm btn-text-primary">Discard</button>
                              </div>

                          </div>
                    </div>

                </div>
            </div>
             <div className="col-md-4">
                 <div className="modal">
                    <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <div className="h5">Are you sure?</div>
                              </div>
                              <div className="modal-body">
                                    <div class="body2 text-gray">More than 30 photos will be deleted from the gallery.</div>
                              </div>
                              <div className="modal-footer">
                                     <button class="btn btn-sm btn-line-primary">Cancel</button>
                                     <button class="btn btn-sm btn-primary">Ok</button>
                              </div>

                          </div>
                    </div>
                 </div>
                 <div className="modal">
                    <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <div className="h5">Are you sure?</div>
                              </div>
                              <div className="modal-body">
                                    <div class="body2 text-gray">More than 30 photos will be deleted from the gallery.</div>
                              </div>
                              <div className="modal-footer">
                                     <button class="btn btn-sm btn-text-primary">Cancel</button>
                                     <button class="btn btn-sm btn-text-primary">Ok</button>
                              </div>

                          </div>
                    </div>
                 </div>
             </div>
             <div className="col-md-4">
             <div className="modal">
                    <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <div className="h5">Choose account</div>
                              </div>
                              <div className="modal-body">
                                 
                                     
 
                                 <div className="row">
                                     <div className="col-md-12">
                                          <Avitar title="Benjamin Parker" hasRound><img src={AvitarIcon} /></Avitar>
                                     </div>
                                     <div className="col-md-12">
                                          <Avitar title="Benjamin Parker" hasRound><img src={AvitarIcon} /></Avitar>
                                     </div>
                                     <div className="col-md-12">
                                          <Avitar title="Benjamin Parker" hasRound><img src={AvitarIcon} /></Avitar>
                                     </div>
                                     <div className="col-md-12">
                                          <Avitar title="Add account" hasRound><span class="bg-dark-bg text-white"><Icon icon={plus} size={20} /></span></Avitar>
                                     </div>
                                
                                

                                 </div>
                                 
                              </div>
                             

                          </div>
                    </div>
                 </div>
             </div>
             </>
        );
    }
}

export default mdpopup;