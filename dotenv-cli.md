Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6
PS D:\Moinul\Projects\React\reactjs-Interacts-webPage> npx dotenv-vault push
npx: installed 175 in 12.634s
x Aborted.
Code: MISSING_DOTENV_VAULT
Suggestion: Run, npx dotenv-vault new
» Error: Missing .env.vault (DOTENV_VAULT).
PS D:\Moinul\Projects\React\reactjs-Interacts-webPage> npx dotenv-vault new vlt_b3042c8c050433ba3152ab2f6e1467d8fd5047eb9318531092a41e0c3db66d07
local: Adding .env.vault (DOTENV_VAULT)... done
local: Added to .env.vault (DOTENV_VAULT=vlt_b3042...)

Next run npx dotenv-vault login
PS D:\Moinul\Projects\React\reactjs-Interacts-webPage> npx dotenv-vault login
local: Press y (or any key) to open up the browser to login and generate credential (.env.me) or q to exit: y
local: Opening browser to https://vault.dotenv.org/login?DOTENV_VAULT=vlt_b3042c8c050433ba3152ab2f6e1467d8fd5047eb9318531092a41e0c3db66d07&requestUid=req_d5213f5b3a3dc783aa546cd60ef43bbcd2192e2d1663967113c676251d7dc488
local: Waiting for login and credential (.env.me) to be generated... done
local: Created .env.me (DOTENV_ME=me_21fc4f...)

Next run npx dotenv-vault open
PS D:\Moinul\Projects\React\reactjs-Interacts-webPage> npx dotenv-vault open
npx: installed 175 in 7.053s
local: Press y (or any key) to open up the browser to view your project or q to exit: y
local: Opening project page... done
local: Opening browser to https://vault.dotenv.org/open?DOTENV_VAULT=vlt_b3042c8c050433ba3152ab2f6e1467d8fd5047eb9318531092a41e0c3db66d07&environment=undefined
PS D:\Moinul\Projects\React\reactjs-Interacts-webPage> npx dotenv-vault push
npx: installed 175 in 14.091s
remote: Securely pushing (.env)... done  
remote: Securely pushed development (.env)

Run npx dotenv-vault open to view in the ui
PS D:\Moinul\Projects\React\reactjs-Interacts-webPage>
