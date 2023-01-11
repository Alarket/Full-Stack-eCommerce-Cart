# 👇️ for macOS, Linux or Windows Git Bash
export NODE_OPTIONS=--openssl-legacy-provider

# ----------------------------------------------------

# 👇️ for Windows CMD (Command Prompt)
set NODE_OPTIONS=--openssl-legacy-provider

# ----------------------------------------------------

# 👇️ for Windows PowerShell
$env:NODE_OPTIONS="--openssl-legacy-provider"

# ----------------------------------------------------

# 👇️ for Docker (in your Dockerfile)
ENV NODE_OPTIONS="--openssl-legacy-provider"

I encountered a problem while trying to use "npm run dev" on the powershell terminal,
and only found running one of those codes, according to your system, to be the only solution.
You should run the respective one on the terminal before using "npm run dev".