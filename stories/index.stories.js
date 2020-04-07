import React from 'react';
import  Colors  from '../src/components/color/Color';
import Grid  from '../src/components/grid/Grid';
import Typography from '../src/components/typography/Typography';
import Button from '../src/components/button/button';
import Input from '../src/components/input/input';
import Navigation from '../src/components/Navigation/navigation';
import Notification from '../src/components/Notification/notification';
import Popups from '../src/components/popups/popups';
import Steppers from '../src/components/Steppers/Steppers';
import Dropdowns from '../src/components/Dropdown/dropdown';
import Tables from '../src/components/Table/Tables';
import ChipsTags from '../src/components/ChipsTags/ChipsTags';
import Sliders from '../src/components/Sliders/Sliders';
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
  storiesOf("Popups", module)
  .add("Popups", () => (
    <Popups />
  ))
  storiesOf("Steppers", module)
  .add("Steppers", () => (
    <Steppers />
  ))
  storiesOf("Dropdowns", module)
  .add("Dropdowns", () => (
    <Dropdowns />
  ))

// manoj stories start
  storiesOf("Tables", module)
  .add("Table", () => (
    <Tables />
  ))

  storiesOf("ChipsTags", module)
  .add("Chips & Tags", () => (
    <ChipsTags />
  ))

   storiesOf("Sliders", module)
  .add("Slider", () => (
    <Sliders />
  ))

  // manoj stories start
  
 
 