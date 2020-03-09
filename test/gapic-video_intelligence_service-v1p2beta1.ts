// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const videointelligenceserviceModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockLongRunningGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: {} | null
) {
  return (request: {}) => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
describe('v1p2beta1.VideoIntelligenceServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      videointelligenceserviceModule.v1p2beta1.VideoIntelligenceServiceClient
        .servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      videointelligenceserviceModule.v1p2beta1.VideoIntelligenceServiceClient
        .apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port =
      videointelligenceserviceModule.v1p2beta1.VideoIntelligenceServiceClient
        .port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new videointelligenceserviceModule.v1p2beta1.VideoIntelligenceServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new videointelligenceserviceModule.v1p2beta1.VideoIntelligenceServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new videointelligenceserviceModule.v1p2beta1.VideoIntelligenceServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.videoIntelligenceServiceStub, undefined);
    await client.initialize();
    assert(client.videoIntelligenceServiceStub);
  });
  it('has close method', () => {
    const client = new videointelligenceserviceModule.v1p2beta1.VideoIntelligenceServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });
  describe('annotateVideo', () => {
    it('invokes annotateVideo without error', done => {
      const client = new videointelligenceserviceModule.v1p2beta1.VideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.videointelligence.v1p2beta1.IAnnotateVideoRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.annotateVideo = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .annotateVideo(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then((responses: [Operation]) => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes annotateVideo with error', done => {
      const client = new videointelligenceserviceModule.v1p2beta1.VideoIntelligenceServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.videointelligence.v1p2beta1.IAnnotateVideoRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.annotateVideo = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .annotateVideo(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });
  });
});
