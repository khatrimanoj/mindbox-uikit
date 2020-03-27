import React from 'react';
import  Colors  from '../src/components/color/Color';
import Grid  from '../src/components/grid/Grid';
import Typography from '../src/components/typography/Typography';
import Button from '../src/components/button/button';
import Input from '../src/components/input/input';
import Navigation from '../src/components/Navigation/navigation';
import Notification from '../src/components/Notification/notification';
import Tables from '../src/components/Table/Tables'
import { storiesOf } from "@storybook/react";


  storiesOf("Styles", module)
  .add("Typography", () => (
    <Typography />
  ))
  .add("Grid", () => (
    <Grid />
  ))
  .add("Colors", () => (
    <Colors />
  ))
  .add("Button", () => (
    <Button />
  ))

  storiesOf("Input", module)
  .add("Input", () => (
    <Input />
  ))

  storiesOf("Navigation", module)
  .add("Navigation", () => (
    <Navigation />
  ))

  storiesOf("Notification", module)
  .add("Notification", () => (
    <Notification />
  ))


  storiesOf("Tables", module)
  .add("Table", () => (
    <Tables />
  ))
  
  
 
 