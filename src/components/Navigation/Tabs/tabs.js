import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Icon } from 'react-icons-kit';
import {camera} from 'react-icons-kit/feather/camera';
import {video} from 'react-icons-kit/feather/video';
import {headphones} from 'react-icons-kit/feather/headphones';

class tabs extends Component {
    render() {
        return (
            <>
                <div className="col-md-5">
                     <Tabs>
                        <TabList className="defult-tab primary-tab ">
                            <Tab>First Tab</Tab>
                            <Tab>Second Tab</Tab>
                            <Tab>Third Tab</Tab>
                            <Tab>Fourth Tab</Tab>
                        </TabList>
                    </Tabs>
                    <div className="w-100 mb-30 pull-left"></div>
                    <Tabs>
                        <TabList className="defult-tab lg-tab red-tab mb-30">
                            <Tab>First Tab</Tab>
                            <Tab>Second Tab</Tab>
                            <Tab>Third Tab</Tab>
                            <Tab>Fourth Tab</Tab>
                        </TabList>
                    
                    </Tabs>
                </div>
                <div className="col-md-4">
                <Tabs>
                        <TabList className="defult-tab  secondary-tab mb-30">
                            <Tab><Icon icon={camera} size={20} /> Photo</Tab>
                            <Tab><Icon icon={video} size={20} /> Video</Tab>
                            <Tab><Icon icon={headphones} size={20} /> Hedphone</Tab>
                        </TabList>
                    
                    </Tabs>
                <div className="w-100 mb-30 pull-left"></div>
                <Tabs>
                        <TabList className="defult-tab lg-tab green-tab mb-30">
                            <Tab><Icon icon={camera} size={20} /> Photo</Tab>
                            <Tab><Icon icon={video} size={20} /> Video</Tab>
                            <Tab><Icon icon={headphones} size={20} /> Hedphone</Tab>
                        </TabList>
                    
                    </Tabs>
                </div>
                <div className="col-md-3">
                <Tabs>
                        <TabList className="defult-tab  orange-tab mb-30">
                            <Tab><Icon icon={camera} size={20} /> </Tab>
                            <Tab><Icon icon={video} size={20} /> </Tab>
                            <Tab><Icon icon={headphones} size={20} /> </Tab>
                        </TabList>
                    
                    </Tabs>
                <div className="w-100 mb-30 pull-left"></div>
                <Tabs>
                        <TabList className="defult-tab lg-tab violet-tab mb-30">
                            <Tab><Icon icon={camera} size={20} /> </Tab>
                            <Tab><Icon icon={video} size={20} /> </Tab>
                            <Tab><Icon icon={headphones} size={20} /> </Tab>
                        </TabList>
                    
                    </Tabs>
                </div>
                <div className="w-100 mb-70 pull-left"></div>
            </>
        );
    }
}

export default tabs;