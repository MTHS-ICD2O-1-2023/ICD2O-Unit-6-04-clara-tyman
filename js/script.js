// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara Tyman
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('radius')
  console.log(radius)

  // process
  const volume = 4 / 3 * Math.PI * Math.pow(radius, 3)
  const dimensions =
    "<ul>\n<li>radius = " +
    radius

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}