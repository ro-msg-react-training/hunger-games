# Hunger Games

## Branchign strategy

Each task (issue) should have its own branch and only one asignee. All work is done on these task branches. The task branch names should follow the following naming convention: `<issue_number>_<issue_description>`, for example: `1_implement_login`.

Commit messages should contain:
 * The issue number in the title.
 * (Brief)Detalis related to what was implemented.

Example:

```

1 - Implements login

Creates login dumb components.
Adds a new login service.

```

Once a task is done, a pull request should be opened between the task branch and `master`. Another developer (peer) should review the coding. After the review is done, the original developer must fix the issues and request a review again. This process is repeated until all comments are solved. When the pull request looks fine, the reviewer may approve and merge it.
