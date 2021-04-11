API Proxy
========

#### Cloud Proxy Function to Tomorrow.io API ####
Safeguard API keys used in client-side demos by proxying request through a cloud function.

### What's Included ###
A single, simple google cloud function to proxy the Tomorrow.io API using express and [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware), thereby keeping the api key safe.

### Usage ###
[Download the GCP SDK](https://cloud.google.com/sdk/docs/install) and run `yarn deploy` to push it to the current project, then make sure to add your `TOMORROW_KEY` as an environment variable.

### Contributors ###
This project is inspired by the [GCP Proxy Func](https://github.com/joshuatz/gcp-proxy-func) repo.

### License ###
Licensed under the [MIT License](./LICENSE).