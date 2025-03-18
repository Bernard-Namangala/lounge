# Contributing to Chill Lounge

Thank you for your interest in contributing to Chill Lounge! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check the issue tracker as you might find that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Provide specific examples to demonstrate the steps**.
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** if possible.
- **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened.
- **Specify which version of the app you're using.**
- **Specify the name and version of the OS you're using.**

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps** or point out the part of Chill Lounge which the suggestion is related to.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Explain why this enhancement would be useful** to most Chill Lounge users.
- **List some other applications where this enhancement exists**, if applicable.

### Your First Code Contribution

Unsure where to begin contributing to Chill Lounge? You can start by looking through these "good first issue" and "help wanted" issues:

- [Good First Issues](https://github.com/yourusername/chill-lounge/labels/good%20first%20issue)
- [Help Wanted Issues](https://github.com/yourusername/chill-lounge/labels/help%20wanted)

### Pull Requests

- Fill in the required pull request template.
- Do not include issue numbers in the PR title.
- Follow the style guides.
- End all files with a newline.
- Avoid platform-dependent code.
- Place imports in the following order:
  - Built-in Node modules (such as `path`)
  - NPM modules (such as `react`, `express`)
  - Local modules (using relative paths)

## Style Guides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or fewer
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` when improving the format/structure of the code
  - 🐎 `:racehorse:` when improving performance
  - 🚱 `:non-potable_water:` when plugging memory leaks
  - 📝 `:memo:` when writing docs
  - 🐛 `:bug:` when fixing a bug
  - 🔥 `:fire:` when removing code or files
  - 💚 `:green_heart:` when fixing the CI build
  - ✅ `:white_check_mark:` when adding tests
  - 🔒 `:lock:` when dealing with security
  - ⬆️ `:arrow_up:` when upgrading dependencies
  - ⬇️ `:arrow_down:` when downgrading dependencies
  - 👕 `:shirt:` when removing linter warnings

### JavaScript Style Guide

- Use TypeScript for all new code
- 2 spaces for indentation
- Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
- Inline `export`s with expressions whenever possible

  ```js
  // Use this:
  export const someFunction = () => {};

  // Instead of:
  const someFunction = () => {};
  export { someFunction };
  ```

- Place imports in the following order:
  - External imports (e.g., 'react', 'redux')
  - Internal imports (e.g., '@/components', '@/utils')
  - CSS/SCSS imports
  - Types imports
- Place class properties in the following order:
  - Class static properties and methods
  - Instance properties
  - Constructor
  - Lifecycle methods (componentDidMount, etc.)
  - Event handlers (onClick, etc.)
  - Getter and setter methods
  - Other methods
  - render method

### CSS Style Guide

- Use Tailwind CSS utility classes when possible
- When writing custom CSS:
  - Use kebab-case for class names
  - Use semantic class names (e.g., `.submit-button` instead of `.btn-green`)
  - Use variables for colors, spacing, etc.
  - Avoid using !important

### Testing Style Guide

- Include thoughtfully-worded, well-structured Jest/React Testing Library tests
- Treat `describe` as a noun or situation
- Treat `test` as a statement about state or how an operation changes state
- Use explicit assertions rather than relying on snapshot testing

## Additional Notes

### Issue Labels

- `bug` - Something isn't working
- `documentation` - Improvements or additions to documentation
- `duplicate` - This issue or pull request already exists
- `enhancement` - New feature or request
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `invalid` - This doesn't seem right
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## Recognition

Contributors who make significant improvements may be invited to join the core team.

Thank you for contributing to Chill Lounge!
