// Copyright 2018-2020 Polyaxon, Inc.
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

// Code generated by go-swagger; DO NOT EDIT.

package agents_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// NewUpdateAgentTokenParams creates a new UpdateAgentTokenParams object
// with the default values initialized.
func NewUpdateAgentTokenParams() *UpdateAgentTokenParams {
	var ()
	return &UpdateAgentTokenParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewUpdateAgentTokenParamsWithTimeout creates a new UpdateAgentTokenParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewUpdateAgentTokenParamsWithTimeout(timeout time.Duration) *UpdateAgentTokenParams {
	var ()
	return &UpdateAgentTokenParams{

		timeout: timeout,
	}
}

// NewUpdateAgentTokenParamsWithContext creates a new UpdateAgentTokenParams object
// with the default values initialized, and the ability to set a context for a request
func NewUpdateAgentTokenParamsWithContext(ctx context.Context) *UpdateAgentTokenParams {
	var ()
	return &UpdateAgentTokenParams{

		Context: ctx,
	}
}

// NewUpdateAgentTokenParamsWithHTTPClient creates a new UpdateAgentTokenParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewUpdateAgentTokenParamsWithHTTPClient(client *http.Client) *UpdateAgentTokenParams {
	var ()
	return &UpdateAgentTokenParams{
		HTTPClient: client,
	}
}

/*UpdateAgentTokenParams contains all the parameters to send to the API endpoint
for the update agent token operation typically these are written to a http.Request
*/
type UpdateAgentTokenParams struct {

	/*Agent
	  Agent

	*/
	Agent string
	/*Body
	  Token body

	*/
	Body *service_model.V1Token
	/*Owner
	  Owner of the namespace

	*/
	Owner string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the update agent token params
func (o *UpdateAgentTokenParams) WithTimeout(timeout time.Duration) *UpdateAgentTokenParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the update agent token params
func (o *UpdateAgentTokenParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the update agent token params
func (o *UpdateAgentTokenParams) WithContext(ctx context.Context) *UpdateAgentTokenParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the update agent token params
func (o *UpdateAgentTokenParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the update agent token params
func (o *UpdateAgentTokenParams) WithHTTPClient(client *http.Client) *UpdateAgentTokenParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the update agent token params
func (o *UpdateAgentTokenParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAgent adds the agent to the update agent token params
func (o *UpdateAgentTokenParams) WithAgent(agent string) *UpdateAgentTokenParams {
	o.SetAgent(agent)
	return o
}

// SetAgent adds the agent to the update agent token params
func (o *UpdateAgentTokenParams) SetAgent(agent string) {
	o.Agent = agent
}

// WithBody adds the body to the update agent token params
func (o *UpdateAgentTokenParams) WithBody(body *service_model.V1Token) *UpdateAgentTokenParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the update agent token params
func (o *UpdateAgentTokenParams) SetBody(body *service_model.V1Token) {
	o.Body = body
}

// WithOwner adds the owner to the update agent token params
func (o *UpdateAgentTokenParams) WithOwner(owner string) *UpdateAgentTokenParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the update agent token params
func (o *UpdateAgentTokenParams) SetOwner(owner string) {
	o.Owner = owner
}

// WriteToRequest writes these params to a swagger request
func (o *UpdateAgentTokenParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param agent
	if err := r.SetPathParam("agent", o.Agent); err != nil {
		return err
	}

	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
