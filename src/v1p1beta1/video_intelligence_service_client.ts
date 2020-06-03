// Copyright 2020 Google LLC
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

import * as gax from 'google-gax';
import {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  LROperation,
} from 'google-gax';
import * as path from 'path';

import * as protos from '../../protos/protos';
import * as gapicConfig from './video_intelligence_service_client_config.json';
import {operationsProtos} from 'google-gax';
const version = require('../../../package.json').version;

/**
 *  Service that implements Google Cloud Video Intelligence API.
 * @class
 * @memberof v1p1beta1
 */
export class VideoIntelligenceServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  innerApiCalls: {[name: string]: Function};
  operationsClient: gax.OperationsClient;
  videoIntelligenceServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of VideoIntelligenceServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this
      .constructor as typeof VideoIntelligenceServiceClient;
    const servicePath =
      opts && opts.servicePath
        ? opts.servicePath
        : opts && opts.apiEndpoint
        ? opts.apiEndpoint
        : staticMembers.servicePath;
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.clientConfig = opts.clientConfig || {};

    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      opts.fallback = true;
    }
    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    this._gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this
      .constructor as typeof VideoIntelligenceServiceClient).scopes;
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    this._protos = this._gaxGrpc.loadProto(
      opts.fallback
        ? // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        : nodejsProtoPath
    );

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    const protoFilesRoot = opts.fallback
      ? this._gaxModule.protobuf.Root.fromJSON(
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('../../protos/protos.json')
        )
      : this._gaxModule.protobuf.loadSync(nodejsProtoPath);

    this.operationsClient = this._gaxModule
      .lro({
        auth: this.auth,
        grpc: 'grpc' in this._gaxGrpc ? this._gaxGrpc.grpc : undefined,
      })
      .operationsClient(opts);
    const annotateVideoResponse = protoFilesRoot.lookup(
      '.google.cloud.videointelligence.v1p1beta1.AnnotateVideoResponse'
    ) as gax.protobuf.Type;
    const annotateVideoMetadata = protoFilesRoot.lookup(
      '.google.cloud.videointelligence.v1p1beta1.AnnotateVideoProgress'
    ) as gax.protobuf.Type;

    this.descriptors.longrunning = {
      annotateVideo: new this._gaxModule.LongrunningDescriptor(
        this.operationsClient,
        annotateVideoResponse.decode.bind(annotateVideoResponse),
        annotateVideoMetadata.decode.bind(annotateVideoMetadata)
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.videoIntelligenceServiceStub) {
      return this.videoIntelligenceServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService.
    this.videoIntelligenceServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.videointelligence.v1p1beta1.VideoIntelligenceService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.videointelligence.v1p1beta1
            .VideoIntelligenceService,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const videoIntelligenceServiceStubMethods = ['annotateVideo'];
    for (const methodName of videoIntelligenceServiceStubMethods) {
      const callPromise = this.videoIntelligenceServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        this.descriptors.page[methodName] ||
          this.descriptors.stream[methodName] ||
          this.descriptors.longrunning[methodName]
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.videoIntelligenceServiceStub;
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'videointelligence.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'videointelligence.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------

  annotateVideo(
    request: protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      LROperation<
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoResponse,
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoProgress
      >,
      protos.google.longrunning.IOperation | undefined,
      {} | undefined
    ]
  >;
  annotateVideo(
    request: protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoRequest,
    options: gax.CallOptions,
    callback: Callback<
      LROperation<
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoResponse,
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoProgress
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  annotateVideo(
    request: protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoRequest,
    callback: Callback<
      LROperation<
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoResponse,
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoProgress
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Performs asynchronous video annotation. Progress and results can be
   * retrieved through the `google.longrunning.Operations` interface.
   * `Operation.metadata` contains `AnnotateVideoProgress` (progress).
   * `Operation.response` contains `AnnotateVideoResponse` (results).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.inputUri
   *   Input video location. Currently, only
   *   [Google Cloud Storage](https://cloud.google.com/storage/) URIs are
   *   supported, which must be specified in the following format:
   *   `gs://bucket-id/object-id` (other URI formats return
   *   {@link google.rpc.Code.INVALID_ARGUMENT|google.rpc.Code.INVALID_ARGUMENT}). For more information, see
   *   [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).
   *   A video URI may include wildcards in `object-id`, and thus identify
   *   multiple videos. Supported wildcards: '*' to match 0 or more characters;
   *   '?' to match 1 character. If unset, the input video should be embedded
   *   in the request as `input_content`. If set, `input_content` should be unset.
   * @param {Buffer} request.inputContent
   *   The video data bytes.
   *   If unset, the input video(s) should be specified via `input_uri`.
   *   If set, `input_uri` should be unset.
   * @param {number[]} request.features
   *   Required. Requested video annotation features.
   * @param {google.cloud.videointelligence.v1p1beta1.VideoContext} request.videoContext
   *   Additional video context and/or feature-specific parameters.
   * @param {string} [request.outputUri]
   *   Optional. Location where the output (in JSON format) should be stored.
   *   Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
   *   URIs are supported, which must be specified in the following format:
   *   `gs://bucket-id/object-id` (other URI formats return
   *   {@link google.rpc.Code.INVALID_ARGUMENT|google.rpc.Code.INVALID_ARGUMENT}). For more information, see
   *   [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).
   * @param {string} [request.locationId]
   *   Optional. Cloud region where annotation should take place. Supported cloud
   *   regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region
   *   is specified, a region will be determined based on video file location.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Operation]{@link google.longrunning.Operation}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  annotateVideo(
    request: protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          LROperation<
            protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoResponse,
            protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoProgress
          >,
          protos.google.longrunning.IOperation | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      LROperation<
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoResponse,
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoProgress
      >,
      protos.google.longrunning.IOperation | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      LROperation<
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoResponse,
        protos.google.cloud.videointelligence.v1p1beta1.IAnnotateVideoProgress
      >,
      protos.google.longrunning.IOperation | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    this.initialize();
    return this.innerApiCalls.annotateVideo(request, options, callback);
  }
  /**
   * Check the status of the long running operation returned by the annotateVideo() method.
   * @param {String} name
   *   The operation name that will be passed.
   * @returns {Promise} - The promise which resolves to an object.
   *   The decoded operation object has result and metadata field to get information from.
   *
   * @example:
   *   const decodedOperation = await checkAnnotateVideoProgress(name);
   *   console.log(decodedOperation.result);
   *   console.log(decodedOperation.done);
   *   console.log(decodedOperation.metadata);
   *
   */
  async checkAnnotateVideoProgress(
    name: string
  ): Promise<
    LROperation<
      protos.google.cloud.videointelligence.v1p1beta1.AnnotateVideoResponse,
      protos.google.cloud.videointelligence.v1p1beta1.AnnotateVideoProgress
    >
  > {
    const request = new operationsProtos.google.longrunning.GetOperationRequest(
      {name}
    );
    const [operation] = await this.operationsClient.getOperation(request);
    const decodeOperation = new gax.Operation(
      operation,
      this.descriptors.longrunning.annotateVideo,
      gax.createDefaultBackoffSettings()
    );
    return decodeOperation as LROperation<
      protos.google.cloud.videointelligence.v1p1beta1.AnnotateVideoResponse,
      protos.google.cloud.videointelligence.v1p1beta1.AnnotateVideoProgress
    >;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.videoIntelligenceServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
