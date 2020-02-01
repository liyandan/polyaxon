// Copyright 2019 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.ProjectSearchesV1Api();
  });

  describe('(package)', function() {
    describe('ProjectSearchesV1Api', function() {
      describe('createProjectSearch', function() {
        it('should call createProjectSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for createProjectSearch call and complete the assertions
          /*
          var owner = "owner_example";
          var project = "project_example";
          var body = new PolyaxonSdk.V1Search();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.disabled = false;
          body.deleted = false;
          body.spec = new PolyaxonSdk.V1SearchSpec();
          body.spec.query = "";
          body.spec.sort = "";
          body.spec.limit = 0;
          body.spec.groupby = "";
          body.spec.columns = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.createProjectSearch(owner, project, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Search);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                  expect(data.spec.query).to.be.a('string');
              expect(data.spec.query).to.be("");
              expect(data.spec.sort).to.be.a('string');
              expect(data.spec.sort).to.be("");
              expect(data.spec.limit).to.be.a('number');
              expect(data.spec.limit).to.be(0);
              expect(data.spec.groupby).to.be.a('string');
              expect(data.spec.groupby).to.be("");
              expect(data.spec.columns).to.be.a('string');
              expect(data.spec.columns).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteProjectSearch', function() {
        it('should call deleteProjectSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteProjectSearch call
          /*
          var owner = "owner_example";
          var project = "project_example";
          var uuid = "uuid_example";

          instance.deleteProjectSearch(owner, project, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getProjectSearch', function() {
        it('should call getProjectSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for getProjectSearch call and complete the assertions
          /*
          var owner = "owner_example";
          var project = "project_example";
          var uuid = "uuid_example";

          instance.getProjectSearch(owner, project, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Search);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                  expect(data.spec.query).to.be.a('string');
              expect(data.spec.query).to.be("");
              expect(data.spec.sort).to.be.a('string');
              expect(data.spec.sort).to.be("");
              expect(data.spec.limit).to.be.a('number');
              expect(data.spec.limit).to.be(0);
              expect(data.spec.groupby).to.be.a('string');
              expect(data.spec.groupby).to.be("");
              expect(data.spec.columns).to.be.a('string');
              expect(data.spec.columns).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listProjectSearchNames', function() {
        it('should call listProjectSearchNames successfully', function(done) {
          // TODO: uncomment, update parameter values for listProjectSearchNames call and complete the assertions
          /*
          var owner = "owner_example";
          var project = "project_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.listProjectSearchNames(owner, project, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListSearchesResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1Search);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.deleted).to.be.a('boolean');
                expect(data.deleted).to.be(false);
                expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                      expect(data.spec.query).to.be.a('string');
                  expect(data.spec.query).to.be("");
                  expect(data.spec.sort).to.be.a('string');
                  expect(data.spec.sort).to.be("");
                  expect(data.spec.limit).to.be.a('number');
                  expect(data.spec.limit).to.be(0);
                  expect(data.spec.groupby).to.be.a('string');
                  expect(data.spec.groupby).to.be("");
                  expect(data.spec.columns).to.be.a('string');
                  expect(data.spec.columns).to.be("");
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listProjectSearches', function() {
        it('should call listProjectSearches successfully', function(done) {
          // TODO: uncomment, update parameter values for listProjectSearches call and complete the assertions
          /*
          var owner = "owner_example";
          var project = "project_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.listProjectSearches(owner, project, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListSearchesResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1Search);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.deleted).to.be.a('boolean');
                expect(data.deleted).to.be(false);
                expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                      expect(data.spec.query).to.be.a('string');
                  expect(data.spec.query).to.be("");
                  expect(data.spec.sort).to.be.a('string');
                  expect(data.spec.sort).to.be("");
                  expect(data.spec.limit).to.be.a('number');
                  expect(data.spec.limit).to.be(0);
                  expect(data.spec.groupby).to.be.a('string');
                  expect(data.spec.groupby).to.be("");
                  expect(data.spec.columns).to.be.a('string');
                  expect(data.spec.columns).to.be("");
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchProjectSearch', function() {
        it('should call patchProjectSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for patchProjectSearch call and complete the assertions
          /*
          var owner = "owner_example";
          var project = "project_example";
          var search_uuid = "search_uuid_example";
          var body = new PolyaxonSdk.V1Search();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.disabled = false;
          body.deleted = false;
          body.spec = new PolyaxonSdk.V1SearchSpec();
          body.spec.query = "";
          body.spec.sort = "";
          body.spec.limit = 0;
          body.spec.groupby = "";
          body.spec.columns = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.patchProjectSearch(owner, project, search_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Search);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                  expect(data.spec.query).to.be.a('string');
              expect(data.spec.query).to.be("");
              expect(data.spec.sort).to.be.a('string');
              expect(data.spec.sort).to.be("");
              expect(data.spec.limit).to.be.a('number');
              expect(data.spec.limit).to.be(0);
              expect(data.spec.groupby).to.be.a('string');
              expect(data.spec.groupby).to.be("");
              expect(data.spec.columns).to.be.a('string');
              expect(data.spec.columns).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('promoteProjectSearch', function() {
        it('should call promoteProjectSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for promoteProjectSearch call
          /*
          var owner = "owner_example";
          var project = "project_example";
          var uuid = "uuid_example";

          instance.promoteProjectSearch(owner, project, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateProjectSearch', function() {
        it('should call updateProjectSearch successfully', function(done) {
          // TODO: uncomment, update parameter values for updateProjectSearch call and complete the assertions
          /*
          var owner = "owner_example";
          var project = "project_example";
          var search_uuid = "search_uuid_example";
          var body = new PolyaxonSdk.V1Search();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.disabled = false;
          body.deleted = false;
          body.spec = new PolyaxonSdk.V1SearchSpec();
          body.spec.query = "";
          body.spec.sort = "";
          body.spec.limit = 0;
          body.spec.groupby = "";
          body.spec.columns = "";
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.updateProjectSearch(owner, project, search_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Search);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            expect(data.spec).to.be.a(PolyaxonSdk.V1SearchSpec);
                  expect(data.spec.query).to.be.a('string');
              expect(data.spec.query).to.be("");
              expect(data.spec.sort).to.be.a('string');
              expect(data.spec.sort).to.be("");
              expect(data.spec.limit).to.be.a('number');
              expect(data.spec.limit).to.be(0);
              expect(data.spec.groupby).to.be.a('string');
              expect(data.spec.groupby).to.be("");
              expect(data.spec.columns).to.be.a('string');
              expect(data.spec.columns).to.be("");
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));