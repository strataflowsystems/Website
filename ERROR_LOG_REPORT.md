# Website Error Log & Error-Path Report

Generated from repository search for error-related terms and error-handling code paths.

## Summary

- No dedicated runtime log files (for example, application `.log` files produced by the website) were found in source folders.
- Error handling is primarily implemented in ChatKit frontend components and the Cloudflare Pages function at `functions/api/chatkit/session.ts`.

## Potentially Relevant Error Locations

### Frontend: `src/components/chatkit/StrataBotChat.tsx`

- Throws an explicit error when `/api/chatkit/session` returns non-OK status:
  - `Unable to create ChatKit session (<status>): <body>`
- Throws if `client_secret` is missing from API response.

### Frontend: `src/components/chatkit/ChatKitWidget.tsx`

- Throws on failed session creation response (`!response.ok`).
- Throws when `client_secret` is missing.
- Logs widget mount/runtime issues with:
  - `console.error('Unable to mount ChatKit widget.', event);`

### Backend/API: `functions/api/chatkit/session.ts`

- Returns `500` with JSON error when required env vars are missing:
  - `OPENAI_API_KEY`
  - `OPENAI_CHATKIT_WORKFLOW_ID` (or fallback `OPENAI_WORKFLOW_ID`)
- On upstream OpenAI API errors, returns JSON containing:
  - `error` (upstream payload)
  - `openai_request_id`
- For `401/403`, includes a detailed `hint` about key/project/workflow alignment.


## Relevant URLs

- Frontend calls this relative endpoint for ChatKit session creation:
  - `/api/chatkit/session`
- If your site is deployed at `https://<your-domain>`, the full endpoint URL is:
  - `https://<your-domain>/api/chatkit/session`
- The backend function then calls OpenAI at:
  - `https://api.openai.com/v1/chatkit/sessions`

### Quick check URLs

- Local dev function URL (when running Pages local dev):
  - `http://localhost:8788/api/chatkit/session`
- Browser page where ChatKit mounts:
  - `https://<your-domain>/` (homepage)

## Commands Used

```bash
rg -n "error|exception|stack|trace|log" .
find /workspace/Website -maxdepth 4 \( -name "*.log" -o -name "*error*" -o -name "*exception*" \) -type f -print
nl -ba src/components/chatkit/StrataBotChat.tsx | sed -n '1,80p'
nl -ba src/components/chatkit/ChatKitWidget.tsx | sed -n '1,80p'
nl -ba functions/api/chatkit/session.ts | sed -n '1,140p'
```

## Notes

- Some `*error*` matches appear under `node_modules/` and represent dependency source/type files rather than website runtime logs.
