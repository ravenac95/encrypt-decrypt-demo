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

const userId = new URL(window.location.href).searchParams.get('userId');
const protocol = new URL(window.location.href).searchParams.get('protocol');

function isHtmlProtocol() { return protocol && protocol.toLowerCase() === 'html'; }


//Revoke the policy by its UUID
async function revokePolicy(uuid) {

  forceLoginIfNecessary();
  const client = buildClient();

  await client.revokePolicy(uuid);
}

//Update the policy by its UUID
async function updatePolicy(policy) {

  forceLoginIfNecessary();
  const client = buildClient();

  await client.updatePolicy(policy.build());
}


module.exports = {
  revokePolicy,
  updatePolicy,
  isHtmlProtocol
};
