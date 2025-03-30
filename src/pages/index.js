import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  const apis = [
    {id: 'petstore', title: 'Petstore API'},
    {id: 'github', title: 'GitHub API'},
  ];

  return (
    <Layout>
      <div className="container">
        <h1>API Documentation</h1>
        <div className="row">
          {apis.map((api) => (
            <div className="col col--4" key={api.id}>
              <a href={`/apis/${api.id}`} className="card">
                <div className="card__body">
                  <h3>{api.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}