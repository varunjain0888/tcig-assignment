import { Icon } from 'react-icons-kit';
import {starFull} from 'react-icons-kit/icomoon/starFull';
import {location} from 'react-icons-kit/entypo/location'
import { withBaseIcon } from 'react-icons-kit';
import React, { Component }  from 'react';

const StarIconprop = withBaseIcon({ size: 20, style: {color: '#F57F17'}})
export const StarIcon = () => <StarIconprop icon={starFull}/>

const LocationIconprop = withBaseIcon({ size: 14, style: {color: '#0277BD'}})
export const LocationIcon = () => <LocationIconprop icon={location}/>