// MIT License
//
// Copyright (c) 2019 Virtru Corporation
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/**
	This file is to be compiled with browserify to be used by the simple example page.
	See package.json (build) for more info.
**/

//Require all node modules needed to be access by the browser
const moment = require('moment');

//Imports for our simple example
const simpleTDFUtil = require('./saas-tdf-util.js');
const simpleEncryptDecrypt = require('./saas-encrypt-decrypt.js');

const imports = [simpleTDFUtil, simpleEncryptDecrypt];

//Load all global properties of our explicitly imported modules on the window
imports.forEach((i) => {
  Object.keys(i).forEach((key) => {
    window[key] = i[key];
  });
});

//Add other necessary modules on the window
window.moment = moment;
