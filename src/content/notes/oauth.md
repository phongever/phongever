---
title: OAuth
tags:
  - Software development
  - Web dev
---

A user chooses the login option

Redirect to Google for user consent

Append `respond_type`, `client_id`, `redirect_uri`, `scope`, and `state`params to the redirected URL

`client_id` is used to identify the application

The `state` is an optional random string used for security check

Store `state` in the cookie header for verifying later

After the user agrees to share the data specified by `scope`, Google redirects to `redirect_uri`, appending `code` and `state` as params

When the browser calls the `redirect_uri`, the server extracts `code` and `state`, then verify with the `state` in the cookie header

If they match, continue exchanging code for the token

When requesting the token, include `code`, `redirect_uri`, `client_id`, and `client_secret` in the body

The response contains an `access_token` key

Use the key as `Bearer` as authorization to get user info

https://annotate.dev/p/hello-world/learn-oauth-2-0-by-building-your-own-oauth-client-U2HaZNtvQojn4F
